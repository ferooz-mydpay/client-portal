import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function TicketsPage() {

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
<section data-crm-entity="incident">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800">{t("\u0645\u0631\u0643\u0632 \u0627\u0644\u062f\u0639\u0645")}</h1>
            <p className="text-[13px] sm:text-[14px] text-slate-400 mt-1">{t("\u0627\u062e\u062a\u0631 \u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628\u060c \u0648\u0623\u0643\u0645\u0644 \u0627\u0644\u062d\u0642\u0648\u0644 \u2014 \u0633\u0646\u0641\u062a\u062d Case \u0641\u064a CRM \u0648\u0646\u064f\u0639\u0644\u0645 \u0645\u062f\u064a\u0631 \u062d\u0633\u0627\u0628\u0643.")}</p>
          </div>
          <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-ink text-white text-[13px] font-bold ring-1 ring-brand-500/30 hover:bg-black transition-colors shrink-0 text-center" onClick={() => { openTicketWizard(); }}>{t("\u0637\u0644\u0628 \u062c\u062f\u064a\u062f")}</button>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
          <button className="group text-right rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 transition-all" onClick={() => { openTicketWizard('replacement'); }}>
            <div className="text-[13px] font-extrabold text-slate-800 group-hover:text-brand-700">{t("\u0627\u0633\u062a\u0628\u062f\u0627\u0644 \u0639\u0627\u0645\u0644")}</div>
            <div className="text-[11px] text-slate-400 mt-1">{t("\u0623\u062f\u0621 \u0636\u0639\u064a\u0641 \u0623\u0648 \u063a\u064a\u0627\u0628 \u0645\u062a\u0643\u0631\u0631")}</div>
          </button>
          <button className="group text-right rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100 hover:ring-amber-300 transition-all" onClick={() => { openTicketWizard('complaint'); }}>
            <div className="text-[13px] font-extrabold text-slate-800 group-hover:text-amber-700">{t("\u0628\u0644\u0627\u063a / \u0634\u0643\u0648\u0649")}</div>
            <div className="text-[11px] text-slate-400 mt-1">{t("\u0633\u0644\u0648\u0643 \u0623\u0648 \u0645\u062e\u0627\u0644\u0641\u0629 \u0623\u0648 \u062a\u0623\u062e\u064a\u0631")}</div>
          </button>
          <button className="group text-right rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100 hover:ring-violet-300 transition-all" onClick={() => { openTicketWizard('attendance'); }}>
            <div className="text-[13px] font-extrabold text-slate-800">{t("\u0645\u0634\u0643\u0644\u0629 \u062d\u0636\u0648\u0631")}</div>
            <div className="text-[11px] text-slate-400 mt-1">{t("\u063a\u064a\u0627\u0628 \u0623\u0648 \u062a\u0623\u062e\u0651\u0631 \u0639\u0646 \u0627\u0644\u0645\u0648\u0642\u0639")}</div>
          </button>
          <button className="group text-right rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100 hover:ring-emerald-300 transition-all" onClick={() => { openDrill('requestLabor'); }}>
            <div className="text-[13px] font-extrabold text-slate-800 group-hover:text-emerald-700">{t("\u0637\u0644\u0628 \u0639\u0645\u0627\u0644\u0629 \u0625\u0636\u0627\u0641\u064a\u0629")}</div>
            <div className="text-[11px] text-slate-400 mt-1">{t("\u062a\u0648\u0633\u0639\u0629 \u0627\u0644\u0641\u0631\u064a\u0642 \u0639\u0644\u0649 \u0639\u0642\u062f\u0643")}</div>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button className={clsx("chip whitespace-nowrap shrink-0", {'active':ticketFilter==='all'})} onClick={() => { setProp("ticketFilter", 'all'); }}>{t("\u0627\u0644\u0643\u0644")} <span className="opacity-60">{t(tickets.length)}</span></button>
            <button className={clsx("chip whitespace-nowrap shrink-0", {'active':ticketFilter==='open'})} onClick={() => { setProp("ticketFilter", 'open'); }}>{t("\u0642\u064a\u062f \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629")}</button>
            <button className={clsx("chip whitespace-nowrap shrink-0", {'active':ticketFilter==='inprogress'})} onClick={() => { setProp("ticketFilter", 'inprogress'); }}>{t("\u0642\u064a\u062f \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629")}</button>
            <button className={clsx("chip whitespace-nowrap shrink-0", {'active':ticketFilter==='resolved'})} onClick={() => { setProp("ticketFilter", 'resolved'); }}>{t("\u062a\u0645 \u0627\u0644\u062d\u0644")}</button>
          </div>
          <div className="text-[12px] text-slate-400 shrink-0">{t("SLA \u0627\u0644\u0642\u064a\u0627\u0633\u064a:")} <b className="text-slate-600">{t("24 \u0633\u0627\u0639\u0629")}</b> {t("\u0644\u0644\u0631\u062f \u0627\u0644\u0623\u0648\u0644")}</div>
        </div>

        <div className="space-y-3">
          {(filteredTickets || []).map((item, index) => (<React.Fragment key={item.id}>
            <button className="w-full text-right rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 transition-all" onClick={() => { openDrill('ticket', item); }}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">{t(item.typeLabel || 'دعم')}</span>
                    <span className={clsx("text-[11px] font-bold px-2 py-0.5 rounded-lg", item.priority==='عالية'?'text-rose-700 bg-rose-50':item.priority==='متوسطة'?'text-amber-700 bg-amber-50':'text-slate-500 bg-slate-100')}>{t(item.priority)}</span>
                  </div>
                  <div className="font-extrabold text-slate-800 text-[14px] sm:text-[15px]">{t(item.title)}</div>
                  <div className="text-[12px] text-slate-400 mt-1 font-mono" dir="ltr">{t(item.id+' · '+item.crmCase)}</div>
                  <div className="text-[12px] text-slate-500 mt-0.5">{t('العقد '+item.contract+' · فُتحت '+item.opened)}</div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start shrink-0 pt-2.5 sm:pt-0 border-t sm:border-t-0 border-slate-100 w-full sm:w-auto">
                  <span className={clsx("inline-flex text-[11px] font-bold px-2.5 py-1 rounded-full", ticketMap[item.status].c)}>{t(ticketMap[item.status].item)}</span>
                  <div className="w-24 sm:w-28 sm:mt-3"><div className="flex justify-between text-[10px] text-slate-400 mb-1"><span>{t(item.step+'/4')}</span><span>{t(item.pct+'%')}</span></div><div className="h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className={clsx("h-full rounded-full", ticketMap[item.status].bar)} style={parseStyle('width:'+item.pct+'%')}></div></div></div>
                </div>
              </div>
            </button>
          </React.Fragment>))}
          {Boolean(filteredTickets.length===0) && (<div className="rounded-2xl bg-white ring-1 ring-slate-100 p-10 text-center">
            <div className="text-slate-400 text-[14px] mb-3">{t("\u0644\u0627 \u062a\u0630\u0627\u0643\u0631 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u062a\u0635\u0646\u064a\u0641.")}</div>
            <button className="px-4 py-2 rounded-xl bg-brand-500 text-white text-[13px] font-bold" onClick={() => { openTicketWizard(); }}>{t("\u0627\u0641\u062a\u062d \u0637\u0644\u0628 \u062c\u062f\u064a\u062f")}</button>
          </div>)}
        </div>
      </section>
  );
}
