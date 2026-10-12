import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function AmPage() {

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
        <div className="mb-6"><h1 className="text-xl sm:text-2xl font-extrabold text-slate-800">{t("\u0644\u0648\u062d\u0629 \u0645\u062f\u064a\u0631 \u0627\u0644\u062d\u0633\u0627\u0628")}</h1><p className="text-[13px] sm:text-[14px] text-slate-400 mt-1">{t("\u062a\u062a\u0628\u0651\u0639 \u0637\u0644\u0628\u0627\u062a \u0639\u0645\u0644\u0627\u0626\u0643 \u0639\u0628\u0631 \u0645\u0631\u0627\u062d\u0644 \u0627\u0644\u0639\u0645\u0644 \u2014 \u0627\u0633\u062d\u0628 \u0627\u0644\u0637\u0644\u0628 \u0644\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u062a\u0627\u0644\u064a\u0629 \u062d\u062a\u0649 \u0627\u0644\u0625\u0646\u062c\u0627\u0632.")}</p></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-slate-800">{t(amClients.length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0637\u0644\u0628\u0627\u062a")}</div></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-amber-600">{t(amClients.filter(i=>i.status==='pending').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629")}</div></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-brand-600">{t(amClients.filter(i=>i.status==='inprogress').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0642\u064a\u062f \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629")}</div></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-emerald-600">{t(amClients.filter(i=>i.status==='completed').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0645\u0643\u062a\u0645\u0644\u0629")}</div></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {([{k:'pending',t:'جديد / بانتظار المراجعة',c:'amber'},{k:'inprogress',t:'قيد المعالجة',c:'brand'},{k:'completed',t:'مكتمل',c:'emerald'}] || []).map((col, index) => (<React.Fragment key={col.k}>
            <div className="rounded-2xl bg-slate-100/70 p-3">
              <div className="flex items-center justify-between px-2 py-2"><h3 className="font-bold text-[14px] text-slate-700">{t(col.t)}</h3><span className="text-[12px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-500">{t(amClients.filter(i=>i.status===col.k).length)}</span></div>
              <div className="space-y-3 mt-1">
                {(amClients.filter(i=>i.status===col.k) || []).map((item, index) => (<React.Fragment key={item.id}>
                  <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                    <div className="flex items-start justify-between gap-2"><div><b className="text-[13px] text-slate-800">{t(item.client)}</b><div className="text-[11px] text-slate-400 font-mono" dir="ltr">{t(item.ref)}</div></div><span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded-full", item.priority==='عالية'?'text-rose-700 bg-rose-50':'text-slate-500 bg-slate-100')}>{t(item.priority)}</span></div>
                    <p className="text-[12px] text-slate-500 mt-2">{t(item.task)}</p>
                    <div className="mt-3 flex items-center gap-1.5">
                      
                      {Boolean(item.status!=='completed') && (<button className="flex-1 text-white bg-brand-500 hover:bg-brand-600 font-bold text-[12px] py-1.5 rounded-lg transition-colors" onClick={() => { advance(item); }}>{t(item.status==='pending'?'بدء المعالجة':'إنجاز الطلب')}</button>)}
                      
                      <button className="text-slate-500 hover:text-slate-700 font-bold text-[12px] px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => { openActionFromAm(item,'reply'); }} type="button">{t("\u0631\u062f")}</button>
                      <button className="text-rose-600 hover:text-rose-700 font-bold text-[12px] px-2.5 py-1.5 rounded-lg hover:bg-rose-50 transition-colors" onClick={() => { openActionFromAm(item,'escalate'); }} type="button">{t("\u062a\u0635\u0639\u064a\u062f")}</button>
                    </div>
                  </div>
                </React.Fragment>))}
                {Boolean(amClients.filter(i=>i.status===col.k).length===0) && (<div className="text-center text-[12px] text-slate-400 py-6">{t("\u0644\u0627 \u062a\u0648\u062c\u062f \u0637\u0644\u0628\u0627\u062a")}</div>)}
              </div>
            </div>
          </React.Fragment>))}
        </div>
      </section>
  );
}
