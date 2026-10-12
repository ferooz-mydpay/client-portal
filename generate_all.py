import os
import re
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
    statements = [s.strip() for s in expr.split(';') if s.strip()]
    converted = []
    for s in statements:
        m = re.match(r'^([a-zA-Z0-9_\.\[\]\'\"]+)\s*=\s*(.+)$', s)
        if m:
            target, val = m.groups()
            converted.append(f'setProp("{target}", {val})')
        else:
            converted.append(s)
    return '; '.join(converted)

def node_to_jsx(node, indent=''):
    if node.text is not None:
        t = node.text
        if not t.strip():
            return t
        t = t.replace('{', '{"{"}').replace('}', '{"}"}')
        return t

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

    # Styles
    static_style = attrs.pop('style', None)
    dyn_style = attrs.pop(':style', None)
    if static_style and dyn_style:
        jsx_attrs.append(f'style={{{{ ...parseStyle("{static_style}"), ...parseStyle({dyn_style}) }}}}')
    elif static_style:
        jsx_attrs.append(f'style={{parseStyle("{static_style}")}}')
    elif dyn_style:
        jsx_attrs.append(f'style={{parseStyle({dyn_style})}}')

    # Events
    for k in list(attrs.keys()):
        if k == '@click':
            expr = convert_click_handler(attrs.pop(k))
            jsx_attrs.append(f'onClick={{() => {{ {expr}; }}}}')
        elif k == '@change':
            expr = convert_click_handler(attrs.pop(k))
            jsx_attrs.append(f'onChange={{(e) => {{ {expr}; }}}}')
        elif k == '@submit.prevent':
            expr = convert_click_handler(attrs.pop(k))
            jsx_attrs.append(f'onSubmit={{(e) => {{ e.preventDefault(); {expr}; }}}}')
        elif k == 'x-model':
            m_expr = attrs.pop(k)
            jsx_attrs.append(f'value={{{m_expr} ?? ""}} onChange={{(e) => setProp("{m_expr}", e.target.value)}}')
        elif k == 'x-model.number':
            m_expr = attrs.pop(k)
            jsx_attrs.append(f'value={{{m_expr} ?? ""}} onChange={{(e) => setProp("{m_expr}", Number(e.target.value))}}')
        elif k == ':value':
            v_expr = attrs.pop(k)
            jsx_attrs.append(f'value={{{v_expr}}}')
        elif k == ':disabled':
            d_expr = attrs.pop(k)
            jsx_attrs.append(f'disabled={{Boolean({d_expr})}}')
        elif k == ':checked':
            c_expr = attrs.pop(k)
            jsx_attrs.append(f'checked={{Boolean({c_expr})}}')
        elif k == ':href':
            h_expr = attrs.pop(k)
            jsx_attrs.append(f'href={{{h_expr}}}')
        elif k == ':key':
            key_expr = attrs.pop(k)
            jsx_attrs.append(f'key={{{key_expr}}}')
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
    openActionFromAm, openActionFromEsc, submitAction
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

os.makedirs('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components', exist_ok=True)
os.makedirs('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/pages', exist_ok=True)

def write_component(filepath, comp_name, node, is_page=False):
    jsx = node_to_jsx(node)
    content = f"""import React from 'react';
import {{ useSimulator }} from '{'../context/SimulatorContext' if not is_page else '../context/SimulatorContext'}';
import {{ clsx, parseStyle }} from '../utils';

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
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/LandingView.jsx', 'LandingView', landing)

# 2. SignupSection
signup = find_nodes(root, lambda n: n.tag == 'section' and n.attrs.get('x-show') == "screen==='signup'")[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/SignupSection.jsx', 'SignupSection', signup)

# 3. Header
header = find_nodes(root, lambda n: n.tag == 'header')[0]
write_component('/Users/mypc/Desktop/Jussur-Emdad-MVP-Simulator-React/src/components/Header.jsx', 'Header', header)

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

print("All components generated successfully!")
