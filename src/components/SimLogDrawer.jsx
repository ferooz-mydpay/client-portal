import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function SimLogDrawer() {

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
<div className={clsx("fixed top-16 sm:top-[110px] z-[45] w-[calc(100vw-1.5rem)] sm:w-[400px] max-w-md bg-white rounded-2xl shadow-2xl ring-1 ring-slate-200 overflow-hidden", lang === "en" ? "right-3 sm:right-4" : "left-3 sm:left-4")}>
    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-ink text-white">
      <div className="font-extrabold text-[14px] flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 sim-pulse"></span>{t("\u0633\u062c\u0644 \u0627\u0644\u062a\u062f\u0641\u0642 \u0627\u0644\u062d\u064a")}</div>
      <button type="button" className="text-white/60 hover:text-white text-[12px] font-bold cursor-pointer" onClick={() => { setProp("showSimLog", false); }}>{t("\u0625\u063a\u0644\u0627\u0642")}</button>
    </div>
    <div className="max-h-96 overflow-y-auto p-3 space-y-2">
      {(simLog || []).map((e, index) => (<React.Fragment key={e.id}>
        <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-lg">{t(e.from)}</span>
            <span className="text-[10px] text-slate-400">{t(e.time)}</span>
          </div>
          <div className="font-bold text-[13px] text-slate-800 mt-1.5">{t(e.title)}</div>
          <div className="text-[12px] text-slate-500 mt-0.5">{t(e.detail)}</div>
          {Boolean(e.to) && (<div className="text-[10px] text-slate-400 mt-1">{t('→ '+e.to)}</div>)}
        </div>
      </React.Fragment>))}
      {Boolean(!simLog.length) && (<div className="py-8 text-center text-[13px] text-slate-400">{t("\u0634\u063a\u0651\u0644 \u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u0645\u0646 \u0627\u0644\u0634\u0631\u064a\u0637 \u0623\u0639\u0644\u0627\u0647 \u0644\u0628\u062f\u0621 \u0627\u0644\u0645\u062d\u0627\u0643\u0627\u0629.")}</div>)}
    </div>
  </div>
  );
}
