import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function ProfilePage() {

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
<section data-crm-entity="account">
        <div className="rounded-3xl overflow-hidden shadow-card ring-1 ring-slate-100 bg-white mb-6">
          <div className="relative h-24 sm:h-28 bg-ink"><div className="absolute inset-0" style={parseStyle("background:radial-gradient(circle at 85% 20%, rgba(0,172,233,.55) 0, transparent 55%)")}></div></div>
          <div className="px-4 sm:px-6 pb-5 sm:pb-6 -mt-10 sm:-mt-12 relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 sm:gap-4 text-center sm:text-right">
              <div className="grid place-items-center h-20 sm:h-24 w-20 sm:w-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-400 to-brand-700 text-white text-2xl sm:text-3xl font-extrabold ring-4 ring-white shadow-lift shrink-0">{t("\u0622")}</div>
              <div className="pb-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap"><h1 className="text-lg sm:text-xl font-extrabold text-slate-800">{t(account.name)}</h1><span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{t("\u0645\u0648\u062b\u0651\u0642\u0629")}</span></div>
                <p className="text-[12px] sm:text-[13px] text-slate-400 mt-1">{t('عميل مؤسسي · '+account.sector+' · منذ '+account.since+' · '+account.city)}</p>
                <p className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5 font-mono" dir="ltr">{t(account.id + ' · CR '+account.cr)}</p>
              </div>
            </div>
            <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-ink text-white font-bold text-sm ring-1 ring-brand-500/30 hover:bg-black transition-colors text-center shrink-0" onClick={() => { openPage('dashboard'); }}>{t("\u0644\u0648\u062d\u0629 \u0627\u0644\u0639\u0645\u064a\u0644")}</button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-[11px] text-slate-400 mb-1">{t("\u0627\u0644\u0633\u062c\u0644 \u0627\u0644\u062a\u062c\u0627\u0631\u064a")}</div><b className="text-slate-800 font-mono text-[13px] sm:text-sm" dir="ltr">{t(account.cr)}</b></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-[11px] text-slate-400 mb-1">{t("\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0636\u0631\u064a\u0628\u064a")}</div><b className="text-slate-800 font-mono text-[12px] sm:text-[13px] truncate block" dir="ltr">{t(account.vat)}</b></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-[11px] text-slate-400 mb-1">{t("\u0627\u0644\u0645\u062f\u064a\u0646\u0629")}</div><b className="text-slate-800 text-[13px] sm:text-sm">{t(account.city)}</b></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-[11px] text-slate-400 mb-1">{t("\u0645\u062f\u064a\u0631 \u0627\u0644\u062d\u0633\u0627\u0628")}</div><b className="text-slate-800 text-[13px] sm:text-sm">{t(account.amName)}</b></div>
        </div>
        <h2 className="text-lg font-extrabold text-slate-800 mb-4">{t("\u0627\u0644\u0648\u062b\u0627\u0626\u0642 \u0648\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062c\u0651\u0644\u0629")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {(docs || []).map((d, index) => (<React.Fragment key={d.id}><button className="text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('doc', d); }}>
            <div className="flex items-start justify-between"><span className="grid place-items-center h-10 sm:h-11 w-10 sm:w-11 rounded-xl bg-brand-50 text-brand-600" dangerouslySetInnerHTML={{ __html: d.icon }}></span><span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{t(d.badge)}</span></div>
            <h3 className="mt-3 sm:mt-4 font-bold text-slate-800 text-sm sm:text-base">{t(d.title)}</h3><p className="text-[12px] text-slate-400 mt-1">{t(d.meta)}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-brand-600">{t("\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644")} <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6" /></svg></span>
          </button></React.Fragment>))}
        </div>
      </section>
  );
}
