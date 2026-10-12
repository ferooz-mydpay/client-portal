import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function SalesSpecPage() {

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
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800">{t("\u0644\u0648\u062d\u0629 \u0623\u062e\u0635\u0627\u0626\u064a \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a")}</h1>
          <p className="text-[13px] sm:text-[14px] text-slate-400 mt-1">{t("\u0632\u064a\u0627\u0631\u0627\u062a \u0645\u064a\u062f\u0627\u0646\u064a\u0629 \u00b7 \u0645\u0633\u0648\u062f\u0627\u062a \u0639\u0631\u0648\u0636 \u00b7 \u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0633\u0627\u0631 \u2014 \u0628\u062f\u0648\u0646 \u0627\u0639\u062a\u0645\u0627\u062f \u062a\u0633\u0639\u064a\u0631 \u0623\u0648 \u062a\u0633\u0644\u064a\u0645 \u0646\u0647\u0627\u0626\u064a.")}</p>
        </div>
        <div className="rounded-2xl bg-sky-50 ring-1 ring-sky-100 p-4 mb-5 text-[13px] text-sky-900"> {t("\u0635\u0644\u0627\u062d\u064a\u0627\u062a\u0643 \u0643\u0623\u062e\u0635\u0627\u0626\u064a: \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a \u0648\u0631\u0641\u0639 \u0645\u0633\u0648\u062f\u0651\u0629 \u0627\u0644\u0639\u0631\u0636 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0639\u0645\u064a\u0644. \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0639\u0646\u062f")} <b>{t("\u0645\u0634\u0631\u0641 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a")}</b> {t("(\u226410\u066a) \u0623\u0648")} <b>{t("\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a")}</b> {t("(>10\u066a). \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0644\u0644\u0645\u062f\u064a\u0631 \u0641\u0642\u0637.")} </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2 rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100">
            <h2 className="font-extrabold text-slate-800 mb-3">{t("\u0632\u064a\u0627\u0631\u0629 \u062c\u062f\u064a\u062f\u0629")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div><label className="field-label">{t("\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064a\u0644 / \u0627\u0644\u0645\u0646\u0634\u0623\u0629")}</label><input className="field" value={visitForm.client ?? ""} onChange={(e) => setProp("visitForm.client", e.target.value)} placeholder={t("\u0634\u0631\u0643\u0629 ...")} /></div>
              <div><label className="field-label">{t("\u062c\u0647\u0629 \u0627\u0644\u0627\u062a\u0635\u0627\u0644")}</label><input className="field" value={visitForm.contact ?? ""} onChange={(e) => setProp("visitForm.contact", e.target.value)} placeholder={t("\u0627\u0644\u0627\u0633\u0645")} /></div>
              <div><label className="field-label">{t("\u0627\u0644\u062c\u0648\u0627\u0644")}</label><input className="field" value={visitForm.phone ?? ""} onChange={(e) => setProp("visitForm.phone", e.target.value)} placeholder="+9665..." dir="ltr" /></div>
              <div><label className="field-label">{t("\u0639\u0646\u0648\u0627\u0646 / \u0648\u0635\u0641 \u0627\u0644\u0645\u0648\u0642\u0639")}</label><input className="field" value={visitForm.address ?? ""} onChange={(e) => setProp("visitForm.address", e.target.value)} placeholder={t("\u0627\u0644\u062d\u064a \u00b7 \u0627\u0644\u0645\u062f\u064a\u0646\u0629")} /></div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button className="w-full sm:w-auto px-3 py-2 rounded-xl bg-ink text-white text-[12px] font-bold text-center" onClick={() => { captureVisitGeo(); }} type="button">{t("\ud83d\udccd \u0631\u0628\u0637 \u0645\u0648\u0642\u0639\u064a \u0627\u0644\u062d\u0627\u0644\u064a (Google Maps)")}</button>
              {Boolean(visitForm.mapsUrl) && (<a className="text-[12px] font-bold text-brand-700 underline" href={visitForm.mapsUrl} target="_blank" rel="noopener">{t(visitForm.lat?('خريطة: '+visitForm.lat.toFixed(4)+','+visitForm.lng.toFixed(4)):'فتح الخريطة')}</a>)}
            </div>
            <textarea className="field mt-3" value={visitForm.note ?? ""} onChange={(e) => setProp("visitForm.note", e.target.value)} rows="2" placeholder={t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0632\u064a\u0627\u0631\u0629")}></textarea>
            <button className="mt-3 w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm" onClick={() => { submitFieldVisit(); }} type="button">{t("\u062d\u0641\u0638 \u0627\u0644\u0632\u064a\u0627\u0631\u0629 \u0648\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0639\u0645\u064a\u0644 \u0644\u0645\u0631\u062d\u0644\u0629 \u00ab\u062a\u0645\u062a \u0627\u0644\u0632\u064a\u0627\u0631\u0629\u00bb")}</button>
          </div>
          <div className="space-y-4">
            <button className="w-full text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 transition-all" onClick={() => { openDrill('visitsMonth'); }} type="button">
              <div className="text-[12px] font-bold text-slate-400">{t("\u0632\u064a\u0627\u0631\u0627\u062a \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631")}</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-1">{t(visitsThisMonth.length)}</div>
              <div className="text-[12px] text-brand-600 font-bold mt-2">{t("\u0639\u0631\u0636 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a \u2190")}</div>
            </button>
            <div className="rounded-2xl bg-ink text-white p-4 sm:p-5 shadow-card">
              <div className="text-[12px] text-white/60 font-bold">{t("\u062a\u0642\u064a\u064a\u0645 \u0646\u0634\u0627\u0637 \u0627\u0644\u0623\u062e\u0635\u0627\u0626\u064a")}</div>
              <div className="text-2xl sm:text-3xl font-extrabold mt-1">{t(salesActivityScore+'٪')}</div>
              <div className="mt-3 space-y-1 text-[11px] text-white/70">
                <div>{t("\u0632\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0634\u0647\u0631:")} <b className="text-white">{t(visitsThisMonth.length)}</b></div>
                <div>{t("\u0639\u0631\u0648\u0636 \u0645\u0642\u062f\u0651\u0645\u0629:")} <b className="text-white">{t(offersSubmittedCount)}</b></div>
                <div>{t("\u0639\u0642\u0648\u062f \u0645\u0648\u0642\u0651\u0639\u0629:")} <b className="text-white">{t(contractsSignedCount)}</b></div>
                <div>{t("\u0639\u0645\u0627\u0644\u0629 \u0645\u064f\u0633\u0644\u0651\u0645\u0629/\u0645\u0641\u0639\u0651\u0644\u0629:")} <b className="text-white">{t(clientsFullyActivated)}</b></div>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden"><div className="h-full bg-brand-400 rounded-full" style={parseStyle('width:'+salesActivityScore+'%')}></div></div>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
          
          <button className="text-right rounded-2xl bg-white p-3.5 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('salesInbox'); }}>
            <div className="flex items-center justify-between">
              <span className="grid place-items-center h-9 sm:h-11 w-9 sm:w-11 rounded-xl bg-amber-50 text-amber-600"><svg className="h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg></span>
              {Boolean(salesInbox.filter(l=>!l.notified).length) && (<span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full"><span className="block h-1.5 w-1.5 rounded-full bg-rose-500"></span><span>{t('جديد '+salesInbox.filter(l=>!l.notified).length)}</span></span>)}
            </div>
            <div className="text-xl sm:text-3xl font-extrabold text-slate-800 mt-3 sm:mt-4">{t(salesInbox.length)}</div>
            <div className="text-[11px] sm:text-[13px] text-slate-400 mt-0.5">{t("\u0625\u0634\u0639\u0627\u0631\u0627\u062a \u062a\u0646\u062a\u0638\u0631 \u0625\u062c\u0631\u0627\u0621")}</div>
          </button>

          
          <button className="text-right rounded-2xl bg-white p-3.5 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('salesOpen'); }}>
            <div className="flex items-center justify-between">
              <span className="grid place-items-center h-9 sm:h-11 w-9 sm:w-11 rounded-xl bg-brand-50 text-brand-600"><svg className="h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h5" /></svg></span>
            </div>
            <div className="text-xl sm:text-3xl font-extrabold text-slate-800 mt-3 sm:mt-4">{t(salesOpen.length)}</div>
            <div className="text-[11px] sm:text-[13px] text-slate-400 mt-0.5">{t("\u0635\u0641\u0642\u0627\u062a \u0645\u0641\u062a\u0648\u062d\u0629")}</div>
            <div className="text-[10px] sm:text-[11px] text-brand-600 font-bold mt-1 tabular-nums">{t(salesPipeline.toLocaleString()+' ريال')}</div>
          </button>

          
          <button className="text-right rounded-2xl bg-white p-3.5 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('renewals'); }}>
            <div className="flex items-center justify-between">
              <span className="grid place-items-center h-9 sm:h-11 w-9 sm:w-11 rounded-xl bg-violet-50 text-violet-600"><svg className="h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg></span>
              {Boolean(renewalsUrgent.length) && (<span className="text-[10px] sm:text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">{t('عاجل '+renewalsUrgent.length)}</span>)}
            </div>
            <div className="text-xl sm:text-3xl font-extrabold text-slate-800 mt-3 sm:mt-4">{t(salesRenewals.length)}</div>
            <div className="text-[11px] sm:text-[13px] text-slate-400 mt-0.5">{t("\u0639\u0642\u0648\u062f \u0645\u0633\u062a\u062d\u0642\u0629 \u0627\u0644\u062a\u062c\u062f\u064a\u062f")}</div>
          </button>

          
          <button className="text-right rounded-2xl bg-ink p-3.5 sm:p-5 shadow-card ring-1 ring-white/10 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('salesWon'); }}>
            <div className="flex items-center justify-between">
              <span className="grid place-items-center h-9 sm:h-11 w-9 sm:w-11 rounded-xl bg-white/10 text-brand-300"><svg className="h-5 sm:h-6 w-5 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span>
              <span className="text-[10px] sm:text-[11px] font-bold text-brand-300">{t(salesPct+'٪')}</span>
            </div>
            <div className="text-lg sm:text-2xl font-extrabold text-white mt-3 sm:mt-4 tabular-nums">{t(salesAchieved.toLocaleString())}</div>
            <div className="text-[11px] sm:text-[13px] text-white/50 mt-0.5">{t("\u0645\u062d\u0642\u0651\u0642 \u0645\u0646")} <span>{t(salesTarget.toLocaleString())}</span> {t("\u0631\u064a\u0627\u0644")}</div>
            <div className="mt-2.5 sm:mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden"><div className="h-full bg-brand-400 rounded-full transition-all" style={parseStyle('width:'+salesPct+'%')}></div></div>
          </button>
        </div>

        
        <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 p-4 sm:p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h2 className="font-extrabold text-slate-800">{t("\u0635\u0646\u062f\u0648\u0642 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a")}</h2>
            <span className="text-[11px] sm:text-[12px] text-slate-400">{t("\u064a\u0635\u0644\u0643 \u0625\u0634\u0639\u0627\u0631 \u0639\u0646\u062f \u062a\u0633\u062c\u064a\u0644 \u0639\u0645\u064a\u0644 \u062c\u062f\u064a\u062f\u060c \u0648\u0639\u0646\u062f \u0627\u0643\u062a\u0645\u0627\u0644 \u0645\u0644\u0641\u0647 \u0628\u0639\u062f \u062a\u0639\u0645\u064a\u062f \u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646")}</span>
          </div>
          <div className="space-y-3">
            {(salesInbox || []).map((l, index) => (<React.Fragment key={l.id}>
              <div className={clsx("flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl ring-1 transition-colors", l.credit==='approved'?'bg-emerald-50/40 ring-emerald-100':'bg-slate-50 ring-slate-100')}>
                <span className={clsx("grid place-items-center h-9 w-9 rounded-xl shrink-0", l.credit==='approved'?'bg-emerald-100 text-emerald-700':'bg-slate-200 text-slate-500')}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{Boolean(l.credit==='approved') && (<path d="M20 6 9 17l-5-5" />)}{Boolean(l.credit!=='approved') && (<circle cx="12" cy="12" r="9" />)}{Boolean(l.credit!=='approved') && (<path d="M12 7v5l3 2" />)}</svg>
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <b className="text-[14px] text-slate-800">{t(l.client)}</b>
                    {Boolean(!l.notified) && (<span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">{t("\u062c\u062f\u064a\u062f")}</span>)}
                    <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", creditMap[l.credit].c)}>{t(creditMap[l.credit].t)}</span>
                  </div>
                  <p className="text-[12px] text-slate-500 mt-1">
                    {Boolean(l.credit==='approved') && (<span>{t("\u0627\u0643\u062a\u0645\u0644 \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064a\u0644 \u0628\u0639\u062f \u062a\u0639\u0645\u064a\u062f \u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646 \u2014 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0622\u0646 \u0631\u0641\u0639 \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631 \u0648\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a.")}</span>)}
                    {Boolean(l.credit!=='approved') && (<span>{t("\u0633\u064f\u062c\u0651\u0644 \u0627\u0644\u0639\u0645\u064a\u0644 \u062d\u062f\u064a\u062b\u0627\u064b \u2014 \u0627\u0644\u0645\u0644\u0641 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u062a\u0639\u0645\u064a\u062f \u0645\u0648\u0638\u0641 \u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646 \u0642\u0628\u0644 \u0627\u0644\u062a\u0633\u0639\u064a\u0631.")}</span>)}
                  </p>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono" dir="ltr">{t(l.ref+' · CR '+l.cr)}</div>
                </div>
                <div className="flex flex-row sm:flex-col gap-1.5 shrink-0 w-full sm:w-auto mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/50">
                  
                  <button className="flex-1 sm:flex-none text-center text-[12px] font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-lg transition-colors" onClick={() => { readLead(l); }}>{t("\u0639\u0631\u0636 \u0627\u0644\u0645\u0644\u0641")}</button>
                  
                  <button className={clsx("flex-1 sm:flex-none text-center text-[12px] font-bold px-3 py-1.5 rounded-lg transition-colors", l.credit==='approved'?'text-white bg-brand-500 hover:bg-brand-600':'text-slate-400 bg-slate-100 cursor-not-allowed')} onClick={() => { openDrill('quote', l); }} disabled={l.credit!=='approved'}>{t("\u0639\u0631\u0636 \u0633\u0639\u0631")}</button>
                </div>
              </div>
            </React.Fragment>))}
            {Boolean(salesInbox.length===0) && (<div className="text-center text-[13px] text-slate-400 py-8">{t("\u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u0634\u0639\u0627\u0631\u0627\u062a \u062a\u0646\u062a\u0638\u0631 \u0625\u062c\u0631\u0627\u0621")}</div>)}
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h2 className="text-lg font-extrabold text-slate-800">{t("\u0635\u0641\u0642\u0627\u062a\u064a")}</h2>
          <div className="flex gap-2">
            <button className="text-[12px] font-bold text-slate-600 bg-white ring-1 ring-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors" onClick={() => { openDrill('priceList'); }}>{t("\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631")}</button>
            <button className="text-[12px] font-bold text-slate-600 bg-white ring-1 ring-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors" onClick={() => { openDrill('visits'); }}>{t("\u0633\u062c\u0644 \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a")}</button>
          </div>
        </div>
        <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 overflow-hidden mb-6"><div className="overflow-x-auto"><table className="w-full min-w-[650px] text-right text-[13px]">
          <thead><tr className="text-slate-400 border-b border-slate-100 bg-slate-50/50">
            <th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0639\u0645\u064a\u0644")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0627\u062d\u062a\u064a\u0627\u062c")}</th>
            <th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0642\u064a\u0645\u0629")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0645\u0631\u062d\u0644\u0629")}</th>
            <th className="font-medium px-5 py-3.5 text-left">{t("\u0627\u0644\u0625\u062c\u0631\u0627\u0621")}</th></tr></thead>
          <tbody className="divide-y divide-slate-50">
            {(salesLeads || []).map((l, index) => (<React.Fragment key={l.id}><tr className="hover:bg-slate-50/60 transition-colors">
              <td className="px-5 py-3.5">
                <button className="text-right hover:text-brand-600 transition-colors" onClick={() => { openDrill('lead', l); }}>
                  <b className="text-slate-800">{t(l.client)}</b>
                  <div className="text-[11px] text-slate-400 font-mono" dir="ltr">{t(l.ref)}</div>
                </button>
              </td>
              <td className="px-5 py-3.5 text-slate-500">{t(l.need)}</td>
              <td className="px-5 py-3.5 tabular-nums text-slate-700">{t(l.value?l.value.toLocaleString():'—')}</td>
              <td className="px-5 py-3.5"><span className={clsx("text-[11px] font-bold px-2.5 py-1 rounded-full", leadMap[l.stage].c)}>{t(leadMap[l.stage].t)}</span></td>
              <td className="px-5 py-3.5">
                <div className="flex items-center justify-end gap-1.5 flex-wrap">
                  
                  {Boolean(l.stage==='ready') && (<button className="text-[12px] font-bold text-white bg-brand-500 hover:bg-brand-600 px-3 py-1.5 rounded-lg transition-colors" onClick={() => { openDrill('quote', l); }}>{t("\u0631\u0641\u0639 \u0639\u0631\u0636 \u0633\u0639\u0631")}</button>)}
                  
                  {Boolean(l.stage==='quoted') && (<button className="text-[12px] font-bold text-violet-700 bg-violet-50 hover:bg-violet-100 px-3 py-1.5 rounded-lg transition-colors" onClick={() => { toNegotiation(l); }}>{t("\u0628\u062f\u0621 \u0627\u0644\u062a\u0641\u0627\u0648\u0636")}</button>)}
                  
                  {Boolean(l.stage==='nego') && (<button className="text-[12px] font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg transition-colors" onClick={() => { openDrill('signed', l); }}>{t("\u0631\u0641\u0639 \u0627\u0644\u0639\u0642\u062f \u0627\u0644\u0645\u0648\u0642\u0651\u0639")}</button>)}
                  
                  {Boolean(l.stage==='signed') && (<button className="text-[12px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors" onClick={() => { openDrill('annex', l); }}>{t("\u0645\u0644\u062d\u0642 \u0639\u0642\u062f")}</button>)}
                  {Boolean(l.stage==='signed') && (<span className="text-[11px] text-slate-400">{t("\u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0645\u0646 \u0644\u0648\u062d\u0629 \u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a")}</span>)}
                  
                  {Boolean(l.stage==='handed') && (<span className="text-[12px] font-bold text-emerald-700">{t("\u2713 \u0645\u0643\u062a\u0645\u0644")}</span>)}
                  
                  {Boolean(l.stage==='neu') && (<span className="text-[12px] text-slate-400">{t("\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646")}</span>)}
                  {Boolean(l.stage==='visited') && (<button className="text-[12px] font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg" onClick={() => { openDrill('lead', l); }}>{t("\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0633\u0627\u0631")}</button>)}
                  {Boolean(l.stage==='finance'||l.stage==='am'||l.stage==='housing') && (<button className="text-[12px] font-bold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg" onClick={() => { openDrill('lead', l); }}>{t("\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u062f\u064a\u062f\u0644\u0627\u064a\u0646")}</button>)}
                </div>
              </td>
            </tr></React.Fragment>))}
          </tbody>
        </table></div></div>

        
        <h2 className="text-lg font-extrabold text-slate-800 mb-4">{t("\u0639\u0642\u0648\u062f \u0645\u0633\u062a\u062d\u0642\u0629 \u0627\u0644\u062a\u062c\u062f\u064a\u062f")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(salesRenewals || []).map((r, index) => (<React.Fragment key={r.id}>
            <button className="text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('renewal', r); }} type="button">
              <div className="flex items-start justify-between gap-2">
                <div><b className="text-[14px] text-slate-800">{t(r.client)}</b>
                  <div className="text-[11px] text-slate-400 font-mono" dir="ltr">{t(r.no)}</div></div>
                <div className="flex flex-col items-end gap-1">
                  <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", r.daysLeft<=30?'text-rose-700 bg-rose-50':'text-amber-700 bg-amber-50')}>{t('باقٍ '+r.daysLeft+' يوم')}</span>
                  <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", renewMap[r.status||'pending'].c)}>{t(renewMap[r.status||'pending'].t)}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4 text-[12px]">
                <div><div className="text-slate-400">{t("\u064a\u0646\u062a\u0647\u064a \u0641\u064a")}</div><div className="font-bold text-slate-700">{t(r.ends)}</div></div>
                <div><div className="text-slate-400">{t("\u0627\u0644\u0639\u0645\u0627\u0644\u0629")}</div><div className="font-bold text-slate-700">{t(r.workers+' عامل')}</div></div>
              </div>
              <div className="mt-3 text-[12px]"><span className="text-slate-400">{t("\u0627\u0644\u0642\u064a\u0645\u0629:")} </span><span className="font-bold text-brand-700 tabular-nums">{t(r.value.toLocaleString()+' ريال')}</span></div>
              <div className="mt-3 text-[11px] font-bold text-brand-600">{t("\u0627\u0636\u063a\u0637 \u0644\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0648\u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u2190")}</div>
            </button>
          </React.Fragment>))}
          {Boolean(salesRenewals.length===0) && (<div className="text-center text-[13px] text-slate-400 py-8 md:col-span-3">{t("\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0642\u0648\u062f \u0645\u0633\u062a\u062d\u0642\u0629 \u0644\u0644\u062a\u062c\u062f\u064a\u062f \u062d\u0627\u0644\u064a\u0627\u064b")}</div>)}
        </div>
      </section>
  );
}
