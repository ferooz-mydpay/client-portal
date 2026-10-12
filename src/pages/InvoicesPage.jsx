import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function InvoicesPage() {

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
<section data-crm-entity="invoice">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800">{t("\u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a")}</h1>
            <p className="text-[13px] sm:text-[14px] text-slate-400 mt-1">{t("\u0627\u0639\u0631\u0641 \u0645\u0627 \u0639\u0644\u064a\u0643 \u062f\u0641\u0639\u0647 \u0627\u0644\u0622\u0646\u060c \u0648\u0645\u062a\u0627 \u062a\u0645 \u0633\u062f\u0627\u062f\u0647 \u2014 \u0628\u062f\u0648\u0646 \u062c\u062f\u0627\u0648\u0644 \u0645\u0639\u0642\u0651\u062f\u0629.")}</p>
          </div>
          <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-[13px] font-bold hover:bg-slate-50 shrink-0 text-center" onClick={() => { toast('info','تواصل مالي','سيتم توجيهك لمدير حسابك أو المالية عند الربط الفعلي.'); }}>{t("\u0627\u0633\u062a\u0641\u0633\u0627\u0631 \u0639\u0646 \u0641\u0627\u062a\u0648\u0631\u0629")}</button>
        </div>

        
        {Boolean(invoices.filter(i=>i.status==='overdue').length) && (<div className="mb-5 rounded-2xl bg-rose-50 border border-rose-100 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-rose-100 text-rose-600 shrink-0"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4M12 17h.01" /></svg></span>
            <div>
              <div className="font-bold text-rose-800 text-[14px]">{t("\u0644\u062f\u064a\u0643 \u0641\u0648\u0627\u062a\u064a\u0631 \u0645\u062a\u0623\u062e\u0631\u0629")}</div>
              <div className="text-[12px] text-rose-600/90 mt-0.5">{t("\u0633\u062f\u0651\u062f\u0647\u0627 \u0623\u0648 \u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0645\u062f\u064a\u0631 \u062d\u0633\u0627\u0628\u0643 \u0644\u062a\u062c\u0646\u0651\u0628 \u062a\u0639\u0637\u0651\u0644 \u0627\u0644\u062e\u062f\u0645\u0627\u062a.")}</div>
            </div>
          </div>
          <button className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-[12px] font-bold shrink-0 text-center" onClick={() => { setProp("invFilter", 'overdue'); }}>{t("\u0639\u0631\u0636 \u0627\u0644\u0645\u062a\u0623\u062e\u0631\u0629")}</button>
        </div>)}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-5">
          <button className={clsx("text-right rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 transition-all", invFilter==='all'?'ring-brand-400':'ring-slate-100')} onClick={() => { setProp("invFilter", 'all'); }}><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0643\u0644")}</div><div className="text-lg sm:text-xl font-extrabold text-slate-800 mt-1">{t(invoices.length)}</div></button>
          <button className={clsx("text-right rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 transition-all", invFilter==='due'?'ring-amber-400':'ring-slate-100')} onClick={() => { setProp("invFilter", 'due'); }}><div className="text-[11px] text-slate-400">{t("\u0645\u0633\u062a\u062d\u0642\u0629")}</div><div className="text-lg sm:text-xl font-extrabold text-amber-600 mt-1">{t(invoices.filter(i=>i.status==='due').length)}</div><div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 tabular-nums">{t(invoices.filter(i=>i.status==='due').reduce((s,i)=>s+i.amount,0).toLocaleString()+' ر.س')}</div></button>
          <button className={clsx("text-right rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 transition-all", invFilter==='overdue'?'ring-rose-400':'ring-slate-100')} onClick={() => { setProp("invFilter", 'overdue'); }}><div className="text-[11px] text-slate-400">{t("\u0645\u062a\u0623\u062e\u0631\u0629")}</div><div className="text-lg sm:text-xl font-extrabold text-rose-600 mt-1">{t(invoices.filter(i=>i.status==='overdue').length)}</div></button>
          <button className={clsx("text-right rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 transition-all", invFilter==='paid'?'ring-emerald-400':'ring-slate-100')} onClick={() => { setProp("invFilter", 'paid'); }}><div className="text-[11px] text-slate-400">{t("\u0645\u062f\u0641\u0648\u0639\u0629")}</div><div className="text-lg sm:text-xl font-extrabold text-emerald-600 mt-1">{t(invoices.filter(i=>i.status==='paid').length)}</div><div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 tabular-nums">{t(invoicesPaidTotal.toLocaleString()+' ر.س')}</div></button>
        </div>

        <div className="flex items-center gap-2 mb-5 overflow-x-auto no-scrollbar py-1">
          <button className={clsx("chip whitespace-nowrap shrink-0", {'active':invFilter==='all'})} onClick={() => { setProp("invFilter", 'all'); }}>{t("\u0627\u0644\u0643\u0644")}</button>
          <button className={clsx("chip whitespace-nowrap shrink-0", {'active':invFilter==='due'})} onClick={() => { setProp("invFilter", 'due'); }}>{t("\u0645\u0633\u062a\u062d\u0642\u0629 \u0627\u0644\u0622\u0646")}</button>
          <button className={clsx("chip whitespace-nowrap shrink-0", {'active':invFilter==='overdue'})} onClick={() => { setProp("invFilter", 'overdue'); }}>{t("\u0645\u062a\u0623\u062e\u0631\u0629")}</button>
          <button className={clsx("chip whitespace-nowrap shrink-0", {'active':invFilter==='paid'})} onClick={() => { setProp("invFilter", 'paid'); }}>{t("\u0645\u062f\u0641\u0648\u0639\u0629")}</button>
        </div>

        <div className="space-y-3">
          {(filteredInvoices || []).map((inv, index) => (<React.Fragment key={inv.id}>
            <button className="w-full text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('invoice', inv); }}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono font-extrabold text-slate-800" dir="ltr">{t(inv.id)}</span>
                    <span className={clsx("inline-flex text-[11px] font-bold px-2.5 py-0.5 rounded-full", invMap[inv.status].c)}>{t(invMap[inv.status].t)}</span>
                  </div>
                  <div className="text-[13px] text-slate-600 mt-1.5">{t('فترة '+inv.period+' · عقد '+inv.contract)}</div>
                  <div className="text-[12px] text-slate-400 mt-1">{t('الاستحقاق: '+inv.due)}</div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start shrink-0 pt-2.5 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="text-right sm:text-left">
                    <div className="text-lg sm:text-xl font-extrabold tabular-nums text-slate-800">{t(inv.amount.toLocaleString())} <span className="text-[11px] font-normal text-slate-400">{t("\u0631\u064a\u0627\u0644 \u0633\u0639\u0648\u062f\u064a")}</span></div>
                  </div>
                  <div className="text-[12px] font-bold text-brand-600 sm:mt-2">{t("\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u2190")}</div>
                </div>
              </div>
            </button>
          </React.Fragment>))}
          {Boolean(filteredInvoices.length===0) && (<div className="rounded-2xl bg-white ring-1 ring-slate-100 p-10 text-center text-slate-400 text-[14px]">{t("\u0644\u0627 \u062a\u0648\u062c\u062f \u0641\u0648\u0627\u062a\u064a\u0631 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u062a\u0635\u0646\u064a\u0641.")}</div>)}
        </div>
      </section>
  );
}
