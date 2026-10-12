import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function HousingPage() {

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
        <div className="mb-6"><h1 className="text-xl sm:text-2xl font-extrabold text-slate-800">{t("\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u062c\u0645\u0639\u0627\u062a \u0627\u0644\u0633\u0643\u0646\u064a\u0629")}</h1><p className="text-[13px] sm:text-[14px] text-slate-400 mt-1">{t("\u062e\u0635\u0651\u0635 \u0627\u0644\u0623\u0633\u0631\u0651\u0629\u060c \u0627\u0646\u0642\u0644 \u0627\u0644\u0639\u0645\u0627\u0644\u0629 \u0628\u064a\u0646 \u0627\u0644\u063a\u0631\u0641\u060c \u0648\u062a\u0627\u0628\u0639 \u062d\u0627\u0644\u0629 \u0627\u0644\u0625\u0634\u063a\u0627\u0644 \u0644\u062d\u0638\u064a\u0627\u064b.")}</p></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-slate-800">{t(rooms.length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0627\u0644\u063a\u0631\u0641")}</div></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-brand-600">{t(occupiedBeds)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0623\u0633\u0631\u0651\u0629 \u0645\u0634\u063a\u0648\u0644\u0629")}</div></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-emerald-600">{t(freeBeds)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0623\u0633\u0631\u0651\u0629 \u0634\u0627\u063a\u0631\u0629")}</div></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-amber-600">{t(waiting.length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u062e\u0635\u064a\u0635")}</div></div>
        </div>
        
        {Boolean(waiting.length) && (<div className="rounded-2xl bg-amber-50 ring-1 ring-amber-100 p-4 mb-6"><div className="text-[13px] font-bold text-amber-800 mb-2">{t("\u0639\u0645\u0627\u0644\u0629 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u062a\u062e\u0635\u064a\u0635 \u0633\u0631\u064a\u0631:")}</div><div className="flex flex-wrap gap-2">{(waiting || []).map((w, index) => (<React.Fragment key={w}><span className="inline-flex items-center gap-1.5 text-[12px] font-medium bg-white text-amber-700 px-2.5 py-1 rounded-lg ring-1 ring-amber-100">{t(w)}</span></React.Fragment>))}</div></div>)}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(rooms || []).map((room, index) => (<React.Fragment key={room.id}>
            <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100">
              <div className="flex items-center justify-between mb-3"><div><h3 className="font-bold text-slate-800">{t(room.name)}</h3><div className="text-[11px] text-slate-400">{t(room.beds.filter(b=>b).length + ' / ' + room.beds.length + ' مشغول')}</div></div>
                <span className={clsx("text-[11px] font-bold px-2 py-0.5 rounded-full", room.beds.every(b=>b)?'text-rose-700 bg-rose-50':'text-emerald-700 bg-emerald-50')}>{t(room.beds.every(b=>b)?'ممتلئة':'متاحة')}</span></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(room.beds || []).map((bed,idx, index) => (<React.Fragment key={idx}>
                  <div className={clsx("rounded-xl p-2.5 text-[12px] ring-1 flex items-center gap-2", bed?'bg-emerald-50 ring-emerald-100 text-emerald-800':'bg-slate-50 ring-slate-100 text-slate-400')}>
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" /></svg>
                    <span className="flex-1 truncate font-medium">{t(bed || 'سرير شاغر')}</span>
                    
                    {Boolean(bed) && (<button className="text-emerald-600 hover:text-rose-600" onClick={() => { freeBed(room,idx); }} title={t("\u0625\u062e\u0644\u0627\u0621")}><svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></button>)}
                  </div>
                </React.Fragment>))}
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                
                <button className={clsx("flex-1 font-bold text-[12px] py-1.5 rounded-lg transition-colors", (room.beds.every(b=>b)||!waiting.length)?'bg-slate-100 text-slate-400 cursor-not-allowed':'bg-brand-500 hover:bg-brand-600 text-white')} onClick={() => { assignBed(room); }} disabled={room.beds.every(b=>b)||!waiting.length}>{t("\u062a\u062e\u0635\u064a\u0635 \u0633\u0631\u064a\u0631")}</button>
                
                <button className="font-bold text-[12px] px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors disabled:opacity-40" onClick={() => { transfer(room); }} disabled={!room.beds.some(b=>b)}>{t("\u0646\u0642\u0644 \u0639\u0627\u0645\u0644")}</button>
              </div>
            </div>
          </React.Fragment>))}
        </div>
      </section>
  );
}
