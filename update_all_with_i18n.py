import os
import re
import json
from html.parser import HTMLParser

VOID_TAGS = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
SVG_SELF = {'path', 'rect', 'circle', 'line', 'polyline', 'polygon', 'stop', 'use'}

ATTR_RENAME = {
    'class': 'className',
    'for': 'htmlFor',
    'tabindex': 'tabIndex',
    'readonly': 'readOnly',
    'autocomplete': 'autoComplete',
    'maxlength': 'maxLength',
    'autofocus': 'autoFocus',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'xmlns:xlink': 'xmlnsXlink',
    'xlink:href': 'xlinkHref',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset'
}

class Node:
    def __init__(self, tag=None, attrs=None, is_void=False):
        self.tag = tag
        self.attrs = dict(attrs) if attrs else {}
        self.is_void = is_void
        self.children = []
        self.text = None

class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__()
        self.root = Node('root')
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        is_void = tag in VOID_TAGS
        node = Node(tag, attrs, is_void=is_void)
        self.stack[-1].children.append(node)
        if not is_void:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        node = Node(tag, attrs, is_void=True)
        self.stack[-1].children.append(node)

    def handle_endtag(self, tag):
        if tag in VOID_TAGS:
            return
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                self.stack = self.stack[:i]
                break

    def handle_data(self, data):
        if data:
            node = Node()
            node.text = data
            self.stack[-1].children.append(node)

def convert_click_handler(expr):
    expr = re.sub(r'\bshowInbox\s*=\s*!showInbox\b', 'setProp("showInbox", !showInbox)', expr)
    expr = re.sub(r'\bshowInbox\s*=\s*false\b', 'setProp("showInbox", false)', expr)
    expr = re.sub(r'\bshowInbox\s*=\s*true\b', 'setProp("showInbox", true)', expr)
    expr = re.sub(r'\bshowSimLog\s*=\s*!showSimLog\b', 'setProp("showSimLog", !showSimLog)', expr)
    expr = re.sub(r'\bshowSimLog\s*=\s*false\b', 'setProp("showSimLog", false)', expr)
    expr = re.sub(r'\bshowSimLog\s*=\s*true\b', 'setProp("showSimLog", true)', expr)

    statements = [s.strip() for s in expr.split(';') if s.strip()]
    converted = []
    for s in statements:
        m = re.match(r'^([a-zA-Z0-9_\.\[\]\'\"]+)\s*=\s*(.+)$', s)
        if m:
            target, val = m.groups()
            if not target.startswith('setProp'):
                converted.append(f'setProp("{target}", {val})')
            else:
                converted.append(s)
        else:
            converted.append(s)
    return '; '.join(converted)

def node_to_jsx(node, indent=''):
    if node.text is not None:
        raw = node.text
        if not raw.strip():
            return raw
        # Check if contains Arabic
        if re.search(r'[\u0600-\u06FF]', raw):
            stripped = raw.strip()
            escaped = json.dumps(stripped)
            lead = ' ' if raw.startswith((' ', '\n', '\t')) else ''
            trail = ' ' if raw.endswith((' ', '\n', '\t')) else ''
            return f'{lead}{{t({escaped})}}{trail}'

        # Pure text without Arabic: escape JSX special characters
        t_clean = raw.replace('{', '{"{"}').replace('}', '{"}"}').replace('>', "{'>'}").replace('<', "{'<'}")
        return t_clean

    tag = node.tag
    attrs = dict(node.attrs)

    # Template tag
    if tag == 'template':
        if 'x-for' in attrs:
            for_expr = attrs['x-for']
            key_expr = attrs.get(':key', 'index')
            m = re.match(r'^\s*\(?\s*([a-zA-Z0-9_]+(?:\s*,\s*[a-zA-Z0-9_]+)?)\s*\)?\s+in\s+(.+)$', for_expr)
            if m:
                item_var, list_expr = m.groups()
                inner = ''.join(node_to_jsx(c, indent + '  ') for c in node.children)
                return f'{{({list_expr} || []).map(({item_var}, index) => (<React.Fragment key={{{key_expr}}}>{inner}</React.Fragment>))}}'
        elif 'x-if' in attrs:
            if_expr = attrs['x-if']
            inner = ''.join(node_to_jsx(c, indent + '  ') for c in node.children)
            return f'{{Boolean({if_expr}) && (<React.Fragment>{inner}</React.Fragment>)}}'
        return ''.join(node_to_jsx(c, indent) for c in node.children)

    # Normal tag
    jsx_attrs = []
    static_class = attrs.pop('class', None)
    dyn_class = attrs.pop(':class', None)
    if static_class and dyn_class:
        jsx_attrs.append(f'className={{clsx("{static_class}", {dyn_class})}}')
    elif static_class:
        jsx_attrs.append(f'className="{static_class}"')
    elif dyn_class:
        jsx_attrs.append(f'className={{clsx({dyn_class})}}')

    # Styles (always wrap in parseStyle to ensure style objects in React)
    static_style = attrs.pop('style', None)
    dyn_style = attrs.pop(':style', None)
    if static_style and dyn_style:
        jsx_attrs.append(f'style={{{{ ...parseStyle("{static_style}"), ...parseStyle({dyn_style}) }}}}')
    elif static_style:
        jsx_attrs.append(f'style={{parseStyle("{static_style}")}}')
    elif dyn_style:
        jsx_attrs.append(f'style={{parseStyle({dyn_style})}}')

    # Model & Change handling (including x-model.number, x-model.trim, etc.)
    model_key = None
    for k in list(attrs.keys()):
        if k == 'x-model' or k.startswith('x-model.'):
            model_key = k
            break

    if model_key:
        model_expr = attrs.pop(model_key)
        is_num = model_key.endswith('.number')
        val_cast = f'Number(e.target.value)' if is_num else 'e.target.value'
        if '@change' in attrs:
            change_expr = attrs.pop('@change')
            jsx_attrs.append(f'value={{{model_expr} ?? ""}}')
            jsx_attrs.append(f'onChange={{(e) => {{ setProp("{model_expr}", {val_cast}); {convert_click_handler(change_expr)}; }}}}')
        elif tag == 'input' and attrs.get('type') == 'checkbox':
            jsx_attrs.append(f'checked={{Boolean({model_expr})}}')
            jsx_attrs.append(f'onChange={{(e) => setProp("{model_expr}", e.target.checked)}}')
        else:
            jsx_attrs.append(f'value={{{model_expr} ?? ""}}')
            jsx_attrs.append(f'onChange={{(e) => setProp("{model_expr}", {val_cast})}}')

    # Events
    for k in list(attrs.keys()):
        if k == '@click':
            c_expr = convert_click_handler(attrs.pop(k))
            jsx_attrs.append(f'onClick={{() => {{ {c_expr}; }}}}')
        elif k == '@submit.prevent':
            s_expr = convert_click_handler(attrs.pop(k))
            jsx_attrs.append(f'onSubmit={{(e) => {{ e.preventDefault(); {s_expr}; }}}}')
        elif k == '@change':
            ch_expr = convert_click_handler(attrs.pop(k))
            jsx_attrs.append(f'onChange={{(e) => {{ {ch_expr}; }}}}')
        elif k == '@input':
            inp_expr = convert_click_handler(attrs.pop(k))
            jsx_attrs.append(f'onInput={{(e) => {{ {inp_expr}; }}}}')
        elif k.startswith(':') and k not in (':class', ':style', ':key'):
            attr_name = ATTR_RENAME.get(k[1:], k[1:])
            val_expr = attrs.pop(k)
            jsx_attrs.append(f'{attr_name}={{{val_expr}}}')
        elif k == 'x-html':
            h_expr = attrs.pop(k)
            jsx_attrs.append(f'dangerouslySetInnerHTML={{{{ __html: {h_expr} }}}}')

    # Remaining attrs
    for k, v in attrs.items():
        if k in ['x-cloak', 'x-transition', 'x-transition.opacity']:
            continue
        if k.startswith('@keydown') or k.startswith('x-show') or k == 'x-text':
            continue
        renamed = ATTR_RENAME.get(k, k)
        if v is None:
            jsx_attrs.append(renamed)
        else:
            if k in ('placeholder', 'title') and re.search(r'[\u0600-\u06FF]', v):
                jsx_attrs.append(f'{renamed}={{t({json.dumps(v)})}}')
            else:
                v_escaped = v.replace('"', '\\"')
                jsx_attrs.append(f'{renamed}="{v_escaped}"')

    attr_str = (' ' + ' '.join(jsx_attrs)) if jsx_attrs else ''

    # Inner content
    if 'x-text' in node.attrs:
        t_expr = node.attrs['x-text']
        return f'<{tag}{attr_str}>{{{t_expr}}}</{tag}>'

    if node.is_void or (tag in SVG_SELF and not node.children):
        return f'<{tag}{attr_str} />'

    children_jsx = ''.join(node_to_jsx(c, indent + '  ') for c in node.children)
    return f'<{tag}{attr_str}>{children_jsx}</{tag}>'

DESTRUCTURE_BLOCK = """
  const sim = useSimulator();
  const {
    screen, role, page, signupStep, drawer, showInbox, showSimLog,
    cd, invFilter, ticketFilter, creditFilter, creditNote, simLog, inbox, clientQuotes,
    quoteForm, contractForm, annexForm, actionNote, visitForm, transferForm,
    visitMonthFilter, workSites, housingOptions, ticketForm, laborForm, ticketTypeOptions,
    modal, toasts, statusMap, ticketMap, invMap, salMap, clientMap, account,
    pickDept, pickUnit, actionForm, workStatusMap, workItems, org, roleMeta,
    leadMap, pipelineSteps, creditMap, salesLeads, salesRenewals, renewMap, priceList,
    salesVisits, salesTarget, workers, contracts, tickets, invoices, docs,
    amClients, escalations, salary, creditReqMap, creditAttachDefs, creditRequests,
    clients, rooms, waiting,
    salesInbox, salesOpen, salesWon, salesAchieved, salesPct, salesPipeline, renewalsUrgent,
    supQuoteQueue, mgrQuoteQueue, visitsThisMonth, visitMonths, visitsForFilter,
    offersSubmittedCount, contractsSignedCount, clientsFullyActivated, salesActivityScore,
    salaryTotal, salaryNet, creditOfficerQueue, creditMgrQueue, filteredCreditRequests,
    occupiedBeds, freeBeds, activeWorkers, openTickets, invoicesDue, invoicesPaidTotal, invoicesOpenTotal,
    filteredInvoices, filteredTickets, pendingCreditLeads, roleInbox, roleInboxUnread,
    deptList, hrUnits, positionsForPick, rolePathLabel, currentPersonName, myWork,
    escalateTargets, nextRouteOptions, quoteFormTotal,
    setProp, goApp, switchRole, openPage, nextStep, prevStep, registerNewClient,
    openDrill, closeModal, openTicketWizard, submitTicket, submitLaborRequest,
    toast, dismiss, advance, readLead, quoteMonths, quoteUnitPrice, quoteLineTotal,
    quoteClientAllowLabel, allAllowancesOnClient, setAllAllowancesOnClient,
    serializeQuoteLine, emptyQuoteLine, quoteLinesSum, addQuoteLine, removeQuoteLine,
    initQuoteForm, submitQuote, releaseQuoteToClient, supApproveQuote, supReturnQuote,
    supEscalateQuote, supReassignLead, mgrFinalApproveQuote, mgrRejectQuote,
    acceptQuote, rejectQuote, toNegotiation, submitContract, submitAnnex, handover,
    logVisit, startRenewal, pipelineIndex, captureVisitGeo, submitFieldVisit,
    advanceLead, applyWorkerTransfer, workerStatusAction, clientCardAction,
    renewalAction, reassign, intervene, approveSheet, buildAttachments,
    hydrateCreditRequests, createCreditRequest, creditAttachStats, openCreditCase,
    toggleCreditAttach, creditMarkAllRequired, syncLeadCredit, syncClientAccount,
    creditHold, creditApproveAudit, creditReject, finApproveCredit, finRejectCredit,
    approveLeadCredit, rejectLeadCredit, approveCredit, assignBed, freeBed, transfer,
    runScenario, labelOf, onPickDept, onPickUnit, deadlineLabel, openAction,
    openActionFromAm, openActionFromEsc, submitAction,
    lang, toggleLang, setLang, t
  } = sim;
"""

with open('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/app-source-body.html') as f:
    html = f.read()

parser = TreeBuilder()
parser.feed(html)
root = parser.root

def find_nodes(node, predicate, results=None):
    if results is None: results = []
    if predicate(node):
        results.append(node)
    for c in node.children:
        find_nodes(c, predicate, results)
    return results

def write_component(filepath, comp_name, node, is_page=False, extra_imports=""):
    jsx = node_to_jsx(node)
    content = f"""import React from 'react';
import {{ useSimulator }} from '{'../context/SimulatorContext' if not is_page else '../context/SimulatorContext'}';
import {{ clsx, parseStyle }} from '../utils';
{extra_imports}

export default function {comp_name}() {{
{DESTRUCTURE_BLOCK}

  return (
{jsx}
  );
}}
"""
    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Generated {filepath}")

# 1. LandingView
landing = find_nodes(root, lambda n: n.tag == 'section' and n.attrs.get('x-show') == "screen==='landing'")[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/LandingView.jsx', 'LandingView', landing, extra_imports="import LanguageToggle from './LanguageToggle';")

# 2. SignupSection
signup = find_nodes(root, lambda n: n.tag == 'section' and n.attrs.get('x-show') == "screen==='signup'")[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/SignupSection.jsx', 'SignupSection', signup)

# 3. Header
header = find_nodes(root, lambda n: n.tag == 'header')[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/Header.jsx', 'Header', header, extra_imports="import LanguageToggle from './LanguageToggle';")

# 4. SimBar
sim_bar = find_nodes(root, lambda n: 'sim-bar' in n.attrs.get('class', ''))[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/SimBar.jsx', 'SimBar', sim_bar)

# 5. InboxDrawer
inbox = find_nodes(root, lambda n: n.attrs.get('x-show') == 'showInbox')[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/InboxDrawer.jsx', 'InboxDrawer', inbox)

# 6. SimLogDrawer
simlog = find_nodes(root, lambda n: n.attrs.get('x-show') == 'showSimLog')[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/SimLogDrawer.jsx', 'SimLogDrawer', simlog)

# 7. Sidebar
aside = find_nodes(root, lambda n: n.tag == 'aside' and 'border-l' in n.attrs.get('class', ''))[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/Sidebar.jsx', 'Sidebar', aside)

# 8. DrillModal
modal = find_nodes(root, lambda n: n.attrs.get('x-show') == 'modal.open')[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/DrillModal.jsx', 'DrillModal', modal)

# 9. ToastContainer
toasts = find_nodes(root, lambda n: 'max-w-md' in n.attrs.get('class', '') and 'fixed' in n.attrs.get('class', ''))[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/ToastContainer.jsx', 'ToastContainer', toasts)

# 10. Pages
PAGE_MAP = {
    'desk': 'DeskPage',
    'legal': 'LegalPage',
    'hr': 'HrPage',
    'procurement': 'ProcurementPage',
    'dashboard': 'DashboardPage',
    'workers': 'WorkersPage',
    'contracts': 'ContractsPage',
    'invoices': 'InvoicesPage',
    'tickets': 'TicketsPage',
    'am': 'AmPage',
    'followup': 'FollowupPage',
    'finance': 'FinancePage',
    'salesSpec': 'SalesSpecPage',
    'salesSup': 'SalesSupPage',
    'salesMgr': 'SalesMgrPage',
    'credit': 'CreditPage',
    'housing': 'HousingPage',
    'admin': 'AdminPage',
    'profile': 'ProfilePage'
}

for page_key, comp_name in PAGE_MAP.items():
    page_nodes = find_nodes(root, lambda n: n.tag == 'section' and n.attrs.get('x-show') == f"page==='{page_key}'")
    if page_nodes:
        write_component(f'/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/pages/{comp_name}.jsx', comp_name, page_nodes[0], is_page=True)

print("All components regenerated with i18n support!")
