import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function DrillModal() {

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
<div className="fixed inset-0 z-[55]" style={parseStyle("display:none")}>
  <div className="absolute inset-0 bg-ink/55 backdrop-blur-sm" onClick={() => { closeModal(); }}></div>
  <div className="relative min-h-full flex items-center justify-center p-4">
    {Boolean(modal.open) && (<div className={clsx("w-full bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col", (modal.kind==='complaint'||modal.kind==='requestLabor'||modal.kind==='action'||modal.kind==='creditCase'||modal.kind==='quote'||modal.kind==='lead')?'max-w-4xl':'max-w-2xl')}>
      <div className="flex items-center justify-between gap-3 p-5 border-b border-slate-100"><h3 className="font-extrabold text-slate-800 text-lg">{t(modal.title)}</h3><button className="grid place-items-center h-9 w-9 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600" onClick={() => { closeModal(); }}><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button></div>
      <div className="p-6 overflow-y-auto">

        
        {Boolean(modal.kind==='workers') && (<React.Fragment>
          <div className="overflow-x-auto"><table className="w-full text-right text-[13px]">
            <thead><tr className="text-slate-400 border-b border-slate-100"><th className="font-medium px-3 py-2.5">{t("\u0627\u0644\u0639\u0627\u0645\u0644")}</th><th className="font-medium px-3 py-2.5">{t("\u0627\u0644\u0645\u0647\u0646\u0629")}</th><th className="font-medium px-3 py-2.5">{t("\u0627\u0644\u0645\u0648\u0642\u0639")}</th><th className="font-medium px-3 py-2.5">{t("\u0627\u0644\u062d\u0627\u0644\u0629")}</th></tr></thead>
            <tbody className="divide-y divide-slate-50">{(workers || []).map((w, index) => (<React.Fragment key={w.id}><tr className="hover:bg-slate-50 cursor-pointer" onClick={() => { openDrill('worker', w); }}>
              <td className="px-3 py-3"><b className="text-slate-700">{t(w.name)}</b></td><td className="px-3 py-3 text-slate-500">{t(w.job)}</td><td className="px-3 py-3 text-slate-500">{t(w.location)}</td>
              <td className="px-3 py-3"><span className={clsx("inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full", statusMap[w.status].c)}>{t(statusMap[w.status].t)}</span></td>
            </tr></React.Fragment>))}</tbody></table></div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='worker' && modal.data) && (<React.Fragment>
          <div className="space-y-4">
            <div className="flex items-center gap-4"><div className="grid place-items-center h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-white text-xl font-extrabold">{t(modal.data.name[0])}</div>
              <div><h4 className="font-extrabold text-slate-800 text-lg">{t(modal.data.name)}</h4><p className="text-[13px] text-slate-400">{t(modal.data.job + ' · ' + modal.data.nat)}</p></div>
              <span className={clsx("ml-auto inline-flex items-center gap-1.5 text-[12px] font-bold px-3 py-1 rounded-full", statusMap[modal.data.status].c)}>{t(statusMap[modal.data.status].t)}</span></div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0639\u0642\u062f")}</div><b className="text-slate-700 font-mono" dir="ltr">{t(modal.data.contract)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u062d\u0627\u0644\u064a")}</div><b className="text-slate-700">{t(modal.data.location)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0633\u0643\u0646")}</div><b className="text-slate-700">{t(modal.data.room)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0646\u062a\u0647\u0627\u0621 \u0627\u0644\u0625\u0642\u0627\u0645\u0629")}</div><b className="text-slate-700">{t(modal.data.iqama)}</b></div>
            </div>
            <div className="rounded-xl ring-1 ring-brand-100 bg-brand-50/40 p-4 space-y-3">
              <div className="text-[13px] font-extrabold text-slate-800">{t("\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 / \u0646\u0642\u0644 \u0627\u0644\u0639\u0627\u0645\u0644")}</div>
              <div className="flex flex-wrap gap-2">
                <button className={clsx("chip", transferForm.kind==='site'?'active':'')} onClick={() => { setProp("transferForm.kind", 'site'); }} type="button">{t("\u0645\u0648\u0642\u0639 \u0639\u0645\u0644")}</button>
                <button className={clsx("chip", transferForm.kind==='housing'?'active':'')} onClick={() => { setProp("transferForm.kind", 'housing'); }} type="button">{t("\u0633\u0643\u0646")}</button>
              </div>
              <select className="field" value={transferForm.target ?? ""} onChange={(e) => setProp("transferForm.target", e.target.value)}>
                <option value="">{t("\u2014 \u0627\u062e\u062a\u0631 \u0627\u0644\u0648\u062c\u0647\u0629 \u2014")}</option>
                {((transferForm.kind==='site'?workSites:housingOptions) || []).map((opt, index) => (<React.Fragment key={opt}>
                  <option value={opt}>{t(opt)}</option>
                </React.Fragment>))}
              </select>
              <textarea className="field" value={transferForm.note ?? ""} onChange={(e) => setProp("transferForm.note", e.target.value)} rows="2" placeholder={t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0646\u0642\u0644 (\u0625\u062c\u0628\u0627\u0631\u064a \u0644\u0644\u0625\u062c\u0631\u0627\u0621)")}></textarea>
              <button className="w-full py-2.5 rounded-xl bg-brand-500 text-white font-bold text-sm" onClick={() => { applyWorkerTransfer(modal.data); }} type="button">{t("\u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u0646\u0642\u0644")}</button>
            </div>
            <div className="rounded-xl ring-1 ring-slate-100 p-4 space-y-3">
              <div className="text-[13px] font-extrabold text-slate-800">{t("\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u062d\u0633\u0628 \u0627\u0644\u062d\u0627\u0644\u0629")}</div>
              <textarea className="field" value={actionNote ?? ""} onChange={(e) => setProp("actionNote", e.target.value)} rows="2" placeholder={t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0625\u062c\u0631\u0627\u0621")}></textarea>
              <div className="flex flex-wrap gap-2">
                {Boolean(modal.data?.status==='active') && (<button className="px-3 py-2 rounded-xl bg-violet-50 text-violet-700 text-[12px] font-bold" onClick={() => { workerStatusAction(modal.data,'leave'); }}>{t("\u062a\u0633\u062c\u064a\u0644 \u0625\u062c\u0627\u0632\u0629")}</button>)}
                {Boolean(modal.data?.status==='leave') && (<button className="px-3 py-2 rounded-xl bg-emerald-50 text-emerald-700 text-[12px] font-bold" onClick={() => { workerStatusAction(modal.data,'active'); }}>{t("\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0625\u062c\u0627\u0632\u0629 / \u0625\u0639\u0627\u062f\u0629 \u062a\u0646\u0634\u064a\u0637")}</button>)}
                {Boolean(modal.data?.status==='pending') && (<button className="px-3 py-2 rounded-xl bg-brand-500 text-white text-[12px] font-bold" onClick={() => { workerStatusAction(modal.data,'active'); }}>{t("\u062a\u0641\u0639\u064a\u0644 \u0628\u0639\u062f \u0627\u0644\u062a\u0648\u0632\u064a\u0639")}</button>)}
                {Boolean(modal.data?.status==='expired') && (<button className="px-3 py-2 rounded-xl bg-amber-50 text-amber-800 text-[12px] font-bold" onClick={() => { workerStatusAction(modal.data,'pending'); }}>{t("\u0637\u0644\u0628 \u062a\u062c\u062f\u064a\u062f \u0625\u0642\u0627\u0645\u0629")}</button>)}
                <button className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-[12px] font-bold" onClick={() => { workerStatusAction(modal.data,'ticket'); }}>{t("\u0641\u062a\u062d \u062a\u0630\u0643\u0631\u0629 \u062f\u0639\u0645")}</button>
              </div>
            </div>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='contracts') && (<React.Fragment>
          <div className="space-y-3">{(contracts || []).map((c, index) => (<React.Fragment key={c.id}><button className="w-full text-right rounded-xl bg-slate-50 ring-1 ring-slate-100 hover:ring-brand-300 p-4 transition-all" onClick={() => { openDrill('contract', c); }}>
            <div className="flex items-center justify-between"><div><b className="text-slate-800">{t(c.title)}</b><div className="text-[12px] text-slate-400 font-mono" dir="ltr">{t(c.id + ' · ' + c.count + ' عامل')}</div></div><div className="text-brand-600 font-extrabold">{t(c.occ + '%')}</div></div>
          </button></React.Fragment>))}</div>
        </React.Fragment>)}

        
                {Boolean(modal.kind==='contract' && modal.data) && (<React.Fragment>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0633\u0645 \u0627\u0644\u0639\u0642\u062f")}</div><b className="text-slate-700">{t(modal.data.title)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062f")}</div><b className="text-slate-700 font-mono" dir="ltr">{t(modal.data.id)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0639\u062f\u062f \u0627\u0644\u0639\u0645\u0627\u0644\u0629")}</div><b className="text-slate-700">{t(modal.data.count + ' عامل')}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0646\u0633\u0628\u0629 \u0627\u0644\u0625\u0634\u063a\u0627\u0644")}</div><b className="text-brand-600">{t(modal.data.occ + '%')}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0645\u062f\u0629 \u0627\u0644\u0645\u0646\u0642\u0636\u064a\u0629")}</div><b className="text-slate-700">{t(modal.data.elapsed + '%')}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0645\u062a\u0628\u0642\u064a")}</div><b className="text-slate-700">{t(modal.data.remain)}</b></div>
            </div>
            <div className="rounded-xl ring-1 ring-slate-100 p-4 space-y-3">
              <div className="text-[13px] font-extrabold text-slate-800">{t("\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0627\u0644\u0639\u0642\u062f")}</div>
              <textarea className="field" value={actionNote ?? ""} onChange={(e) => setProp("actionNote", e.target.value)} rows="2" placeholder={t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0625\u062c\u0631\u0627\u0621")}></textarea>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-2 rounded-xl bg-ink text-white text-[12px] font-bold" onClick={() => { clientCardAction('contract','download',modal.data); }}>{t("\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0639\u0642\u062f")}</button>
                <button className="px-3 py-2 rounded-xl bg-brand-500 text-white text-[12px] font-bold" onClick={() => { clientCardAction('contract','renew_request',modal.data); }}>{t("\u0637\u0644\u0628 \u062a\u062c\u062f\u064a\u062f")}</button>
                <button className="px-3 py-2 rounded-xl bg-emerald-50 text-emerald-700 text-[12px] font-bold" onClick={() => { clientCardAction('contract','labor_expand',modal.data); }}>{t("\u0637\u0644\u0628 \u062a\u0648\u0633\u0639\u0629 \u0639\u0645\u0627\u0644\u0629")}</button>
                <button className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-[12px] font-bold" onClick={() => { openDrill('attendance'); }}>{t("\u0631\u0641\u0639 \u062d\u0636\u0648\u0631 \u0644\u0647\u0630\u0627 \u0627\u0644\u0639\u0642\u062f")}</button>
              </div>
            </div>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='finance') && (<React.Fragment>
          <div className="space-y-3">
            <div className="flex justify-between rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3.5"><span className="text-slate-500">{t("\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631")}</span><b className="text-slate-800">{t((invoicesPaidTotal+invoicesOpenTotal).toLocaleString()+' ريال')}</b></div>
            <div className="flex justify-between rounded-xl bg-emerald-50 ring-1 ring-emerald-100 p-3.5"><span className="text-emerald-700">{t("\u0627\u0644\u0645\u062f\u0641\u0648\u0639")}</span><b className="text-emerald-700">{t(invoicesPaidTotal.toLocaleString()+' ريال')}</b></div>
            <div className="flex justify-between rounded-xl bg-amber-50 ring-1 ring-amber-100 p-3.5"><span className="text-amber-700">{t("\u0627\u0644\u0645\u0633\u062a\u062d\u0642 / \u0627\u0644\u0645\u062a\u0623\u062e\u0631")}</span><b className="text-amber-700">{t(invoicesOpenTotal.toLocaleString()+' ريال')}</b></div>
            <button className="w-full mt-2 py-2.5 rounded-xl bg-ink text-white font-bold text-sm" onClick={() => { closeModal(); openPage('invoices'); }}>{t("\u0639\u0631\u0636 \u0643\u0644 \u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631")}</button>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='invoice' && modal.data) && (<React.Fragment>
          <div className="space-y-4">
            <div className="rounded-2xl bg-ink text-white p-5 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={parseStyle("background:radial-gradient(circle at 90% 0%, rgba(0,172,233,.45), transparent 50%)")}></div>
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <div className="text-[12px] text-slate-300 mb-1">{t("\u0627\u0644\u0645\u0628\u0644\u063a")}</div>
                  <div className="text-3xl font-extrabold tabular-nums">{t(modal.data.amount.toLocaleString())}</div>
                  <div className="text-[12px] text-slate-400 mt-0.5">{t("\u0631\u064a\u0627\u0644 \u0633\u0639\u0648\u062f\u064a")}</div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/10">{t(invMap[modal.data.status].t)}</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629")}</div><b className="text-slate-700 font-mono" dir="ltr">{t(modal.data.id)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0639\u0642\u062f")}</div><b className="text-slate-700 font-mono" dir="ltr">{t(modal.data.contract)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0641\u062a\u0631\u0629")}</div><b className="text-slate-700">{t(modal.data.period)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u062d\u0642\u0627\u0642")}</div><b className="text-slate-700">{t(modal.data.due)}</b></div>
            </div>
            <div className="space-y-3">
              <textarea className="field" value={actionNote ?? ""} onChange={(e) => setProp("actionNote", e.target.value)} rows="2" placeholder={t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0633\u062f\u0627\u062f / \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631")}></textarea>
              <div className="flex flex-wrap gap-2">
                <button className="flex-1 min-w-[120px] py-2.5 rounded-xl bg-ink text-white font-bold text-sm" onClick={() => { clientCardAction('invoice','pdf',modal.data); }}>{t("\u062a\u062d\u0645\u064a\u0644 PDF")}</button>
                {Boolean(modal.data?.status!=='paid') && (<button className="flex-1 min-w-[120px] py-2.5 rounded-xl bg-brand-500 text-white font-bold text-sm" onClick={() => { clientCardAction('invoice','pay',modal.data); }}>{t("\u0631\u0641\u0639 \u0625\u064a\u0635\u0627\u0644 \u0633\u062f\u0627\u062f")}</button>)}
                {Boolean(modal.data?.status==='due'||modal.data?.status==='overdue') && (<button className="flex-1 min-w-[120px] py-2.5 rounded-xl bg-amber-50 text-amber-800 font-bold text-sm" onClick={() => { clientCardAction('invoice','dispute',modal.data); }}>{t("\u0627\u0639\u062a\u0631\u0627\u0636 / \u0627\u0633\u062a\u0641\u0633\u0627\u0631")}</button>)}
              </div>
            </div>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='ticket' && modal.data) && (<React.Fragment>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] font-bold text-slate-500 bg-slate-100 inline-flex px-2 py-0.5 rounded-lg mb-2">{t(modal.data.typeLabel || 'دعم')}</div>
                <b className="block text-slate-800 text-lg">{t(modal.data.title)}</b>
              </div>
              <span className={clsx("text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0", ticketMap[modal.data.status].c)}>{t(ticketMap[modal.data.status].t)}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3 text-[13px]"><div className="text-[11px] text-slate-400 mb-0.5">{t("\u0645\u0631\u062c\u0639 \u0627\u0644\u0628\u0648\u0627\u0628\u0629")}</div><b className="font-mono" dir="ltr">{t(modal.data.id)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3 text-[13px]"><div className="text-[11px] text-slate-400 mb-0.5">{t("Case \u0641\u064a CRM")}</div><b className="font-mono" dir="ltr">{t(modal.data.crmCase || '—')}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3 text-[13px]"><div className="text-[11px] text-slate-400 mb-0.5">{t("\u0627\u0644\u0639\u0642\u062f")}</div><b className="font-mono" dir="ltr">{t(modal.data.contract)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3 text-[13px]"><div className="text-[11px] text-slate-400 mb-0.5">{t("\u0627\u0644\u0623\u0648\u0644\u0648\u064a\u0629")}</div><b className="text-slate-700">{t(modal.data.priority||'—')}</b></div>
            </div>
            
            <div className="rounded-xl ring-1 ring-slate-100 p-4">
              <div className="text-[12px] font-bold text-slate-600 mb-3">{t("\u0645\u0633\u0627\u0631 \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629")}</div>
              <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                {(['استلام','مراجعة','معالجة','إغلاق'] || []).map((s,i, index) => (<React.Fragment key={s}>
                  <div>
                    <div className={clsx("h-1.5 rounded-full mb-1.5", (i+1)<=modal.data.step ? ticketMap[modal.data.status].bar : 'bg-slate-100')}></div>
                    <span className={clsx((i+1)<=modal.data.step ? 'text-slate-700 font-bold' : 'text-slate-400')}>{t(s)}</span>
                  </div>
                </React.Fragment>))}
              </div>
            </div>
            <p className="text-[12px] text-slate-400">{t("\u0641\u064f\u062a\u062d\u062a")} <span>{t(modal.data.opened)}</span> {t("\u00b7 \u0627\u0644\u0631\u062f \u0627\u0644\u0623\u0648\u0644 \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629 \u0643\u062d\u062f \u0623\u0642\u0635\u0649.")}</p>
            <div className="rounded-xl ring-1 ring-slate-100 p-4 space-y-3">
              <div className="text-[13px] font-extrabold text-slate-800">{t("\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0627\u0644\u062a\u0630\u0643\u0631\u0629")}</div>
              <textarea className="field" value={actionNote ?? ""} onChange={(e) => setProp("actionNote", e.target.value)} rows="2" placeholder={t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0625\u062c\u0631\u0627\u0621")}></textarea>
              <div className="flex flex-wrap gap-2">
                {Boolean(modal.data?.status!=='resolved') && (<button className="px-3 py-2 rounded-xl bg-brand-500 text-white text-[12px] font-bold" onClick={() => { clientCardAction('ticket','followup',modal.data); }}>{t("\u0645\u062a\u0627\u0628\u0639\u0629 / \u0625\u0636\u0627\u0641\u0629 \u0631\u062f")}</button>)}
                {Boolean(modal.data?.status==='open'||modal.data?.status==='progress') && (<button className="px-3 py-2 rounded-xl bg-amber-50 text-amber-800 text-[12px] font-bold" onClick={() => { clientCardAction('ticket','escalate',modal.data); }}>{t("\u062a\u0635\u0639\u064a\u062f")}</button>)}
                {Boolean(modal.data?.status!=='resolved') && (<button className="px-3 py-2 rounded-xl bg-emerald-50 text-emerald-700 text-[12px] font-bold" onClick={() => { clientCardAction('ticket','close',modal.data); }}>{t("\u0625\u063a\u0644\u0627\u0642 \u0628\u0639\u062f \u0627\u0644\u062d\u0644")}</button>)}
              </div>
            </div>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='client' && modal.data) && (<React.Fragment>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064a\u0644")}</div><b className="text-slate-700">{t(modal.data.name)}</b></div>
            <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0645\u0639\u0631\u0651\u0641")}</div><b className="text-slate-700 font-mono" dir="ltr">{t(modal.data.id)}</b></div>
            <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0639\u0642\u0648\u062f")}</div><b className="text-slate-700">{t(modal.data.contracts)}</b></div>
            <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u062d\u0627\u0644\u0629")}</div><span className={clsx("inline-flex mt-0.5 items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full", clientMap[modal.data.status].c)}>{t(clientMap[modal.data.status].t)}</span></div>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='doc' && modal.data) && (<React.Fragment>
          <div className="space-y-2.5">{(modal.data.rows || []).map((v,k, index) => (<React.Fragment key={k}><div className="flex justify-between border-b border-slate-100 pb-2 text-[14px]"><span className="text-slate-500">{t(k)}</span><b>{t(v)}</b></div></React.Fragment>))}</div>
        </React.Fragment>)}

        
        
        {Boolean(modal.kind==='lead' && modal.data) && (<React.Fragment>
          <div>
            <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <h4 className="font-extrabold text-slate-800 text-lg">{t(modal.data.client)}</h4>
                <div className="text-[12px] text-slate-400 font-mono mt-0.5" dir="ltr">{t(modal.data.ref+' · CR '+modal.data.cr)}</div>
              </div>
              <span className={clsx("text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0", leadMap[modal.data.stage].c)}>{t(leadMap[modal.data.stage].t)}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <div className="rounded-xl bg-slate-50 p-4"><div className="text-[12px] text-slate-400">{t("\u0627\u0644\u0642\u0637\u0627\u0639")}</div><div className="font-bold text-slate-800 text-[13px] mt-1">{t(modal.data.sector)}</div></div>
              <div className="rounded-xl bg-slate-50 p-4"><div className="text-[12px] text-slate-400">{t("\u0627\u0644\u0627\u062d\u062a\u064a\u0627\u062c")}</div><div className="font-bold text-slate-800 text-[13px] mt-1">{t(modal.data.need)}</div></div>
              <div className="rounded-xl bg-slate-50 p-4"><div className="text-[12px] text-slate-400">{t("\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u062a\u0633\u062c\u064a\u0644")}</div><div className="font-bold text-slate-800 text-[13px] mt-1">{t(modal.data.date)}</div></div>
              <div className={clsx("rounded-xl p-4", modal.data.credit==='approved'?'bg-emerald-50':'bg-amber-50')}>
                <div className={clsx("text-[12px]", modal.data.credit==='approved'?'text-emerald-600':'text-amber-600')}>{t("\u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646\u064a\u0629")}</div>
                <div className={clsx("font-bold text-[13px] mt-1", modal.data.credit==='approved'?'text-emerald-800':'text-amber-800')}>{t(creditMap[modal.data.credit].t)}</div>
              </div>
            </div>

            
            {Boolean(modal.data?.quote) && (<div className="mt-4 rounded-xl ring-1 ring-brand-100 bg-brand-50/50 p-4">
              <div className="flex items-center justify-between"><b className="text-[13px] text-brand-800">{t("\u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631")}</b>
                <span className="text-[11px] font-mono text-brand-700" dir="ltr">{t(modal.data.quote?modal.data.quote.no:'')}</span></div>
              {Boolean(modal.data?.quote) && (<div className="text-[12px] text-slate-500 mt-1">{t('صالح حتى '+(modal.data.quote.valid||'—')+(modal.data.quote.discountPct!=null?' · خصم '+modal.data.quote.discountPct+'٪':''))}</div>)}
              {Boolean(modal.data?.quote && modal.data?.quote.lines && modal.data?.quote.lines.length) && (<React.Fragment>
                <div className="overflow-x-auto rounded-xl ring-1 ring-slate-100 mt-3">
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
                      {(modal.data.quote.lines || []).map((row,ri, index) => (<React.Fragment key={ri}>
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
                      <td className="px-2 py-2 text-left font-extrabold text-brand-700 tabular-nums">{t((Number(modal.data.quote.amount)||0).toLocaleString()+' ر.س')}</td>
                    </tr></tfoot>
                  </table>
                </div>
              </React.Fragment>)}
            </div>)}

            
            {Boolean(modal.data?.contract) && (<div className="mt-3 rounded-xl ring-1 ring-emerald-100 bg-emerald-50/50 p-4">
              <div className="flex items-center justify-between"><b className="text-[13px] text-emerald-800">{t("\u0627\u0644\u0639\u0642\u062f \u0627\u0644\u0645\u0648\u0642\u0651\u0639")}</b>
                <span className="text-[11px] font-mono text-emerald-700" dir="ltr">{t(modal.data.contract?modal.data.contract.no:'')}</span></div>
              <div className="text-[12px] mt-2"><span className="text-slate-500">{t("\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u062a\u0648\u0642\u064a\u0639:")} </span><b className="text-slate-800">{t(modal.data.contract?modal.data.contract.signed:'')}</b></div>
            </div>)}

            
            {Boolean(modal.data?.annexes && modal.data?.annexes.length) && (<div className="mt-3">
              <b className="text-[13px] text-slate-700">{t("\u0645\u0644\u0627\u062d\u0642 \u0627\u0644\u0639\u0642\u062f")}</b>
              <div className="space-y-2 mt-2">
                {(modal.data.annexes || []).map((a, index) => (<React.Fragment key={a.no}>
                  <div className="rounded-xl bg-slate-50 p-3 text-[12px]">
                    <div className="flex items-center justify-between"><b className="text-slate-800">{t(a.type)}</b><span className="font-mono text-slate-400" dir="ltr">{t(a.no)}</span></div>
                    <p className="text-slate-500 mt-1">{t(a.detail)}</p>
                  </div>
                </React.Fragment>))}
              </div>
            </div>)}

            
            <div className="mt-5 rounded-xl ring-1 ring-slate-100 p-4">
              <div className="text-[12px] font-extrabold text-slate-700 mb-3">{t("\u0645\u0633\u0627\u0631 \u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0639\u0645\u064a\u0644 (Deadline)")}</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(pipelineSteps || []).map((step,i, index) => (<React.Fragment key={step.id}>
                  <div className={clsx("rounded-lg p-2 text-center", pipelineIndex(modal.data.stage)>=i ? 'bg-brand-50 ring-1 ring-brand-200' : 'bg-slate-50')}>
                    <div className={clsx("text-[10px] font-bold", pipelineIndex(modal.data.stage)>=i ? 'text-brand-700' : 'text-slate-400')}>{t((i+1)+'. '+step.t)}</div>
                  </div>
                </React.Fragment>))}
              </div>
            </div>
            <div className="rounded-xl ring-1 ring-slate-100 p-4 mt-3 space-y-3">
              <div className="text-[13px] font-extrabold text-slate-800">{t("\u0625\u062c\u0631\u0627\u0621 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 + \u0645\u0644\u0627\u062d\u0638\u0627\u062a")}</div>
              <textarea className="field" value={actionNote ?? ""} onChange={(e) => setProp("actionNote", e.target.value)} rows="2" placeholder={t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0625\u062c\u0631\u0627\u0621")}></textarea>
              <div className="flex flex-wrap gap-2">
                {Boolean(modal.data?.stage==='visited'||modal.data?.stage==='ready') && (<button className="px-3 py-2 rounded-xl bg-violet-50 text-violet-700 text-[12px] font-bold" onClick={() => { advanceLead(modal.data,'nego'); }}>{t("\u0625\u0644\u0649 \u0627\u0644\u062a\u0641\u0627\u0648\u0636")}</button>)}
                {Boolean(modal.data?.stage==='ready'||modal.data?.stage==='nego'||modal.data?.stage==='visited') && (<button className="px-3 py-2 rounded-xl bg-brand-500 text-white text-[12px] font-bold" onClick={() => { openDrill('quote', modal.data); }}>{t("\u062a\u0642\u062f\u064a\u0645 \u0639\u0631\u0636")}</button>)}
                {Boolean(modal.data?.stage==='quoted'||modal.data?.stage==='nego') && (<button className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-[12px] font-bold" onClick={() => { openDrill('signed', modal.data); }}>{t("\u062a\u0623\u0643\u064a\u062f \u062a\u0648\u0642\u064a\u0639 \u0627\u0644\u0639\u0642\u062f")}</button>)}
                {Boolean(role==='sales_mgr' && modal.data?.stage==='signed') && (<button className="px-3 py-2 rounded-xl bg-indigo-50 text-indigo-700 text-[12px] font-bold" onClick={() => { advanceLead(modal.data,'finance'); }}>{t("\u0625\u0631\u0633\u0627\u0644 \u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u0645\u0627\u0644\u064a\u0629")}</button>)}
                {Boolean(role==='sales_mgr' && modal.data?.stage==='finance') && (<button className="px-3 py-2 rounded-xl bg-teal-50 text-teal-700 text-[12px] font-bold" onClick={() => { advanceLead(modal.data,'am'); }}>{t("\u062a\u062d\u0648\u064a\u0644 \u0644\u0645\u062f\u064a\u0631 \u062d\u0633\u0627\u0628")}</button>)}
                {Boolean(role==='sales_mgr' && modal.data?.stage==='am') && (<button className="px-3 py-2 rounded-xl bg-orange-50 text-orange-700 text-[12px] font-bold" onClick={() => { advanceLead(modal.data,'housing'); }}>{t("\u0637\u0644\u0628 \u062a\u0633\u0644\u064a\u0645 \u0645\u0646 \u0627\u0644\u0633\u0643\u0646")}</button>)}
                {Boolean(role==='sales_mgr' && modal.data?.stage==='housing') && (<button className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-[12px] font-bold" onClick={() => { advanceLead(modal.data,'handed'); }}>{t("\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0648\u0627\u0644\u062a\u0641\u0639\u064a\u0644")}</button>)}
                {Boolean(role==='sales_rep' && (modal.data?.stage==='signed'||modal.data?.stage==='finance'||modal.data?.stage==='am')) && (<span className="text-[11px] text-slate-400">{t("\u0627\u0644\u0645\u0631\u0627\u062d\u0644 \u0627\u0644\u0646\u0647\u0627\u0626\u064a\u0629 \u0639\u0646\u062f \u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a")}</span>)}
                {Boolean(modal.data?.contract) && (<button className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-[12px] font-bold" onClick={() => { openDrill('annex', modal.data); }}>{t("\u0645\u0644\u062d\u0642 \u0639\u0642\u062f")}</button>)}
              </div>
            </div>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='quote' && modal.data) && (<React.Fragment>
          <div>
            <div className="rounded-xl bg-slate-50 p-4 mb-4">
              <div className="text-[12px] text-slate-400">{t("\u0627\u0644\u0639\u0645\u064a\u0644")}</div>
              <b className="text-slate-800 text-[14px]">{t(modal.data.client)}</b>
              <div className="text-[12px] text-slate-500 mt-1">{t(modal.data.need)}</div>
            </div>
            {Boolean(modal.data?.credit!=='approved') && (<div className="rounded-xl bg-amber-50 ring-1 ring-amber-100 p-4 mb-4 text-[13px] text-amber-800"> {t("\u0644\u0645 \u064a\u064f\u0639\u062a\u0645\u062f \u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064a\u0644 \u0627\u0626\u062a\u0645\u0627\u0646\u064a\u0627\u064b \u0628\u0639\u062f. \u0644\u0627 \u064a\u0645\u0643\u0646 \u0625\u0631\u0633\u0627\u0644 \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631 \u062d\u062a\u0649 \u064a\u0643\u062a\u0645\u0644 \u0645\u0644\u0641\u0647 \u0628\u062a\u0639\u0645\u064a\u062f \u0645\u0648\u0638\u0641 \u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646.")} </div>)}

            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-[13px] font-extrabold text-slate-800">{t("\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0633\u0639\u0631 \u0648\u0627\u0644\u0639\u0631\u0636")}</div>
                <p className="text-[11px] text-slate-400 mt-0.5">{t("\u0645\u0628\u0644\u063a \u0627\u0644\u0639\u0627\u0645\u0644 = \u0627\u0644\u0631\u0627\u062a\u0628 + \u0627\u0644\u0628\u062f\u0644\u0627\u062a (\u063a\u064a\u0631 \u0627\u0644\u0645\u062d\u0645\u0648\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u064a\u0644) + 1,000 \u0647\u0627\u0645\u0634 \u00b7 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a = \u0627\u0644\u0645\u0628\u0644\u063a \u00d7 \u0627\u0644\u0639\u062f\u062f \u00d7 \u0623\u0634\u0647\u0631 \u0627\u0644\u0645\u062f\u0629")}</p>
              </div>
              <button className="text-[12px] font-bold text-brand-700 bg-brand-50 px-3 py-1.5 rounded-lg shrink-0" onClick={() => { addQuoteLine(); }} type="button">{t("+ \u0625\u0636\u0627\u0641\u0629 \u0628\u0646\u062f")}</button>
            </div>

            <div className="space-y-3 mb-4 max-h-[48vh] overflow-y-auto pe-1">
              {(quoteForm.lines || []).map((row,ri, index) => (<React.Fragment key={ri}>
                <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[12px] font-extrabold text-slate-700">{t("\u0628\u0646\u062f")} <span>{t(ri+1)}</span></div>
                    {Boolean(quoteForm.lines.length>1) && (<button className="text-[12px] font-bold text-rose-500" onClick={() => { removeQuoteLine(ri); }} type="button">{t("\u062d\u0630\u0641")}</button>)}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                    <div><label className="block text-[11px] font-bold text-slate-500 mb-1">{t("\u062c\u0646\u0633\u064a\u0629")}</label><input className="field !py-2 !text-[12px]" value={row.nat ?? ""} onChange={(e) => setProp("row.nat", e.target.value)} placeholder={t("\u0627\u0644\u062c\u0646\u0633\u064a\u0629")} /></div>
                    <div><label className="block text-[11px] font-bold text-slate-500 mb-1">{t("\u0645\u0647\u0646\u0629")}</label><input className="field !py-2 !text-[12px]" value={row.job ?? ""} onChange={(e) => setProp("row.job", e.target.value)} placeholder={t("\u0627\u0644\u0645\u0647\u0646\u0629")} /></div>
                    <div><label className="block text-[11px] font-bold text-slate-500 mb-1">{t("\u0639\u062f\u062f")}</label><input className="field !py-2 !text-[12px]" value={row.qty ?? ""} onChange={(e) => setProp("row.qty", Number(e.target.value))} type="number" min="1" /></div>
                    <div><label className="block text-[11px] font-bold text-slate-500 mb-1">{t("\u0645\u062f\u0629 \u0639\u0642\u062f")}</label><input className="field !py-2 !text-[12px]" value={row.duration ?? ""} onChange={(e) => setProp("row.duration", e.target.value)} placeholder={t("24 \u0634\u0647\u0631")} /></div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                    <div><label className="block text-[11px] font-bold text-slate-500 mb-1">{t("\u0631\u0627\u062a\u0628")}</label><input className="field !py-2 !text-[12px] tabular-nums" value={row.salary ?? ""} onChange={(e) => setProp("row.salary", Number(e.target.value))} type="number" min="0" /></div>
                    <div><label className="block text-[11px] font-bold text-slate-500 mb-1">{t("\u0628\u062f\u0644 \u0633\u0643\u0646")}</label><input className={clsx("field !py-2 !text-[12px] tabular-nums", row.clientHousing?'opacity-50':'')} value={row.housing ?? ""} onChange={(e) => setProp("row.housing", Number(e.target.value))} type="number" min="0" /></div>
                    <div><label className="block text-[11px] font-bold text-slate-500 mb-1">{t("\u0628\u062f\u0644 \u0637\u0639\u0627\u0645")}</label><input className={clsx("field !py-2 !text-[12px] tabular-nums", row.clientFood?'opacity-50':'')} value={row.food ?? ""} onChange={(e) => setProp("row.food", Number(e.target.value))} type="number" min="0" /></div>
                    <div><label className="block text-[11px] font-bold text-slate-500 mb-1">{t("\u0628\u062f\u0644 \u0645\u0648\u0627\u0635\u0644\u0627\u062a")}</label><input className={clsx("field !py-2 !text-[12px] tabular-nums", row.clientTransport?'opacity-50':'')} value={row.transport ?? ""} onChange={(e) => setProp("row.transport", Number(e.target.value))} type="number" min="0" /></div>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-[12px] font-bold text-slate-600">
                    <label className="inline-flex items-center gap-1.5 cursor-pointer"><input className="rounded border-slate-300 text-brand-600" checked={Boolean(row.clientHousing)} onChange={(e) => setProp("row.clientHousing", e.target.checked)} type="checkbox" /> {t("\u0628\u062f\u0644 \u0627\u0644\u0633\u0643\u0646 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u064a\u0644")}</label>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer"><input className="rounded border-slate-300 text-brand-600" checked={Boolean(row.clientFood)} onChange={(e) => setProp("row.clientFood", e.target.checked)} type="checkbox" /> {t("\u0628\u062f\u0644 \u0627\u0644\u0637\u0639\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u064a\u0644")}</label>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer"><input className="rounded border-slate-300 text-brand-600" checked={Boolean(row.clientTransport)} onChange={(e) => setProp("row.clientTransport", e.target.checked)} type="checkbox" /> {t("\u0628\u062f\u0644 \u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u064a\u0644")}</label>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer text-brand-700"><input className="rounded border-slate-300 text-brand-600" checked={allAllowancesOnClient(row)} onChange={(e) => { setAllAllowancesOnClient(row, e.target.checked); }} type="checkbox" /> {t("\u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u062f\u0644\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u064a\u0644")}</label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 rounded-xl bg-slate-50 ring-1 ring-slate-100 px-3 py-2.5 text-[12px]">
                    <div><span className="text-slate-400">{t("\u0647\u0627\u0645\u0634 \u0627\u0644\u0634\u0631\u0643\u0629 / \u0639\u0627\u0645\u0644")}</span><div className="font-extrabold text-brand-700 tabular-nums">{t("+1,000 \u0631.\u0633")}</div></div>
                    <div><span className="text-slate-400">{t("\u0645\u0628\u0644\u063a \u0627\u0644\u0639\u0627\u0645\u0644 \u0627\u0644\u0648\u0627\u062d\u062f")}</span><div className="font-extrabold text-slate-800 tabular-nums">{t(quoteUnitPrice(row).toLocaleString()+' ر.س')}</div></div>
                    <div><span className="text-slate-400">{t("\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0628\u0646\u062f")}</span><div className="font-extrabold text-brand-700 tabular-nums">{t(quoteLineTotal(row).toLocaleString()+' ر.س')}</div></div>
                  </div>
                </div>
              </React.Fragment>))}
            </div>

            <div className="rounded-xl bg-brand-50/70 ring-1 ring-brand-100 px-4 py-3 mb-4 flex items-center justify-between">
              <span className="text-[13px] font-extrabold text-slate-700">{t("\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0643\u0644\u064a \u0644\u0644\u0639\u0631\u0636")}</span>
              <span className="text-[16px] font-extrabold text-brand-700 tabular-nums">{t(quoteFormTotal.toLocaleString()+' ر.س')}</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-[13px] font-bold text-slate-700 mb-1.5">{t("\u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0644\u0639\u0631\u0636")}</label>
                <input className="field" value={quoteForm.valid ?? ""} onChange={(e) => setProp("quoteForm.valid", e.target.value)} type="text" placeholder={t("\u0645\u062b\u0627\u0644: 2026/08/18")} />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-700 mb-1.5">{t("\u0646\u0633\u0628\u0629 \u0627\u0644\u062e\u0635\u0645 %")}</label>
                <input className="field" value={quoteForm.discountPct ?? ""} onChange={(e) => setProp("quoteForm.discountPct", Number(e.target.value))} type="number" placeholder="0" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mb-4">{t("\u2264 10\u066a \u2192 \u0645\u0634\u0631\u0641 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u00b7 \u0623\u0643\u0628\u0631 \u0645\u0646 10\u066a \u2192 \u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a. \u0644\u0646 \u064a\u064f\u0631\u0633\u0644 \u0644\u0644\u0639\u0645\u064a\u0644 \u0642\u0628\u0644 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f.")}</p>
            <button className="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-[14px] transition-colors" onClick={() => { submitQuote(modal.data); }}>{t("\u0631\u0641\u0639 \u0645\u0633\u0648\u062f\u0651\u0629 \u0627\u0644\u0639\u0631\u0636 \u0644\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u062f\u0627\u062e\u0644\u064a")}</button>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='signed' && modal.data) && (<React.Fragment>
          <div>
            <div className="rounded-xl bg-slate-50 p-4 mb-4">
              <div className="text-[12px] text-slate-400">{t("\u0627\u0644\u0639\u0645\u064a\u0644")}</div><b className="text-slate-800 text-[14px]">{t(modal.data.client)}</b>
            </div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1.5">{t("\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062f")}</label>
            <input className="w-full rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-400 outline-none px-4 py-2.5 text-[14px] font-mono mb-4" value={contractForm.no ?? ""} onChange={(e) => setProp("contractForm.no", e.target.value)} type="text" placeholder={t("\u0645\u062b\u0627\u0644: JE-2026-315")} dir="ltr" />
            <label className="block text-[13px] font-bold text-slate-700 mb-1.5">{t("\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u062a\u0648\u0642\u064a\u0639")}</label>
            <input className="w-full rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-400 outline-none px-4 py-2.5 text-[14px] mb-4" value={contractForm.date ?? ""} onChange={(e) => setProp("contractForm.date", e.target.value)} type="text" placeholder={t("\u0645\u062b\u0627\u0644: 2026/07/19")} />
            <label className="block text-[13px] font-bold text-slate-700 mb-1.5">{t("\u0646\u0633\u062e\u0629 \u0627\u0644\u0639\u0642\u062f \u0627\u0644\u0645\u0648\u0642\u0651\u0639\u0629 (PDF)")}</label>
            <div className="rounded-xl border-2 border-dashed border-slate-200 p-6 text-center text-[13px] text-slate-400 mb-5">{t("\u0627\u0633\u062d\u0628 \u0646\u0633\u062e\u0629 \u0627\u0644\u0639\u0642\u062f \u0627\u0644\u0645\u0648\u0642\u0651\u0639\u0629 \u0647\u0646\u0627 \u0623\u0648 \u0627\u0636\u063a\u0637 \u0644\u0644\u0627\u062e\u062a\u064a\u0627\u0631")}</div>
            
            <button className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[14px] transition-colors" onClick={() => { submitContract(modal.data); }}>{t("\u0631\u0641\u0639 \u0646\u0633\u062e\u0629 \u0627\u0644\u0639\u0642\u062f")}</button>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='annex' && modal.data) && (<React.Fragment>
          <div>
            <div className="rounded-xl bg-slate-50 p-4 mb-4">
              <div className="text-[12px] text-slate-400">{t("\u0627\u0644\u0639\u0642\u062f")}</div>
              <b className="text-slate-800 text-[14px] font-mono" dir="ltr">{t(modal.data.contract?modal.data.contract.no:'—')}</b>
              <div className="text-[12px] text-slate-500 mt-1">{t(modal.data.client)}</div>
            </div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1.5">{t("\u0646\u0648\u0639 \u0627\u0644\u0645\u0644\u062d\u0642")}</label>
            <select className="w-full rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-400 outline-none px-4 py-2.5 text-[14px] mb-4 bg-white" value={annexForm.type ?? ""} onChange={(e) => setProp("annexForm.type", e.target.value)}>
              <option>{t("\u0632\u064a\u0627\u062f\u0629 \u0639\u0645\u0627\u0644\u0629")}</option><option>{t("\u062a\u062e\u0641\u064a\u0636 \u0639\u0645\u0627\u0644\u0629")}</option><option>{t("\u062a\u0645\u062f\u064a\u062f \u0645\u062f\u0629 \u0627\u0644\u0639\u0642\u062f")}</option>
              <option>{t("\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0623\u0633\u0639\u0627\u0631")}</option><option>{t("\u062a\u063a\u064a\u064a\u0631 \u0645\u0648\u0642\u0639 \u0627\u0644\u0639\u0645\u0644")}</option><option>{t("\u062a\u0639\u062f\u064a\u0644 \u0628\u0646\u0648\u062f \u062a\u0639\u0627\u0642\u062f\u064a\u0629")}</option>
            </select>
            <label className="block text-[13px] font-bold text-slate-700 mb-1.5">{t("\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062a\u0639\u062f\u064a\u0644")}</label>
            <textarea className="w-full rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-brand-400 outline-none px-4 py-2.5 text-[14px] mb-5 resize-none" value={annexForm.detail ?? ""} onChange={(e) => setProp("annexForm.detail", e.target.value)} rows="3" placeholder={t("\u0645\u062b\u0627\u0644: \u0632\u064a\u0627\u062f\u0629 \u0661\u0660 \u0639\u0645\u0627\u0644 \u0636\u064a\u0627\u0641\u0629 \u0628\u0646\u0641\u0633 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0645\u062a\u0641\u0642 \u0639\u0644\u064a\u0647 \u0627\u0639\u062a\u0628\u0627\u0631\u0627\u064b \u0645\u0646 2026/08/01")}></textarea>
            
            <button className="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-[14px] transition-colors" onClick={() => { submitAnnex(modal.data); }}>{t("\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0644\u062d\u0642")}</button>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='salesInbox') && (<React.Fragment>
          <div className="space-y-3">
            {(salesInbox || []).map((l, index) => (<React.Fragment key={l.id}>
              <button className="w-full text-right rounded-xl bg-slate-50 hover:bg-slate-100 p-4 transition-colors" onClick={() => { readLead(l); }}>
                <div className="flex items-center justify-between gap-2">
                  <b className="text-[13px] text-slate-800">{t(l.client)}</b>
                  <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", creditMap[l.credit].c)}>{t(creditMap[l.credit].t)}</span>
                </div>
                <div className="text-[12px] text-slate-500 mt-1">{t(l.need)}</div>
              </button>
            </React.Fragment>))}
            {Boolean(salesInbox.length===0) && (<div className="text-center text-[13px] text-slate-400 py-8">{t("\u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u0634\u0639\u0627\u0631\u0627\u062a")}</div>)}
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='salesOpen') && (<React.Fragment>
          <div className="space-y-3">
            {(salesOpen || []).map((l, index) => (<React.Fragment key={l.id}>
              <button className="w-full text-right rounded-xl bg-slate-50 hover:bg-slate-100 p-4 transition-colors" onClick={() => { openDrill('lead', l); }}>
                <div className="flex items-center justify-between gap-2">
                  <b className="text-[13px] text-slate-800">{t(l.client)}</b>
                  <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", leadMap[l.stage].c)}>{t(leadMap[l.stage].t)}</span>
                </div>
                <div className="text-[12px] text-slate-500 mt-1">{t(l.need)}</div>
                <div className="text-[12px] font-bold text-brand-700 tabular-nums mt-1">{t(l.value.toLocaleString()+' ريال')}</div>
              </button>
            </React.Fragment>))}
            {Boolean(salesOpen.length===0) && (<div className="text-center text-[13px] text-slate-400 py-8">{t("\u0644\u0627 \u062a\u0648\u062c\u062f \u0635\u0641\u0642\u0627\u062a \u0645\u0641\u062a\u0648\u062d\u0629")}</div>)}
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='salesWon') && (<React.Fragment>
          <div>
            <div className="rounded-xl bg-slate-50 p-4 mb-4">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-slate-500">{t("\u0627\u0644\u0645\u062d\u0642\u0651\u0642")}</span>
                <b className="tabular-nums text-slate-800">{t(salesAchieved.toLocaleString()+' ريال')}</b>
              </div>
              <div className="flex items-center justify-between text-[13px] mt-1.5">
                <span className="text-slate-500">{t("\u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641")}</span>
                <b className="tabular-nums text-slate-800">{t(salesTarget.toLocaleString()+' ريال')}</b>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-200 overflow-hidden"><div className="h-full bg-brand-500 rounded-full" style={parseStyle('width:'+salesPct+'%')}></div></div>
              <div className="text-[12px] text-brand-700 font-bold mt-2">{t('نسبة التحقيق '+salesPct+'٪')}</div>
            </div>
            <div className="space-y-3">
              {(salesWon || []).map((l, index) => (<React.Fragment key={l.id}>
                <button className="w-full text-right rounded-xl bg-emerald-50/50 ring-1 ring-emerald-100 hover:bg-emerald-50 p-4 transition-colors" onClick={() => { openDrill('lead', l); }}>
                  <div className="flex items-center justify-between gap-2">
                    <b className="text-[13px] text-slate-800">{t(l.client)}</b>
                    <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", leadMap[l.stage].c)}>{t(leadMap[l.stage].t)}</span>
                  </div>
                  <div className="text-[12px] font-bold text-emerald-700 tabular-nums mt-1">{t(l.value.toLocaleString()+' ريال')}</div>
                </button>
              </React.Fragment>))}
              {Boolean(salesWon.length===0) && (<div className="text-center text-[13px] text-slate-400 py-8">{t("\u0644\u0627 \u062a\u0648\u062c\u062f \u0635\u0641\u0642\u0627\u062a \u0645\u064f\u0646\u062c\u0632\u0629 \u0628\u0639\u062f")}</div>)}
            </div>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='priceList') && (<React.Fragment>
          <div>
            <p className="text-[13px] text-slate-500 mb-4">{t("\u0623\u0633\u0639\u0627\u0631 \u0627\u0633\u062a\u0631\u0634\u0627\u062f\u064a\u0629 \u0634\u0647\u0631\u064a\u0629 \u0644\u0644\u0639\u0627\u0645\u0644 \u0627\u0644\u0648\u0627\u062d\u062f \u2014 \u062a\u064f\u0633\u062a\u062e\u062f\u0645 \u0643\u0623\u0633\u0627\u0633 \u0639\u0646\u062f \u0625\u0639\u062f\u0627\u062f \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631.")}</p>
            <div className="overflow-x-auto"><table className="w-full text-right text-[13px]">
              <thead><tr className="text-slate-400 border-b border-slate-100"><th className="font-medium px-3 py-2.5">{t("\u0627\u0644\u0645\u0647\u0646\u0629")}</th><th className="font-medium px-3 py-2.5">{t("\u0627\u0644\u062c\u0646\u0633\u064a\u0627\u062a")}</th><th className="font-medium px-3 py-2.5">{t("\u0634\u0647\u0631\u064a\u0627\u064b")}</th><th className="font-medium px-3 py-2.5">{t("\u0623\u0642\u0644 \u0639\u062f\u062f")}</th></tr></thead>
              <tbody className="divide-y divide-slate-50">
                {(priceList || []).map((p, index) => (<React.Fragment key={p.job}><tr>
                  <td className="px-3 py-2.5 font-bold text-slate-800">{t(p.job)}</td>
                  <td className="px-3 py-2.5 text-slate-500">{t(p.nat)}</td>
                  <td className="px-3 py-2.5 tabular-nums font-bold text-brand-700">{t(p.monthly.toLocaleString()+' ر.س')}</td>
                  <td className="px-3 py-2.5 text-slate-500">{t(p.min+' عمال')}</td>
                </tr></React.Fragment>))}
              </tbody>
            </table></div>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='renewals') && (<React.Fragment>
          <div className="space-y-3">
            {(salesRenewals || []).map((r, index) => (<React.Fragment key={r.id}>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-2">
                  <b className="text-[13px] text-slate-800">{t(r.client)}</b>
                  <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", r.daysLeft<=30?'text-rose-700 bg-rose-50':'text-amber-700 bg-amber-50')}>{t('باقٍ '+r.daysLeft+' يوم')}</span>
                </div>
                <div className="text-[12px] text-slate-500 mt-1"><span className="font-mono" dir="ltr">{t(r.no)}</span> {t("\u00b7 \u064a\u0646\u062a\u0647\u064a")} <span>{t(r.ends)}</span> · <span>{t(r.workers+' عامل')}</span></div>
              </div>
            </React.Fragment>))}
            {Boolean(salesRenewals.length===0) && (<div className="text-center text-[13px] text-slate-400 py-8">{t("\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0642\u0648\u062f \u0645\u0633\u062a\u062d\u0642\u0629")}</div>)}
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='visits' || modal.kind==='visitsMonth') && (<React.Fragment>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {(visitMonths || []).map((m, index) => (<React.Fragment key={m}>
                <button className={clsx("chip", visitMonthFilter===m?'active':'')} onClick={() => { setProp("visitMonthFilter", m); }} type="button">{t(m)}</button>
              </React.Fragment>))}
            </div>
            <div className="text-[12px] text-slate-500">{t("\u0639\u062f\u062f \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a:")} <b className="text-slate-800">{t(visitsForFilter.length)}</b></div>
            {(visitsForFilter || []).map((v, index) => (<React.Fragment key={v.id}>
              <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <b className="text-[13px] text-slate-800">{t(v.client)}</b>
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full">{t(v.type)}</span>
                </div>
                <p className="text-[12px] text-slate-500 mt-1.5">{t(v.note)}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] text-slate-400">
                  <span>{t(v.date)}</span>
                  {Boolean(v.mapsUrl) && (<a className="font-bold text-brand-600" href={v.mapsUrl} target="_blank" rel="noopener">{t("\u0641\u062a\u062d \u0627\u0644\u0645\u0648\u0642\u0639 \u0639\u0644\u0649 Google Maps")}</a>)}
                </div>
              </div>
            </React.Fragment>))}
            {Boolean(!visitsForFilter.length) && (<div className="text-center text-[13px] text-slate-400 py-6">{t("\u0644\u0627 \u0632\u064a\u0627\u0631\u0627\u062a \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631")}</div>)}
          </div>
        </React.Fragment>)}

        {Boolean(modal.kind==='renewal' && modal.data) && (<React.Fragment>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-extrabold text-lg text-slate-800">{t(modal.data.client)}</h4>
                <div className="text-[12px] text-slate-400 font-mono" dir="ltr">{t(modal.data.no)}</div>
              </div>
              <span className={clsx("text-[11px] font-bold px-2.5 py-1 rounded-full", renewMap[modal.data.status||'pending'].c)}>{t(renewMap[modal.data.status||'pending'].t)}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 p-3"><div className="text-[11px] text-slate-400">{t("\u064a\u0646\u062a\u0647\u064a")}</div><b>{t(modal.data.ends)}</b></div>
              <div className="rounded-xl bg-slate-50 p-3"><div className="text-[11px] text-slate-400">{t("\u0645\u062a\u0628\u0642\u064a")}</div><b>{t(modal.data.daysLeft+' يوم')}</b></div>
              <div className="rounded-xl bg-slate-50 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0639\u0645\u0627\u0644\u0629")}</div><b>{t(modal.data.workers+' عامل')}</b></div>
              <div className="rounded-xl bg-slate-50 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0642\u064a\u0645\u0629")}</div><b>{t(modal.data.value.toLocaleString()+' ر.س')}</b></div>
            </div>
            {Boolean(modal.data?.notes) && (<div className="rounded-xl bg-amber-50 p-3 text-[12px] text-amber-800">{t('ملاحظة سابقة: '+modal.data.notes)}</div>)}
            <textarea className="field" value={actionNote ?? ""} onChange={(e) => setProp("actionNote", e.target.value)} rows="2" placeholder={t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0642\u0631\u0627\u0631")}></textarea>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-2 rounded-xl bg-sky-50 text-sky-800 text-[12px] font-bold" onClick={() => { renewalAction(modal.data,'will_renew'); }}>{t("\u0633\u064a\u062a\u0645 \u0627\u0644\u062a\u062c\u062f\u064a\u062f")}</button>
              <button className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-[12px] font-bold" onClick={() => { renewalAction(modal.data,'renewed'); }}>{t("\u062a\u0645 \u0627\u0644\u062a\u062c\u062f\u064a\u062f")}</button>
              <button className="px-3 py-2 rounded-xl bg-rose-50 text-rose-700 text-[12px] font-bold" onClick={() => { renewalAction(modal.data,'declined'); }}>{t("\u0644\u0627 \u064a\u0631\u063a\u0628 \u0628\u0627\u0644\u062a\u062c\u062f\u064a\u062f")}</button>
              <button className="px-3 py-2 rounded-xl bg-brand-500 text-white text-[12px] font-bold" onClick={() => { startRenewal(modal.data); }}>{t("\u0641\u062a\u062d \u0635\u0641\u0642\u0629 \u062a\u062c\u062f\u064a\u062f")}</button>
            </div>
          </div>
        </React.Fragment>)}

        {Boolean(modal.kind==='attendance') && (<React.Fragment>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); closeModal(); logEvent('العميل','رفع شيت حضور','شهر جاري','المالية'); notify('fin_acc','شيت حضور جديد للتدقيق',account.name,{gotoPage:'finance'}); toast('success','تم رفع شيت الحضور','أُحيل للمالية لربطه بكشف الرواتب.'); }}>
            <div><label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0627\u0644\u0634\u0647\u0631")}</label><select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500"><option>{t("\u0641\u0628\u0631\u0627\u064a\u0631 2026")}</option><option>{t("\u064a\u0646\u0627\u064a\u0631 2026")}</option></select></div>
            <label className="flex flex-col items-center justify-center gap-2 w-full py-8 rounded-xl bg-slate-50 border-2 border-dashed border-slate-200 cursor-pointer hover:border-brand-400"><svg className="h-7 w-7 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg><span className="text-[13px] text-slate-500">{t("\u0627\u0633\u062d\u0628 \u0645\u0644\u0641 Excel \u0647\u0646\u0627 \u0623\u0648 \u0627\u0636\u063a\u0637 \u0644\u0644\u0627\u062e\u062a\u064a\u0627\u0631")}</span><input className="hidden" type="file" /></label>
            <div className="flex gap-3"><button className="flex-1 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-100" onClick={() => { closeModal(); }} type="button">{t("\u0625\u0644\u063a\u0627\u0621")}</button><button className="flex-[2] py-3 rounded-xl bg-ink text-white font-bold text-sm ring-1 ring-brand-500/30 hover:bg-black" type="submit">{t("\u0631\u0641\u0639 \u0648\u0627\u0639\u062a\u0645\u0627\u062f")}</button></div>
          </form>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='complaint') && (<React.Fragment>
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); submitTicket(); }} data-crm-entity="incident">
            
            <div>
              <div className="text-[13px] font-bold text-slate-700 mb-2">{t("1) \u0645\u0627 \u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628\u061f")} <span className="text-rose-500">*</span></div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {(ticketTypeOptions || []).map((opt, index) => (<React.Fragment key={opt.id}>
                  <button className={clsx("type-card", {'active':ticketForm.type===opt.id})} onClick={() => { setProp("ticketForm.type", opt.id); setProp("ticketForm.title", opt.title); }} type="button">
                    <div className="font-extrabold text-[13px] text-slate-800">{t(opt.label)}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{t(opt.hint)}</div>
                  </button>
                </React.Fragment>))}
              </div>
              <p className="field-hint">{t("\u064a\u064f\u062d\u0641\u0638 \u0641\u064a CRM \u0643\u0640 Case Type / Subject")}</p>
            </div>

            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0627\u0644\u0639\u0642\u062f \u0627\u0644\u0645\u0631\u062a\u0628\u0637")} <span className="text-rose-500">*</span></label>
                <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={ticketForm.contract ?? ""} onChange={(e) => setProp("ticketForm.contract", e.target.value)} required>
                  <option value="">{t("\u0627\u062e\u062a\u0631 \u0627\u0644\u0639\u0642\u062f\u2026")}</option>
                  {(contracts || []).map((c, index) => (<React.Fragment key={c.id}><option value={c.id}>{t(c.id+' — '+c.title)}</option></React.Fragment>))}
                </select>
                <p className="field-hint">Regarding / Contract lookup</p>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0627\u0644\u0623\u0648\u0644\u0648\u064a\u0629")} <span className="text-rose-500">*</span></label>
                <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={ticketForm.priority ?? ""} onChange={(e) => setProp("ticketForm.priority", e.target.value)}>
                  <option>{t("\u0639\u0627\u062f\u064a\u0629")}</option><option>{t("\u0645\u062a\u0648\u0633\u0637\u0629")}</option><option>{t("\u0639\u0627\u0644\u064a\u0629")}</option>
                </select>
                <p className="field-hint">Priority (Case)</p>
              </div>
              {Boolean(ticketForm.type==='replacement'||ticketForm.type==='complaint'||ticketForm.type==='attendance') && (<div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0627\u0644\u0639\u0627\u0645\u0644 \u0627\u0644\u0645\u0639\u0646\u064a")}</label>
                <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={ticketForm.workerId ?? ""} onChange={(e) => setProp("ticketForm.workerId", e.target.value)}>
                  <option value="">{t("\u2014 \u0627\u062e\u062a\u064a\u0627\u0631\u064a \u0625\u0646 \u0644\u0645 \u064a\u064f\u062d\u062f\u062f \u2014")}</option>
                  {(workers || []).map((w, index) => (<React.Fragment key={w.id}><option value={w.id}>{t(w.name+' · '+w.job)}</option></React.Fragment>))}
                </select>
                <p className="field-hint">Worker lookup</p>
              </div>)}
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0645\u0648\u0642\u0639 \u0627\u0644\u0639\u0645\u0644")}</label>
                <input className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={ticketForm.site ?? ""} onChange={(e) => setProp("ticketForm.site", e.target.value)} placeholder={t("\u0645\u062b\u0627\u0644: \u0645\u0648\u0642\u0639 \u0627\u0644\u0639\u0644\u064a\u0627 \u00b7 \u0627\u0644\u0631\u064a\u0627\u0636")} />
                <p className="field-hint">Site / Location</p>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0639\u0646\u0648\u0627\u0646 \u0645\u062e\u062a\u0635\u0631")} <span className="text-rose-500">*</span></label>
                <input className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={ticketForm.title ?? ""} onChange={(e) => setProp("ticketForm.title", e.target.value)} required maxLength="80" placeholder={t("\u0645\u062b\u0627\u0644: \u0637\u0644\u0628 \u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0639\u0627\u0645\u0644 \u0646\u0638\u0627\u0641\u0629")} />
                <p className="field-hint">Title / Case Title</p>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u062a\u0641\u0635\u064a\u0644\u064a")} <span className="text-rose-500">*</span></label>
                <textarea className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] resize-none focus:outline-none focus:border-brand-500" value={ticketForm.description ?? ""} onChange={(e) => setProp("ticketForm.description", e.target.value)} required rows="3" placeholder={t("\u0627\u0630\u0643\u0631 \u0627\u0644\u062a\u0627\u0631\u064a\u062e\u060c \u0627\u0644\u0645\u0648\u0642\u0639\u060c \u0648\u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u062d\u062a\u0627\u062c\u0648\u0646\u0647 \u0628\u0627\u0644\u0636\u0628\u0637\u2026")}></textarea>
                <p className="field-hint">Description</p>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u062c\u0648\u0627\u0644 \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629")}</label>
                <input className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={ticketForm.phone ?? ""} onChange={(e) => setProp("ticketForm.phone", e.target.value)} dir="ltr" placeholder="+9665XXXXXXXX" />
                <p className="field-hint">Callback number</p>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0645\u0631\u0641\u0642 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)")}</label>
                <label className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-50 border border-dashed border-slate-200 cursor-pointer hover:border-brand-400 text-[13px] text-slate-500"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>{t("\u0631\u0641\u0639 \u0645\u0644\u0641")}<input className="hidden" type="file" /></label>
              </div>
            </div>

            <div className="rounded-xl bg-brand-50/70 ring-1 ring-brand-100 p-3 text-[12px] text-brand-800">{t("\u0628\u0639\u062f \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u064a\u064f\u0646\u0634\u0623 \u0633\u062c\u0644")} <b>Case</b> {t("\u0641\u064a Dynamics \u0648\u064a\u064f\u0633\u0646\u064e\u062f \u0644\u0645\u062f\u064a\u0631 \u062d\u0633\u0627\u0628\u0643 \u00b7 \u0627\u0644\u0631\u062f \u0627\u0644\u0623\u0648\u0644 \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629.")}</div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-100" onClick={() => { closeModal(); }} type="button">{t("\u0625\u0644\u063a\u0627\u0621")}</button>
              <button className="flex-[2] py-3 rounded-xl bg-ink hover:bg-black text-white font-bold text-sm ring-1 ring-brand-500/30" type="submit">{t("\u0625\u0631\u0633\u0627\u0644 \u0648\u0641\u062a\u062d Case")}</button>
            </div>
          </form>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='requestLabor') && (<React.Fragment>
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); submitLaborRequest(); }} data-crm-entity="je_labor_request">
            <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3.5 text-[13px] text-slate-600"> {t("\u0627\u0644\u0637\u0644\u0628 \u0633\u064a\u064f\u0631\u0628\u0637 \u0628\u062d\u0633\u0627\u0628")} <b className="text-slate-800">{t(account.name)}</b> {t("\u0648\u064a\u064f\u062d\u0648\u0651\u064e\u0644 \u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u062d\u0633\u0627\u0628 \u0644\u0644\u062a\u0633\u0639\u064a\u0631 \u0648\u0627\u0644\u062a\u0646\u0641\u064a\u0630.")} </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0627\u0644\u0639\u0642\u062f \u0627\u0644\u0645\u0631\u0627\u062f \u0627\u0644\u062a\u0648\u0633\u0639\u0629 \u0639\u0644\u064a\u0647")} <span className="text-rose-500">*</span></label>
                <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={laborForm.contract ?? ""} onChange={(e) => setProp("laborForm.contract", e.target.value)} required>
                  <option value="">{t("\u0627\u062e\u062a\u0631 \u0627\u0644\u0639\u0642\u062f\u2026")}</option>
                  {(contracts || []).map((c, index) => (<React.Fragment key={c.id}><option value={c.id}>{t(c.id+' — '+c.title+' ('+c.count+' عامل)')}</option></React.Fragment>))}
                </select>
                <p className="field-hint">Contract lookup</p>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0627\u0644\u0645\u0647\u0646\u0629 / \u0627\u0644\u0645\u0633\u0645\u0649")} <span className="text-rose-500">*</span></label>
                <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={laborForm.job ?? ""} onChange={(e) => setProp("laborForm.job", e.target.value)} required>
                  <option value="">{t("\u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0647\u0646\u0629\u2026")}</option>
                  {(priceList || []).map((p, index) => (<React.Fragment key={p.job}><option value={p.job}>{t(p.job)}</option></React.Fragment>))}
                </select>
                <p className="field-hint">Job / Profession</p>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0627\u0644\u0639\u062f\u062f \u0627\u0644\u0645\u0637\u0644\u0648\u0628")} <span className="text-rose-500">*</span></label>
                <input className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={laborForm.qty ?? ""} onChange={(e) => setProp("laborForm.qty", Number(e.target.value))} type="number" min="1" max="500" required placeholder={t("\u0645\u062b\u0627\u0644: 10")} />
                <p className="field-hint">Quantity</p>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u062a\u0641\u0636\u064a\u0644 \u0627\u0644\u062c\u0646\u0633\u064a\u0629")}</label>
                <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={laborForm.nationality ?? ""} onChange={(e) => setProp("laborForm.nationality", e.target.value)}>
                  <option>{t("\u0628\u062f\u0648\u0646 \u062a\u0641\u0636\u064a\u0644")}</option><option>{t("\u0628\u0646\u063a\u0644\u0627\u062f\u064a\u0634")}</option><option>{t("\u0627\u0644\u0647\u0646\u062f")}</option><option>{t("\u0627\u0644\u0641\u0644\u0628\u064a\u0646")}</option><option>{t("\u0646\u064a\u0628\u0627\u0644")}</option><option>{t("\u0645\u0635\u0631")}</option>
                </select>
                <p className="field-hint">Nationality preference</p>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0628\u062f\u0621 \u0627\u0644\u0645\u0637\u0644\u0648\u0628")} <span className="text-rose-500">*</span></label>
                <input className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] text-slate-600 focus:outline-none focus:border-brand-500" value={laborForm.startDate ?? ""} onChange={(e) => setProp("laborForm.startDate", e.target.value)} type="date" required />
                <p className="field-hint">Requested start date</p>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0645\u062f\u0629 \u0627\u0644\u0627\u062d\u062a\u064a\u0627\u062c")}</label>
                <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={laborForm.duration ?? ""} onChange={(e) => setProp("laborForm.duration", e.target.value)}>
                  <option>{t("\u0634\u0647\u0631 \u0648\u0627\u062d\u062f")}</option><option>{t("3 \u0623\u0634\u0647\u0631")}</option><option>{t("6 \u0623\u0634\u0647\u0631")}</option><option>{t("\u0633\u0646\u0629")}</option><option>{t("\u062d\u062a\u0649 \u0646\u0647\u0627\u064a\u0629 \u0627\u0644\u0639\u0642\u062f")}</option>
                </select>
                <p className="field-hint">Duration</p>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0645\u062f\u064a\u0646\u0629 / \u0645\u0648\u0642\u0639 \u0627\u0644\u0639\u0645\u0644")} <span className="text-rose-500">*</span></label>
                <input className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] focus:outline-none focus:border-brand-500" value={laborForm.site ?? ""} onChange={(e) => setProp("laborForm.site", e.target.value)} required placeholder={t("\u0627\u0644\u0631\u064a\u0627\u0636 \u00b7 \u0627\u0644\u0639\u0644\u064a\u0627")} />
                <p className="field-hint">Work site</p>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[13px] font-bold text-slate-600 mb-1.5">{t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629")}</label>
                <textarea className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] resize-none focus:outline-none focus:border-brand-500" value={laborForm.notes ?? ""} onChange={(e) => setProp("laborForm.notes", e.target.value)} rows="2" placeholder={t("\u0648\u0631\u062f\u064a\u0629\u060c \u0645\u0647\u0627\u0631\u0627\u062a \u062e\u0627\u0635\u0629\u060c \u0633\u0643\u0646 \u0642\u0631\u064a\u0628 \u0645\u0646 \u0627\u0644\u0645\u0648\u0642\u0639\u2026")}></textarea>
                <p className="field-hint">Notes</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-50 ring-1 ring-emerald-100 p-3 text-[12px] text-emerald-800">{t("\u0628\u0639\u062f \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u064a\u064f\u0646\u0634\u0623 \u0637\u0644\u0628 \u062a\u0634\u063a\u064a\u0644 \u0641\u064a CRM \u0648\u064a\u0635\u0644\u0643 \u0631\u0642\u0645 \u0645\u0631\u062c\u0639\u064a \u2014 \u0642\u062f \u064a\u064f\u0637\u0644\u0628 \u0645\u0644\u062d\u0642 \u0639\u0642\u062f \u0625\u0646 \u0644\u0632\u0645.")}</div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-100" onClick={() => { closeModal(); }} type="button">{t("\u0625\u0644\u063a\u0627\u0621")}</button>
              <button className="flex-[2] py-3 rounded-xl bg-ink hover:bg-black text-white font-bold text-sm ring-1 ring-brand-500/30" type="submit">{t("\u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u0627\u0644\u0639\u0645\u0627\u0644\u0629")}</button>
            </div>
          </form>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='creditCase' && modal.data) && (<React.Fragment>
          <div className="space-y-5">
            <div className="rounded-2xl bg-ink text-white p-5 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={parseStyle("background:radial-gradient(circle at 90% 0%, rgba(0,172,233,.4), transparent 50%)")}></div>
              <div className="relative flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-[12px] text-slate-300">{t("\u0637\u0644\u0628 \u0627\u0626\u062a\u0645\u0627\u0646")}</div>
                  <h4 className="text-xl font-extrabold mt-1">{t(modal.data.client)}</h4>
                  <div className="text-[12px] text-slate-400 mt-1 font-mono" dir="ltr">{t(modal.data.ref+' · CR '+modal.data.cr)}</div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/10">{t(creditReqMap[modal.data.status].t)}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0633\u0645 \u0627\u0644\u0645\u0641\u0648\u0651\u0636")}</div><b className="text-slate-800">{t(modal.data.authName)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0647\u0648\u064a\u0629 \u0627\u0644\u0645\u0641\u0648\u0651\u0636")}</div><b className="text-slate-800 font-mono" dir="ltr">{t(modal.data.authId)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0628\u0631\u064a\u062f")}</div><b className="text-slate-800 text-[13px]" dir="ltr">{t(modal.data.authEmail)}</b></div>
              <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-3"><div className="text-[11px] text-slate-400">{t("\u0627\u0644\u062c\u0648\u0627\u0644")}</div><b className="text-slate-800" dir="ltr">{t(modal.data.authPhone)}</b></div>
            </div>

            <div>
              <h5 className="font-extrabold text-slate-800 mb-2">{t("\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a \u0644\u0644\u062a\u062d\u0642\u0642")}</h5>
              <div className="space-y-2">
                {(modal.data.attachments || []).map((a, index) => (<React.Fragment key={a.id}>
                  <label className={clsx("flex items-start gap-3 p-3 rounded-xl ring-1 transition-all", a.status==='verified'?'bg-emerald-50/60 ring-emerald-100':(a.status==='missing'?'bg-rose-50/40 ring-rose-100':'bg-white ring-slate-100'))}>
                    <input className="mt-1 h-4 w-4 accent-brand-500" disabled={!(role==='fin_credit' && (modal.data.status==='pending'||modal.data.status==='onhold')) || a.status==='missing'} checked={a.status==='verified'} onChange={(e) => { toggleCreditAttach(modal.data, a); }} type="checkbox" />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <b className="text-[13px] text-slate-800">{t(a.label)}</b>
                        {Boolean(a.required) && (<span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">{t("\u0625\u0644\u0632\u0627\u0645\u064a")}</span>)}
                        {Boolean(!a.required) && (<span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{t("\u0627\u062e\u062a\u064a\u0627\u0631\u064a")}</span>)}
                        <span className={clsx("text-[10px] font-bold px-1.5 py-0.5 rounded", a.status==='verified'?'text-emerald-700 bg-emerald-50':(a.status==='uploaded'?'text-amber-700 bg-amber-50':'text-rose-700 bg-rose-50'))}>{t(a.status==='verified'?'تم التحقق':(a.status==='uploaded'?'مرفوع — بانتظار التحقق':'غير مرفوع'))}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{t(a.note)}</p>
                    </div>
                  </label>
                </React.Fragment>))}
              </div>
            </div>

            <div>
              <label className="field-label">{t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u062a\u062f\u0642\u064a\u0642 / \u0633\u0628\u0628 \u0627\u0644\u062a\u0639\u0644\u064a\u0642 \u0623\u0648 \u0627\u0644\u0631\u0641\u0636")}</label>
              <textarea className="field mt-1" value={creditNote ?? ""} onChange={(e) => setProp("creditNote", e.target.value)} rows="3" placeholder={t("\u0645\u062b\u0627\u0644: \u064a\u064f\u0631\u062c\u0649 \u0631\u0641\u0639 \u0631\u062e\u0635\u0629 \u0627\u0644\u0628\u0644\u062f\u064a\u0629 \u0648\u062a\u062d\u062f\u064a\u062b \u0631\u0642\u0645 \u062c\u0648\u0627\u0644 \u0627\u0644\u0645\u0641\u0648\u0651\u0636\u2026")}></textarea>
            </div>

            
            {Boolean(role==='fin_credit' && (modal.data?.status==='pending'||modal.data?.status==='onhold')) && (<div className="flex flex-wrap gap-2">
              <button className="flex-1 min-w-[120px] py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-[13px]" onClick={() => { creditHold(modal.data); }} type="button">{t("\u062a\u0639\u0644\u064a\u0642 \u0644\u0627\u0633\u062a\u0643\u0645\u0627\u0644 \u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a")}</button>
              <button className="flex-1 min-w-[140px] py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[13px]" onClick={() => { creditApproveAudit(modal.data); }} type="button">{t("\u0645\u0648\u0627\u0641\u0642\u0629 \u0648\u062a\u0631\u062d\u064a\u0644 \u0644\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0627\u0644\u064a")}</button>
              <button className="flex-1 min-w-[100px] py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-[13px]" onClick={() => { creditReject(modal.data); }} type="button">{t("\u0631\u0641\u0636")}</button>
            </div>)}

            
            {Boolean(role==='fin_mgr' && modal.data?.status==='audit_ok') && (<div className="flex flex-wrap gap-2">
              <button className="flex-1 min-w-[160px] py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[13px]" onClick={() => { finApproveCredit(modal.data); }} type="button">{t("\u0627\u0639\u062a\u0645\u0627\u062f \u0646\u0647\u0627\u0626\u064a \u0648\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062d\u0633\u0627\u0628")}</button>
              <button className="flex-1 min-w-[140px] py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-[13px]" onClick={() => { finRejectCredit(modal.data); }} type="button">{t("\u0631\u0641\u0636 \u0648\u062a\u0639\u0644\u064a\u0642 \u0627\u0644\u062d\u0633\u0627\u0628")}</button>
            </div>)}

            {Boolean(modal.data?.status==='audit_ok' && role==='fin_credit') && (<div className="rounded-xl bg-brand-50 ring-1 ring-brand-100 p-3 text-[12px] text-brand-800">{t("\u062a\u0645 \u062a\u0631\u062d\u064a\u0644 \u0627\u0644\u0637\u0644\u0628 \u0644\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0627\u0644\u064a \u2014 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0648\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u062d\u0633\u0627\u0628.")}</div>)}
            {Boolean(modal.data?.status==='approved') && (<div className="rounded-xl bg-emerald-50 ring-1 ring-emerald-100 p-3 text-[12px] text-emerald-800">{t("\u0627\u0644\u062d\u0633\u0627\u0628 \u0645\u0641\u0639\u0651\u0644 \u0628\u0639\u062f \u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0627\u0644\u064a.")}</div>)}
            {Boolean(modal.data?.status==='rejected'||modal.data?.status==='onhold') && (<div className="rounded-xl bg-amber-50 ring-1 ring-amber-100 p-3 text-[12px] text-amber-900">{t((modal.data.holdNote||modal.data.officerNote||'الحساب معلّق / بانتظار استكمال.') )}</div>)}

            <button className="w-full py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-sm" onClick={() => { closeModal(); }} type="button">{t("\u0625\u063a\u0644\u0627\u0642")}</button>
          </div>
        </React.Fragment>)}

        
        {Boolean(modal.kind==='action' && modal.data) && (<React.Fragment>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); submitAction(); }}>
            <div className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-4">
              <div className="text-[11px] text-slate-400">{t("\u0627\u0644\u0628\u0646\u062f")}</div>
              <b className="text-slate-800">{t(modal.data.title)}</b>
              <div className="text-[12px] text-slate-500 mt-1">{t(modal.data.ref+' · الحالة الحالية: '+workStatusMap[modal.data.status].t)}</div>
            </div>

            <div>
              <label className="field-label">{t("\u0646\u0648\u0639 \u0627\u0644\u0625\u062c\u0631\u0627\u0621")}</label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-1">
                {([{id:'reply',t:'رد'},{id:'approve',t:'موافقة'},{id:'reject',t:'رفض'},{id:'hold',t:'تعليق'},{id:'escalate',t:'تصعيد'}] || []).map((a, index) => (<React.Fragment key={a.id}>
                  <button className={clsx("py-2 rounded-xl text-[12px] font-bold ring-1 transition-colors", actionForm.decision===a.id?'bg-brand-500 text-white ring-brand-500':'bg-white text-slate-600 ring-slate-200 hover:bg-slate-50')} onClick={() => { setProp("actionForm.decision", a.id); if(a.id!=='escalate'){ actionForm.escalateTo=''; }; }} type="button">{t(a.t)}</button>
                </React.Fragment>))}
              </div>
            </div>

            {Boolean(actionForm.decision==='escalate') && (<div className="space-y-3 rounded-xl ring-1 ring-rose-100 bg-rose-50/40 p-4">
              <div>
                <label className="field-label">{t("\u0627\u0644\u062a\u0635\u0639\u064a\u062f \u0625\u0644\u0649 (\u0645\u0646\u0635\u0628 \u0623\u0639\u0644\u0649)")}</label>
                <select className="field mt-1" value={actionForm.escalateTo ?? ""} onChange={(e) => setProp("actionForm.escalateTo", e.target.value)}>
                  <option value="">{t("\u2014 \u0627\u062e\u062a\u0631 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641 \u2014")}</option>
                  {(escalateTargets || []).map((item, index) => (<React.Fragment key={item.id}><option value={item.id}>{t(item.label)}</option></React.Fragment>))}
                </select>
                <p className="field-hint">{t("\u0628\u0639\u062f \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u062a\u0638\u0647\u0631 \u0641\u0642\u0637 \u062d\u0627\u0644\u0629 \u00ab\u062a\u0645 \u0627\u0644\u062a\u0635\u0639\u064a\u062f\u00bb \u2014 \u0628\u062f\u0648\u0646 \u062a\u0641\u0627\u0635\u064a\u0644 \u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u062a\u0635\u0639\u064a\u062f.")}</p>
              </div>
              <div>
                <label className="field-label">{t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u062a\u0635\u0639\u064a\u062f")} <span className="text-rose-500">*</span></label>
                <textarea className="field mt-1" value={actionForm.notes ?? ""} onChange={(e) => setProp("actionForm.notes", e.target.value)} rows="3" placeholder={t("\u0633\u0628\u0628 \u0627\u0644\u062a\u0635\u0639\u064a\u062f \u0648\u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u0645\u0646 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641 (\u0625\u0644\u0632\u0627\u0645\u064a)")}></textarea>
              </div>
            </div>)}

            {Boolean(actionForm.decision!=='escalate') && (<div className="space-y-3">
              <div>
                <label className="field-label">{t("\u0646\u0635 \u0627\u0644\u0631\u062f / \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a")}</label>
                <textarea className="field mt-1" value={actionForm.notes ?? ""} onChange={(e) => setProp("actionForm.notes", e.target.value)} rows="3" placeholder={t("\u0633\u062c\u0651\u0644 \u0631\u062f\u0643 \u0627\u0644\u0631\u0633\u0645\u064a \u0647\u0646\u0627\u2026")}></textarea>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="field-label">{t("\u0627\u0644\u0645\u0648\u0639\u062f \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0644\u0644\u0631\u062f \u0627\u0644\u062a\u0627\u0644\u064a (\u0633\u0627\u0639\u0627\u062a)")}</label>
                  <select className="field mt-1" value={actionForm.deadlineHours ?? ""} onChange={(e) => setProp("actionForm.deadlineHours", e.target.value)}>
                    <option value="4">{t("4 \u0633\u0627\u0639\u0627\u062a")}</option>
                    <option value="8">{t("8 \u0633\u0627\u0639\u0627\u062a")}</option>
                    <option value="24">{t("24 \u0633\u0627\u0639\u0629")}</option>
                    <option value="48">{t("48 \u0633\u0627\u0639\u0629")}</option>
                    <option value="72">{t("72 \u0633\u0627\u0639\u0629")}</option>
                  </select>
                </div>
                <div>
                  <label className="field-label">{t("\u064a\u064f\u062d\u0648\u0651\u064e\u0644 \u0625\u0644\u0649")}</label>
                  <select className="field mt-1" value={actionForm.nextRole ?? ""} onChange={(e) => setProp("actionForm.nextRole", e.target.value)}>
                    {(nextRouteOptions || []).map((item, index) => (<React.Fragment key={item.id}><option value={item.id}>{t(item.label)}</option></React.Fragment>))}
                  </select>
                </div>
              </div>
            </div>)}

            <div className="flex gap-3 pt-1">
              <button className="flex-1 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-sm" onClick={() => { closeModal(); }} type="button">{t("\u0625\u0644\u063a\u0627\u0621")}</button>
              <button className="flex-[2] py-3 rounded-xl bg-ink text-white font-bold text-sm ring-1 ring-brand-500/30" type="submit">{t(actionForm.decision==='escalate'?'تأكيد التصعيد':'تسجيل الرد وإرسال المسار')}</button>
            </div>
          </form>
        </React.Fragment>)}

      </div>
      
      {Boolean(['worker','contract','doc','client','ticket','workers','contracts','finance','invoice'].includes(modal.kind)) && (<React.Fragment>
        <div className="flex items-center gap-3 p-5 border-t border-slate-100 bg-slate-50/50"><button className="flex-1 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-100" onClick={() => { closeModal(); }}>{t("\u0625\u063a\u0644\u0627\u0642")}</button>{Boolean(modal.kind!=='invoice'&&modal.kind!=='ticket') && (<button className="flex-1 py-2.5 rounded-xl bg-ink text-white font-bold text-sm ring-1 ring-brand-500/30 hover:bg-black" onClick={() => { toast('info','تحميل / معاينة','إجراء تجريبي — سيبدأ تحميل الملف بصيغة PDF في النسخة الفعلية.'); }}>{t("\u062a\u062d\u0645\u064a\u0644 / \u0645\u0639\u0627\u064a\u0646\u0629")}</button>)}</div>
      </React.Fragment>)}
    </div>)}
  </div>
</div>
  );
}
