import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function DashboardPage() {

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
<section data-crm-entity="account" data-crm-view="client-dashboard">
        
        <div className="relative overflow-hidden rounded-3xl bg-ink text-white p-4 sm:p-7 mb-5 sm:mb-7 shadow-card">
          <div className="absolute inset-0 pointer-events-none" style={parseStyle("background:radial-gradient(circle at 88% 0%, rgba(0,172,233,.45) 0, transparent 42%),radial-gradient(circle at 0% 100%, rgba(0,172,233,.18) 0, transparent 40%)")}></div>
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-5">
            <div>
              <div className="text-[12px] font-medium text-brand-200/90 mb-1.5">{t("مرحباً بعودتك")}</div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">{t(account.name)}</h1>
              <p className="mt-2 text-[12px] sm:text-[13px] text-slate-300 max-w-xl">{t("تابع عقودك وعمالتك وفواتيرك وتذاكر الدعم من مكان واحد — متزامن مع نظام Dynamics 365.")}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 font-mono" dir="ltr">{t('ID · '+account.id)}</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-400/15 text-emerald-200 border border-emerald-400/20 font-bold">{t("حساب نشط")}</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">{t(account.sector + ' · منذ '+account.since)}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <button className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-[13px] font-bold transition-colors text-center" onClick={() => { openDrill('requestLabor'); }}>{t("طلب عمالة")}</button>
              <button className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-[13px] font-bold transition-colors text-center" onClick={() => { openTicketWizard(); }}>{t("طلب دعم")}</button>
              <button className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-[13px] font-bold transition-colors text-center" onClick={() => { openPage('invoices'); }}>{t("الفواتير")}</button>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-7">
          
          <button className="text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openPage('workers'); }}>
            <div className="flex items-center justify-between"><span className="grid place-items-center h-10 sm:h-11 w-10 sm:w-11 rounded-xl bg-brand-50 text-brand-600"><svg className="h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 21a8 8 0 0 0-16 0" /><circle cx="10" cy="8" r="5" /><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" /></svg></span><span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{t(activeWorkers+' نشط')}</span></div>
            <div className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-extrabold text-slate-800 tabular-nums">{t(workers.length)}</div>
            <div className="text-[12px] sm:text-[13px] text-slate-400 mt-1 flex items-center gap-1">{t("إجمالي العمالة المورّدة")} <svg className="h-3.5 w-3.5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6" /></svg></div>
          </button>
          
          <button className="text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openPage('contracts'); }}>
            <div className="flex items-center justify-between"><span className="grid place-items-center h-10 sm:h-11 w-10 sm:w-11 rounded-xl bg-sky-50 text-sky-700"><svg className="h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v5h5" /></svg></span><span className="text-[11px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">{t("نشط")}</span></div>
            <div className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-extrabold text-slate-800 tabular-nums">{t(contracts.length)}</div>
            <div className="text-[12px] sm:text-[13px] text-slate-400 mt-1 flex items-center gap-1">{t("العقود النشطة")} <svg className="h-3.5 w-3.5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6" /></svg></div>
          </button>
          
          <button className="text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openPage('invoices'); }}>
            <div className="flex items-center justify-between"><span className="grid place-items-center h-10 sm:h-11 w-10 sm:w-11 rounded-xl bg-emerald-50 text-emerald-600"><svg className="h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg></span><span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">{t(invoicesDue.length+' مستحقة')}</span></div>
            <div className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-extrabold text-slate-800 tabular-nums"><span>{t(Math.round(invoicesPaidTotal/1000))}</span><span className="text-base font-bold text-slate-400">{t("ك")}</span></div>
            <div className="text-[12px] sm:text-[13px] text-slate-400 mt-1">{t("إجمالي المدفوع (ألف ريال)")}</div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full bg-emerald-500" style={parseStyle("width:82%")}></div></div>
          </button>
          
          <button className="w-full text-right rounded-2xl p-4 sm:p-5 shadow-lift ring-1 ring-black/40 bg-ink text-white relative overflow-hidden hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('contract', contracts[0]); }} type="button">
            <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full pointer-events-none" style={parseStyle("background:radial-gradient(circle,rgba(0,172,233,.4),transparent 70%)")}></div>
            <div className="flex items-start justify-between relative"><span className="grid place-items-center h-10 sm:h-11 w-10 sm:w-11 rounded-xl bg-white/10 text-brand-400"><svg className="h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></span><span className="text-[11px] font-bold text-amber-300 bg-amber-400/15 px-2 py-0.5 rounded-full">{t("قريب الانتهاء")}</span></div>
            <div className="mt-3 sm:mt-4 flex items-end justify-center sm:justify-start gap-1.5 tabular-nums">
              <div className="text-center"><div className="text-xl sm:text-2xl font-extrabold">{t(cd.d)}</div><div className="text-[10px] text-slate-400">{t("يوم")}</div></div><span className="text-lg sm:text-xl font-bold text-slate-600 pb-3 sm:pb-4">:</span>
              <div className="text-center"><div className="text-xl sm:text-2xl font-extrabold">{t(cd.h)}</div><div className="text-[10px] text-slate-400">{t("ساعة")}</div></div><span className="text-lg sm:text-xl font-bold text-slate-600 pb-3 sm:pb-4">:</span>
              <div className="text-center"><div className="text-xl sm:text-2xl font-extrabold">{t(cd.m)}</div><div className="text-[10px] text-slate-400">{t("دقيقة")}</div></div><span className="text-lg sm:text-xl font-bold text-slate-600 pb-3 sm:pb-4">:</span>
              <div className="text-center"><div className="text-xl sm:text-2xl font-extrabold text-brand-400">{t(cd.s)}</div><div className="text-[10px] text-slate-400">{t("ثانية")}</div></div>
            </div>
            <div className="text-[11px] sm:text-[12px] text-slate-400 mt-2">{t("أقرب انتهاء عقد · JE-2024-118 · اضغط للتفاصيل")}</div>
          </button>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-7">
          <button className="group text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('attendance'); }}><span className="grid place-items-center h-11 sm:h-12 w-11 sm:w-12 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-colors mb-3"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg></span><h3 className="font-bold text-[14px] sm:text-[15px] text-slate-800">{t("رفع شيت الحضور")}</h3><p className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("اعتماد حضور العمالة الشهري")}</p></button>
          <button className="group text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-amber-200 hover:-translate-y-0.5 transition-all" onClick={() => { openTicketWizard(); }}><span className="grid place-items-center h-11 sm:h-12 w-11 sm:w-12 rounded-2xl bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors mb-3"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg></span><h3 className="font-bold text-[14px] sm:text-[15px] text-slate-800">{t("طلب دعم")}</h3><p className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("استبدال · بلاغ · حضور · استفسار")}</p></button>
          <button className="group text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('contract', contracts[0]); }}><span className="grid place-items-center h-11 sm:h-12 w-11 sm:w-12 rounded-2xl bg-violet-50 text-violet-600 group-hover:bg-violet-500 group-hover:text-white transition-colors mb-3"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v5h5" /><path d="M9 13h6M9 17h4" /></svg></span><h3 className="font-bold text-[14px] sm:text-[15px] text-slate-800">{t("عرض العقد")}</h3><p className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("تفاصيل وبنود العقد الرقمي")}</p></button>
          <button className="group text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('requestLabor'); }}><span className="grid place-items-center h-11 sm:h-12 w-11 sm:w-12 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors mb-3"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></svg></span><h3 className="font-bold text-[14px] sm:text-[15px] text-slate-800">{t("طلب عمالة إضافية")}</h3><p className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("توسعة الفريق أو مهنة جديدة")}</p></button>
        </div>


        
        {Boolean(clientQuotes.length) && (<div className="mb-7 rounded-2xl bg-white shadow-card ring-1 ring-brand-100 overflow-hidden">
          <div className="px-5 py-3.5 bg-brand-50/60 border-b border-brand-100 flex items-center justify-between">
            <h2 className="font-extrabold text-slate-800">{t("\u0639\u0631\u0648\u0636 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0648\u0627\u0631\u062f\u0629")}</h2>
            <span className="text-[11px] font-bold text-brand-700 bg-white px-2 py-0.5 rounded-full">{t(clientQuotes.filter(q=>q.status==='sent').length+' بانتظار قرارك')}</span>
          </div>
          <div className="divide-y divide-slate-50">
            {(clientQuotes || []).map((q, index) => (<React.Fragment key={q.id}>
              <div className="p-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-slate-800">{t(q.no)}</div>
                    <div className="text-[12px] text-slate-400 mt-1">{t('صالح حتى '+q.valid+' · حالة: '+(q.status==='sent'?'بانتظارك':q.status==='accepted'?'مقبول':'مرفوض'))}</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    {Boolean(q.status==='sent') && (<div className="text-left">
                      <button className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-[12px] font-bold" onClick={() => { acceptQuote(q); }}>{t("\u0642\u0628\u0648\u0644 \u0627\u0644\u0639\u0631\u0636")}</button>
                      <button className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-600 text-[12px] font-bold mr-1" onClick={() => { rejectQuote(q); }}>{t("\u0631\u0641\u0636")}</button>
                    </div>)}
                    {Boolean(q.status!=='sent') && (<span className={clsx("text-[11px] font-bold px-2.5 py-1 rounded-full", q.status==='accepted'?'text-emerald-700 bg-emerald-50':'text-rose-700 bg-rose-50')}>{t(q.status==='accepted'?'تم القبول':'مرفوض')}</span>)}
                  </div>
                </div>
                {Boolean(q.lines && q.lines.length) && (<React.Fragment>
                  <div className="overflow-x-auto rounded-xl ring-1 ring-slate-100">
                    <table className="w-full text-right text-[11px] min-w-[900px]">
                      <thead><tr className="bg-slate-50 text-slate-500">
                        <th className="font-bold px-2 py-2">{t("\u062c\u0646\u0633\u064a\u0629")}</th>
                        <th className="font-bold px-2 py-2">{t("\u0645\u0647\u0646\u0629")}</th>
                        <th className="font-bold px-2 py-2">{t("\u0639\u062f\u062f")}</th>
                        <th className="font-bold px-2 py-2">{t("\u0645\u062f\u0629 \u0639\u0642\u062f")}</th>
                        <th className="font-bold px-2 py-2">{t("\u0631\u0627\u062a\u0628")}</th>
                        <th className="font-bold px-2 py-2">{t("\u0628\u062f\u0644 \u0633\u0643\u0646")}</th>
                        <th className="font-bold px-2 py-2">{t("\u0628\u062f\u0644 \u0637\u0639\u0627\u0645")}</th>
                        <th className="font-bold px-2 py-2">{t("\u0628\u062f\u0644 \u0645\u0648\u0627\u0635\u0644\u0627\u062a")}</th>
                        <th className="font-bold px-2 py-2">{t("\u0647\u0627\u0645\u0634")}</th>
                        <th className="font-bold px-2 py-2">{t("\u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u064a\u0644")}</th>
                        <th className="font-bold px-2 py-2">{t("\u0645\u0628\u0644\u063a \u0627\u0644\u0639\u0627\u0645\u0644")}</th>
                        <th className="font-bold px-2 py-2 text-left">{t("\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a")}</th>
                      </tr></thead>
                      <tbody className="divide-y divide-slate-50">
                        {(q.lines || []).map((row,ri, index) => (<React.Fragment key={ri}>
                          <tr>
                            <td className="px-2 py-2">{t(row.nat)}</td>
                            <td className="px-2 py-2">{t(row.job)}</td>
                            <td className="px-2 py-2 tabular-nums">{t(row.qty)}</td>
                            <td className="px-2 py-2">{t(row.duration)}</td>
                            <td className="px-2 py-2 tabular-nums">{t((Number(row.salary)||0).toLocaleString())}</td>
                            <td className={clsx("px-2 py-2 tabular-nums", row.clientHousing?'line-through text-slate-400':'')}>{t((Number(row.housing)||0).toLocaleString())}</td>
                            <td className={clsx("px-2 py-2 tabular-nums", row.clientFood?'line-through text-slate-400':'')}>{t((Number(row.food)||0).toLocaleString())}</td>
                            <td className={clsx("px-2 py-2 tabular-nums", row.clientTransport?'line-through text-slate-400':'')}>{t((Number(row.transport)||0).toLocaleString())}</td>
                            <td className="px-2 py-2 tabular-nums font-bold text-brand-700">1,000</td>
                            <td className="px-2 py-2 text-[10px] font-bold text-amber-700">{t(quoteClientAllowLabel(row))}</td>
                            <td className="px-2 py-2 tabular-nums font-bold">{t(quoteUnitPrice(row).toLocaleString()+' ر.س')}</td>
                            <td className="px-2 py-2 text-left font-bold tabular-nums">{t(quoteLineTotal(row).toLocaleString()+' ر.س')}</td>
                          </tr>
                        </React.Fragment>))}
                      </tbody>
                      <tfoot><tr className="bg-brand-50/40">
                        <td className="px-2 py-2 font-extrabold" colSpan="11">{t("\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0643\u0644\u064a")}</td>
                        <td className="px-2 py-2 text-left font-extrabold text-brand-700 tabular-nums">{t((Number(q.amount)||0).toLocaleString()+' ر.س')}</td>
                      </tr></tfoot>
                    </table>
                  </div>
                </React.Fragment>)}
              </div>
            </React.Fragment>))}
          </div>
        </div>)}

        <div className="grid lg:grid-cols-3 gap-7">
          <div className="lg:col-span-2 space-y-7">
            
            <section>
              <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-extrabold text-slate-800">{t("\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0645\u0627\u0644\u0629 \u0648\u0645\u0648\u0627\u0642\u0639\u0647\u0645")}</h2><button className="text-[13px] font-bold text-brand-600 hover:text-brand-800" onClick={() => { openPage('workers'); }}>{t("\u0639\u0631\u0636 \u0627\u0644\u0643\u0644")}</button></div>
              <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 overflow-hidden"><div className="overflow-x-auto"><table className="w-full text-right text-[13px]">
                <thead><tr className="text-slate-400 border-b border-slate-100 bg-slate-50/50"><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0639\u0627\u0645\u0644")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0645\u0648\u0642\u0639")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u062d\u0627\u0644\u0629")}</th><th className="font-medium px-5 py-3.5 text-left">{t("\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644")}</th></tr></thead>
                <tbody className="divide-y divide-slate-50">
                  {(workers.slice(0,5) || []).map((w, index) => (<React.Fragment key={w.id}><tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-5 py-4"><b className="text-slate-700">{t(w.name)}</b><div className="text-[11px] text-slate-400">{t(w.job + ' · ' + w.nat)}</div></td>
                    <td className="px-5 py-4 text-slate-600">{t(w.location)}</td>
                    <td className="px-5 py-4"><span className={clsx("inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full", statusMap[w.status].c)}><span className="h-1.5 w-1.5 rounded-full bg-current opacity-70"></span><span>{t(statusMap[w.status].t)}</span></span></td>
                    <td className="px-5 py-4 text-left"><button className="text-brand-600 hover:text-brand-800 font-bold hover:bg-brand-50 px-2.5 py-1.5 rounded-lg transition-colors" onClick={() => { openDrill('worker', w); }}>{t("\u0639\u0631\u0636")}</button></td>
                  </tr></React.Fragment>))}
                </tbody></table></div></div>
            </section>
            
            <section>
              <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-extrabold text-slate-800">{t("\u0627\u0644\u0639\u0642\u0648\u062f \u0627\u0644\u0646\u0634\u0637\u0629")}</h2><button className="text-[13px] font-bold text-brand-600 hover:text-brand-800" onClick={() => { openPage('contracts'); }}>{t("\u0643\u0644 \u0627\u0644\u0639\u0642\u0648\u062f")}</button></div>
              <div className="grid md:grid-cols-2 gap-4">
                {(contracts || []).map((c, index) => (<React.Fragment key={c.id}><button className="text-right rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('contract', c); }}>
                  <div className="flex items-start justify-between gap-3"><div><div className="flex items-center gap-2"><h3 className="font-extrabold text-slate-800">{t(c.title)}</h3><span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{t("\u0633\u0627\u0631\u064a")}</span></div><p className="text-[12px] text-slate-400 mt-1 font-mono" dir="ltr"><span>{t(c.id)}</span> · <span>{t(c.count)}</span> {t("\u0639\u0627\u0645\u0644")}</p></div><div className="text-left"><div className="text-[12px] text-slate-400">{t("\u0627\u0644\u0625\u0634\u063a\u0627\u0644")}</div><div className="font-extrabold text-brand-600 text-lg">{t(c.occ+'%')}</div></div></div>
                  <div className="mt-5"><div className="flex items-center justify-between text-[12px] mb-2"><span className="text-slate-400">{t("\u0627\u0644\u0645\u062f\u0629 \u0627\u0644\u0645\u0646\u0642\u0636\u064a\u0629")}</span><span className="font-bold text-slate-600">{t(c.elapsed+'% · متبقٍ '+c.remain)}</span></div><div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full bg-gradient-to-l from-brand-600 to-brand-400" style={parseStyle('width:'+c.elapsed+'%')}></div></div></div>
                </button></React.Fragment>))}
              </div>
            </section>
          </div>
          <aside className="space-y-7">
            
            <section><h2 className="text-lg font-extrabold text-slate-800 mb-4">{t("\u0645\u062f\u064a\u0631 \u062d\u0633\u0627\u0628\u0643")}</h2>
              <div className="rounded-2xl overflow-hidden shadow-card ring-1 ring-slate-100 bg-white">
                <div className="relative h-24 bg-ink"><div className="absolute inset-0" style={parseStyle("background:radial-gradient(circle at 82% 30%, rgba(0,172,233,.6) 0, transparent 55%)")}></div></div>
                <div className="px-5 pb-5 -mt-12 relative">
                  <div className="grid place-items-center h-20 w-20 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-white text-2xl font-extrabold ring-4 ring-white shadow-lift">{t("\u0623.\u0639")}</div>
                  <h3 className="mt-3 font-extrabold text-slate-800 text-lg">{t(account.amName)}</h3><p className="text-[13px] text-slate-400">{t("\u0645\u062f\u064a\u0631 \u062d\u0633\u0627\u0628\u0627\u062a \u0642\u0637\u0627\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0644")}</p>
                  <div className="mt-4 space-y-2.5 text-[13px]">
                    <a className="flex items-center gap-3 text-slate-600 hover:text-brand-600 transition-colors" href={'tel:'+account.amPhone}><span className="grid place-items-center h-8 w-8 rounded-lg bg-slate-50 text-brand-600"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" /></svg></span><span className="font-mono font-bold" dir="ltr">{t(account.amPhone)}</span></a>
                    <a className="flex items-center gap-3 text-slate-600 hover:text-brand-600 transition-colors" href={'mailto:'+account.amEmail}><span className="grid place-items-center h-8 w-8 rounded-lg bg-slate-50 text-brand-600"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg></span><span className="text-[12px] font-medium" dir="ltr">{t(account.amEmail)}</span></a>
                  </div>
                  <a className="mt-5 flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1eb955] text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5" href={'https://wa.me/'+account.amPhone.replace('+','')} target="_blank" rel="noopener"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.885 3.488" /></svg>{t("\u062a\u0648\u0627\u0635\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628")}</a>
                </div>
              </div>
            </section>
            
            <section><div className="flex items-center justify-between mb-4"><h2 className="text-lg font-extrabold text-slate-800">{t("\u062a\u0630\u0627\u0643\u0631 \u0627\u0644\u062f\u0639\u0645")}</h2><button className="text-[11px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full" onClick={() => { openPage('tickets'); }}>{t(openTickets + ' نشطة')}</button></div>
              <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 divide-y divide-slate-50">
                {(tickets || []).map((item, index) => (<React.Fragment key={item.id}><button className="w-full text-right p-4 hover:bg-slate-50/50 transition-colors block" onClick={() => { openDrill('ticket', item); }}>
                  <div className="flex items-start justify-between gap-2"><div><div className="font-bold text-[13px] text-slate-800">{t(item.title)}</div><div className="text-[11px] text-slate-400 font-mono" dir="ltr">{t(item.id + ' · ' + item.contract)}</div></div><span className={clsx("text-[11px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap", ticketMap[item.status].c)}>{t(ticketMap[item.status].item)}</span></div>
                  <div className="mt-3"><div className="flex items-center justify-between text-[11px] text-slate-400 mb-1"><span>{t('الخطوة '+item.step+' من 4')}</span><span>{t(item.pct+'%')}</span></div><div className="h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className={clsx("h-full rounded-full", ticketMap[item.status].bar)} style={parseStyle('width:'+item.pct+'%')}></div></div></div>
                </button></React.Fragment>))}
              </div>
            </section>
          </aside>
        </div>
      </section>
  );
}
