import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function FinancePage() {

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
        <div className="flex flex-wrap items-end justify-between gap-3 mb-6"><div><h1 className="text-2xl font-extrabold text-slate-800">{t("\u0642\u0633\u0645 \u0627\u0644\u0645\u0627\u0644\u064a\u0629")}</h1><p className="text-[14px] text-slate-400 mt-1">{t("\u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646\u064a\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064a\u0629 \u0648\u062a\u062f\u0642\u064a\u0642 \u0627\u0644\u0631\u0648\u0627\u062a\u0628.")}</p></div>
          
          <button className={clsx("px-4 py-2 rounded-xl font-bold text-sm transition-all", salary.some(r=>r.status==='pending')?'bg-slate-200 text-slate-400 cursor-not-allowed':'bg-ink text-white ring-1 ring-brand-500/30 hover:bg-black')} onClick={() => { approveSheet(); }} disabled={salary.some(r=>r.status==='pending')}>{t("\u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u0643\u0634\u0641 \u0648\u0625\u062d\u0627\u0644\u062a\u0647 \u0644\u0644\u0635\u0631\u0641")}</button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-slate-800">{t(salary.length)}</div><div className="text-[12px] text-slate-400">{t("\u0639\u062f\u062f \u0627\u0644\u0628\u0646\u0648\u062f")}</div></div>
          
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-slate-800 tabular-nums">{t(salaryTotal.toLocaleString())}</div><div className="text-[12px] text-slate-400">{t("\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0643\u0634\u0641 (\u0631\u064a\u0627\u0644)")}</div></div>
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-emerald-600">{t(salary.filter(r=>r.status==='approved').length)}</div><div className="text-[12px] text-slate-400">{t("\u0645\u0639\u062a\u0645\u062f\u0629")}</div></div>
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-rose-600">{t(salary.filter(r=>r.status==='rejected').length)}</div><div className="text-[12px] text-slate-400">{t("\u0645\u0631\u0641\u0648\u0636\u0629")}</div></div>
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-brand-700 tabular-nums">{t(salaryNet.toLocaleString())}</div><div className="text-[12px] text-slate-400">{t("\u0635\u0627\u0641\u064a \u0627\u0644\u0645\u0639\u062a\u0645\u062f (\u0631\u064a\u0627\u0644)")}</div></div>
        </div>
        <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 overflow-hidden"><div className="overflow-x-auto"><table className="w-full text-right text-[13px]">
          <thead><tr className="text-slate-400 border-b border-slate-100 bg-slate-50/50"><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0639\u0627\u0645\u0644")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0623\u0633\u0627\u0633\u064a")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0628\u062f\u0644\u0627\u062a")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u062e\u0635\u0648\u0645\u0627\u062a")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0635\u0627\u0641\u064a")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u062d\u0627\u0644\u0629")}</th><th className="font-medium px-5 py-3.5 text-left">{t("\u062a\u062f\u0642\u064a\u0642")}</th></tr></thead>
          <tbody className="divide-y divide-slate-50">
            {(salary || []).map((r, index) => (<React.Fragment key={r.id}><tr className="hover:bg-slate-50/60 transition-colors">
              <td className="px-5 py-4"><b className="text-slate-700">{t(r.name)}</b><div className="text-[11px] text-slate-400 font-mono" dir="ltr">{t(r.emp)}</div></td>
              <td className="px-5 py-4 tabular-nums text-slate-600">{t(r.basic.toLocaleString())}</td>
              <td className="px-5 py-4 tabular-nums text-emerald-600">{t('+'+r.allow.toLocaleString())}</td>
              
              <td className="px-5 py-4"><input className="w-20 px-2 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[13px] text-rose-600 text-center tabular-nums focus:outline-none focus:border-brand-500 disabled:opacity-60" value={r.deduct ?? ""} onChange={(e) => setProp("r.deduct", Number(e.target.value))} disabled={r.status!=='pending'} type="number" min="0" /></td>
              <td className="px-5 py-4 tabular-nums font-bold text-slate-800">{t((r.basic + r.allow - r.deduct).toLocaleString())}</td>
              <td className="px-5 py-4"><span className={clsx("inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full", salMap[r.status].c)}>{t(salMap[r.status].t)}</span></td>
              <td className="px-5 py-4 text-left"><div className="flex items-center justify-end gap-1.5">
                <button className="text-emerald-600 hover:text-emerald-700 font-bold hover:bg-emerald-50 px-2.5 py-1.5 rounded-lg transition-colors" onClick={() => { setProp("r.status", 'approved'); toast('success','اعتماد بند','اعتُمد راتب '+r.name); }}>{t("\u0627\u0639\u062a\u0645\u0627\u062f")}</button>
                <button className="text-rose-600 hover:text-rose-700 font-bold hover:bg-rose-50 px-2.5 py-1.5 rounded-lg transition-colors" onClick={() => { setProp("r.status", 'rejected'); toast('info','رفض بند','أُعيد بند '+r.name+' للتصحيح'); }}>{t("\u0631\u0641\u0636")}</button>
              </div></td>
            </tr></React.Fragment>))}
          </tbody></table></div></div>
      </section>
  );
}
