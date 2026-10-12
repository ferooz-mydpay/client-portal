import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function SimBar() {

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
<div className="sim-bar text-white px-4 sm:px-6 py-2.5 flex flex-wrap items-center gap-2 justify-between">
    <div className="flex items-center gap-2 text-[12px]">
      <span className="h-2 w-2 rounded-full bg-emerald-400 sim-pulse"></span>
      <span className="font-bold">{t("\u0645\u062d\u0627\u0643\u064a MVP")}</span>
      <span className="text-white/60 hidden sm:inline">{t("\u00b7 \u0628\u062f\u0651\u0644 \u0627\u0644\u062f\u0648\u0631 \u0645\u0646 \u0627\u0644\u0623\u0639\u0644\u0649 \u00b7 \u0623\u0648 \u0634\u063a\u0651\u0644 \u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u062c\u0627\u0647\u0632 \u0644\u0644\u0639\u0631\u0636")}</span>
    </div>
    <div className="flex flex-wrap gap-1.5">
      <button className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold border border-white/10" onClick={() => { runScenario('onboard'); }}>{t("\u2460 \u062a\u0633\u062c\u064a\u0644 \u0639\u0645\u064a\u0644 \u062c\u062f\u064a\u062f")}</button>
      <button className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold border border-white/10" onClick={() => { runScenario('credit'); }}>{t("\u2461 \u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0626\u062a\u0645\u0627\u0646")}</button>
      <button className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold border border-white/10" onClick={() => { runScenario('quote'); }}>{t("\u2462 \u0639\u0631\u0636 \u0633\u0639\u0631")}</button>
      <button className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold border border-white/10" onClick={() => { runScenario('close'); }}>{t("\u2463 \u062a\u0648\u0642\u064a\u0639 + \u062a\u0633\u0644\u064a\u0645")}</button>
      <button className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold border border-white/10" onClick={() => { runScenario('ticket'); }}>{t("\u2464 \u062a\u0630\u0643\u0631\u0629 + SLA")}</button>
      <button className="px-2.5 py-1 rounded-lg bg-brand-500 hover:bg-brand-400 text-[11px] font-bold" onClick={() => { runScenario('full'); }}>{t("\u25b6 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u062f\u0648\u0631\u0629 \u0643\u0627\u0645\u0644\u0629")}</button>
    </div>
  </div>
  );
}
