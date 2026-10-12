import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';
import LanguageDropdown from './LanguageDropdown';

export default function LandingView() {

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
<section className="min-h-screen relative overflow-hidden bg-ink text-white">
  <div className="absolute inset-0" style={parseStyle("background:radial-gradient(circle at 82% 10%, rgba(0,172,233,.5) 0, transparent 42%),radial-gradient(circle at 8% 100%, rgba(0,172,233,.22) 0, transparent 45%)")}></div>
  <div className="relative max-w-6xl mx-auto px-6 min-h-screen flex flex-col">
    <div className="flex items-center justify-between py-6">
      <img className="h-9 w-auto" src="data:image/png;base64,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" alt="Jussur Emdad" />
      <div className="flex items-center gap-3 text-sm">
        <LanguageDropdown dark={true} />
        <button className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors font-medium" onClick={() => { goApp(); }}>{t("\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644")}</button>
        
        <button className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold transition-colors" onClick={() => { setProp("screen", 'signup'); setProp("signupStep", 1); }}>{t("\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628")}</button>
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center items-center text-center py-14 sm:py-20 px-2">
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[12px] font-medium mb-6"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 sim-pulse"></span> {t("\u0645\u062d\u0627\u0643\u064a \u062a\u0641\u0627\u0639\u0644\u064a \u00b7 MVP")}</span>
      <h1 className="font-extrabold tracking-tight leading-[1.05] max-w-4xl">
        <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">{t("\u062c\u0633\u0648\u0631 \u0627\u0644\u0625\u0645\u062f\u0627\u062f")}</span>
        <span className="block text-xl sm:text-2xl md:text-3xl mt-4 text-brand-300 font-bold">{t("\u0644\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629")}</span>
      </h1>
      <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-l from-transparent via-brand-400 to-transparent"></div>
      <p className="mt-7 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">{t("\u0645\u0646\u0635\u0651\u0629 \u0645\u0648\u062d\u0651\u062f\u0629 \u0644\u0625\u062f\u0627\u0631\u0629 \u062a\u0648\u0631\u064a\u062f \u0627\u0644\u0639\u0645\u0627\u0644\u0629 \u0648\u0627\u0644\u0639\u0642\u0648\u062f \u0648\u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u0627\u0644\u0625\u0633\u0643\u0627\u0646 \u2014 \u0628\u0634\u0641\u0627\u0641\u064a\u0629 \u0643\u0627\u0645\u0644\u0629 \u0648\u062a\u062a\u0628\u0651\u0639 \u0644\u062d\u0638\u064a \u064a\u0631\u0628\u0637 \u0627\u0644\u0639\u0645\u064a\u0644 \u0628\u0641\u0631\u064a\u0642 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0648\u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0648\u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646.")}</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <button className="px-8 py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-bold shadow-lift transition-all hover:-translate-y-0.5" onClick={() => { goApp(); }}>{t("\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646 \u2014 \u062f\u062e\u0648\u0644 \u0627\u0644\u0628\u0648\u0627\u0628\u0629")}</button>
        <button className="px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold transition-colors" onClick={() => { setProp("screen", 'signup'); setProp("signupStep", 1); }}>{t("\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628 \u062c\u062f\u064a\u062f")}</button>
      </div>
      <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5"><div className="text-2xl sm:text-3xl font-extrabold text-brand-300">128+</div><div className="text-[11px] sm:text-[13px] text-slate-400 mt-1">{t("\u0639\u0627\u0645\u0644 \u062a\u062d\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644")}</div></div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5"><div className="text-2xl sm:text-3xl font-extrabold text-brand-300">{t("24\u0633")}</div><div className="text-[11px] sm:text-[13px] text-slate-400 mt-1">{t("\u0632\u0645\u0646 \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629")}</div></div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5"><div className="text-2xl sm:text-3xl font-extrabold text-brand-300">98%</div><div className="text-[11px] sm:text-[13px] text-slate-400 mt-1">{t("\u0631\u0636\u0627 \u0627\u0644\u0639\u0645\u0644\u0627\u0621")}</div></div>
      </div>
    </div>
    <div className="py-6 text-center text-[12px] text-slate-500">{t("\u00a9 2026 \u062c\u0633\u0648\u0631 \u0627\u0644\u0625\u0645\u062f\u0627\u062f \u00b7 \u0645\u062d\u0627\u0643\u064a MVP \u0645\u0633\u062a\u0642\u0644 \u0644\u0644\u0645\u0634\u0627\u0631\u0643\u0629")}</div>
  </div>
</section>
  );
}
