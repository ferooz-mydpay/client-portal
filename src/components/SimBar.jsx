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
  <div className="sim-bar text-white px-3 sm:px-6 py-2 flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
    <div className="flex items-center gap-2 text-[12px] shrink-0">
      <span className="h-2 w-2 rounded-full bg-emerald-400 sim-pulse"></span>
      <span className="font-bold">{t("محاكي MVP")}</span>
      <span className="text-white/60 hidden sm:inline">{t("· بدّل الدور من الأعلى · أو شغّل سيناريو جاهز للعرض")}</span>
    </div>
    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 w-full sm:w-auto -mx-1 px-1 sm:mx-0 sm:px-0">
      <button className="whitespace-nowrap shrink-0 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold border border-white/10" onClick={() => { runScenario('onboard'); }}>{t("① تسجيل عميل جديد")}</button>
      <button className="whitespace-nowrap shrink-0 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold border border-white/10" onClick={() => { runScenario('credit'); }}>{t("② اعتماد ائتمان")}</button>
      <button className="whitespace-nowrap shrink-0 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold border border-white/10" onClick={() => { runScenario('quote'); }}>{t("③ عرض سعر")}</button>
      <button className="whitespace-nowrap shrink-0 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold border border-white/10" onClick={() => { runScenario('close'); }}>{t("④ توقيع + تسليم")}</button>
      <button className="whitespace-nowrap shrink-0 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-bold border border-white/10" onClick={() => { runScenario('ticket'); }}>{t("⑤ تذكرة + SLA")}</button>
      <button className="whitespace-nowrap shrink-0 px-2.5 py-1 rounded-lg bg-brand-500 hover:bg-brand-400 text-[11px] font-bold" onClick={() => { runScenario('full'); }}>{t("▶ تشغيل الدورة كاملة")}</button>
    </div>
  </div>
  );
}
