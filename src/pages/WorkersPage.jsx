import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function WorkersPage() {

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
<section data-crm-entity="je_worker">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800">{t("\u0627\u0644\u0639\u0645\u0627\u0644\u0629 \u0627\u0644\u0645\u0648\u0631\u0651\u062f\u0629")}</h1>
            <p className="text-[14px] text-slate-400 mt-1">{t("\u0627\u0633\u062a\u0639\u0631\u0627\u0636 \u062d\u0627\u0644\u0629 \u0627\u0644\u0639\u0645\u0627\u0644 \u0648\u0645\u0648\u0627\u0642\u0639\u0647\u0645 \u0648\u0631\u0628\u0637\u0647\u0645 \u0628\u0627\u0644\u0639\u0642\u0648\u062f \u2014 \u064a\u064f\u0632\u0627\u0645\u064e\u0646 \u0645\u0639 \u0633\u062c\u0644\u0627\u062a CRM.")}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2.5 rounded-xl bg-ink text-white text-[13px] font-bold ring-1 ring-brand-500/30 hover:bg-black transition-colors" onClick={() => { openDrill('attendance'); }}>{t("\u0631\u0641\u0639 \u0634\u064a\u062a \u0627\u0644\u062d\u0636\u0648\u0631")}</button>
            <button className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-[13px] font-bold hover:bg-slate-50 transition-colors" onClick={() => { openDrill('requestLabor'); }}>{t("\u0637\u0644\u0628 \u0639\u0645\u0627\u0644\u0629 \u0625\u0636\u0627\u0641\u064a\u0629")}</button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-slate-800">{t(workers.length)}</div><div className="text-[12px] text-slate-400">{t("\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a")}</div></div>
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-emerald-600">{t(activeWorkers)}</div><div className="text-[12px] text-slate-400">{t("\u0646\u0634\u0637")}</div></div>
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-violet-600">{t(workers.filter(w=>w.status==='leave').length)}</div><div className="text-[12px] text-slate-400">{t("\u0625\u062c\u0627\u0632\u0629")}</div></div>
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-amber-600">{t(workers.filter(w=>w.status==='pending'||w.status==='expired').length)}</div><div className="text-[12px] text-slate-400">{t("\u064a\u062d\u062a\u0627\u062c \u0645\u062a\u0627\u0628\u0639\u0629")}</div></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {(workers || []).map((w, index) => (<React.Fragment key={'card-'+w.id}>
            <button className="text-right rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('worker', w); }} type="button">
              <div className="flex items-start justify-between gap-2">
                <div><b className="text-slate-800">{t(w.name)}</b><div className="text-[12px] text-slate-400 mt-0.5">{t(w.job+' · '+w.nat)}</div></div>
                <span className={clsx("text-[11px] font-bold px-2 py-0.5 rounded-full", statusMap[w.status].c)}>{t(statusMap[w.status].t)}</span>
              </div>
              <div className="mt-3 text-[12px] text-slate-500 space-y-1">
                <div>📍 <span>{t(w.location)}</span></div>
                <div>🛏 <span>{t(w.room)}</span></div>
              </div>
              <div className="mt-3 text-[11px] font-bold text-brand-600">{t("\u0627\u0636\u063a\u0637 \u0644\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0648\u0627\u0644\u0646\u0642\u0644 \u0648\u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u2190")}</div>
            </button>
          </React.Fragment>))}
        </div>
        <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 overflow-hidden">
          <div className="overflow-x-auto"><table className="w-full text-right text-[13px]">
            <thead><tr className="text-slate-400 border-b border-slate-100 bg-slate-50/50">
              <th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0639\u0627\u0645\u0644")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0639\u0642\u062f")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0645\u0648\u0642\u0639")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0633\u0643\u0646")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0625\u0642\u0627\u0645\u0629")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u062d\u0627\u0644\u0629")}</th><th className="font-medium px-5 py-3.5 text-left">{t("\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644")}</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-50">
              {(workers || []).map((w, index) => (<React.Fragment key={w.id}><tr className="hover:bg-brand-50/40 transition-colors cursor-pointer" onClick={() => { openDrill('worker', w); }}>
                <td className="px-5 py-4"><b className="text-slate-700">{t(w.name)}</b><div className="text-[11px] text-slate-400">{t(w.job + ' · ' + w.nat)}</div></td>
                <td className="px-5 py-4 font-mono text-slate-600" dir="ltr">{t(w.contract)}</td>
                <td className="px-5 py-4 text-slate-600">{t(w.location)}</td>
                <td className="px-5 py-4 text-slate-600">{t(w.room)}</td>
                <td className="px-5 py-4 text-slate-600">{t(w.iqama)}</td>
                <td className="px-5 py-4"><span className={clsx("inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full", statusMap[w.status].c)}><span className="h-1.5 w-1.5 rounded-full bg-current opacity-70"></span><span>{t(statusMap[w.status].t)}</span></span></td>
                <td className="px-5 py-4 text-left"><span className="text-brand-600 font-bold text-[12px]">{t("\u062a\u0641\u0627\u0635\u064a\u0644 + \u0625\u062c\u0631\u0627\u0621\u0627\u062a \u2190")}</span></td>
              </tr></React.Fragment>))}
            </tbody>
          </table></div>
        </div>
      </section>
  );
}
