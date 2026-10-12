import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function HrPage() {

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
<section>
        <div className="mb-6"><h1 className="text-xl sm:text-2xl font-extrabold text-slate-800">{t("\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629 \u0644\u0644\u0639\u0645\u0627\u0644")}</h1><p className="text-[13px] sm:text-[14px] text-slate-400 mt-1">{t("\u0648\u062d\u062f\u0627\u062a: \u0627\u0644\u062a\u0648\u0638\u064a\u0641 \u0627\u0644\u062e\u0627\u0631\u062c\u064a \u00b7 HR \u0627\u0644\u0639\u0645\u0627\u0644\u0629 \u00b7 GR \u2014 \u0643\u0644 \u0648\u062d\u062f\u0629 \u0628\u062a\u0633\u0644\u0633\u0644\u0647\u0627 \u0627\u0644\u0648\u0638\u064a\u0641\u064a \u0648\u0635\u0644\u0627\u062d\u064a\u0627\u062a\u0647\u0627.")}</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {(hrUnits || []).map((u, index) => (<React.Fragment key={u.id}>
            <button className="text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 transition-all" onClick={() => { setProp("pickUnit", u.id); onPickUnit(); openPage('desk'); }} type="button">
              <div className="text-[11px] font-bold text-violet-600 mb-1">{t("\u0648\u062d\u062f\u0629")}</div>
              <b className="text-slate-800">{t(u.label)}</b>
              <p className="text-[12px] text-slate-400 mt-1">{t(u.hint)}</p>
            </button>
          </React.Fragment>))}
        </div>
        <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-ink text-white font-bold text-sm text-center" onClick={() => { openPage('desk'); }} type="button">{t("\u0635\u0646\u062f\u0648\u0642 \u0639\u0645\u0644 \u0627\u0644\u0648\u062d\u062f\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629")}</button>
      </section>
  );
}
