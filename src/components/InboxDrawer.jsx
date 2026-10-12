import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function InboxDrawer() {

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


  return (
<div className={clsx("fixed top-[110px] z-[45] w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl ring-1 ring-slate-200 overflow-hidden", lang === "en" ? "right-4" : "left-4")}>
    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
      <div className="font-extrabold text-slate-800 text-[14px]">{t("\u0635\u0646\u062f\u0648\u0642")} <span>{t((roleMeta[role].name? roleMeta[role].name+' · ':'')+(roleMeta[role].short||roleMeta[role].label))}</span></div>
      <button className="text-slate-400 hover:text-slate-600 text-[12px] font-bold" onClick={() => { setProp("showInbox", false); }}>{t("\u0625\u063a\u0644\u0627\u0642")}</button>
    </div>
    <div className="max-h-80 overflow-y-auto divide-y divide-slate-50">
      {(roleInbox || []).map((n, index) => (<React.Fragment key={n.id}>
        <button className="w-full text-start px-4 py-3 hover:bg-slate-50 transition-colors" onClick={() => { setProp("n.read", true); if(n.gotoRole){ switchRole(n.gotoRole); } else if(n.gotoPage){ openPage(n.gotoPage); } setProp("showInbox", false); }}>
          <div className="flex items-start gap-2">
            <span className={clsx("mt-1 h-2 w-2 rounded-full shrink-0", n.read?'bg-slate-200':'bg-brand-500')}></span>
            <div className="min-w-0">
              <div className="font-bold text-[13px] text-slate-800">{t(n.title)}</div>
              <div className="text-[12px] text-slate-500 mt-0.5">{t(n.msg)}</div>
              <div className="text-[10px] text-slate-400 mt-1">{t(n.time)}</div>
            </div>
          </div>
        </button>
      </React.Fragment>))}
      {Boolean(!roleInbox.length) && (<div className="px-4 py-8 text-center text-[13px] text-slate-400">{t("\u0644\u0627 \u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0644\u0647\u0630\u0627 \u0627\u0644\u062f\u0648\u0631 \u062d\u0627\u0644\u064a\u0627\u064b.")}</div>)}
    </div>
  </div>
  );
}
