import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function AdminPage() {

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
        <div className="mb-6"><h1 className="text-2xl font-extrabold text-slate-800">{t("\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u0635\u0629")}</h1><p className="text-[14px] text-slate-400 mt-1">{t("\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0648\u0627\u0644\u0625\u0634\u0631\u0627\u0641 \u0639\u0644\u0649 \u0627\u0644\u0639\u0642\u0648\u062f.")}</p></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-slate-800">{t(clients.length)}</div><div className="text-[12px] text-slate-400">{t("\u0627\u0644\u0639\u0645\u0644\u0627\u0621")}</div></div>
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-brand-600">112</div><div className="text-[12px] text-slate-400">{t("\u0627\u0644\u0639\u0642\u0648\u062f \u0627\u0644\u0646\u0634\u0637\u0629")}</div></div>
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-amber-600">9</div><div className="text-[12px] text-slate-400">{t("\u0637\u0644\u0628\u0627\u062a \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0625\u062c\u0631\u0627\u0621")}</div></div>
          <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-100"><div className="text-2xl font-extrabold text-emerald-600">23</div><div className="text-[12px] text-slate-400">{t("\u0645\u0633\u062a\u062e\u062f\u0645\u0648 \u0627\u0644\u0645\u0646\u0635\u0629")}</div></div>
        </div>
        <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 overflow-hidden"><div className="overflow-x-auto"><table className="w-full text-right text-[13px]">
          <thead><tr className="text-slate-400 border-b border-slate-100 bg-slate-50/50"><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0639\u0645\u064a\u0644")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0645\u0639\u0631\u0651\u0641")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0639\u0642\u0648\u062f")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u062d\u0627\u0644\u0629")}</th><th className="font-medium px-5 py-3.5 text-left">{t("\u0625\u062c\u0631\u0627\u0621")}</th></tr></thead>
          <tbody className="divide-y divide-slate-50">
            {(clients || []).map((cl, index) => (<React.Fragment key={cl.id}><tr className="hover:bg-slate-50/60 transition-colors">
              <td className="px-5 py-4"><div className="flex items-center gap-2.5"><span className="grid place-items-center h-8 w-8 rounded-lg bg-brand-50 text-brand-700 font-bold text-[12px]">{t(cl.name[0])}</span><b className="text-slate-700">{t(cl.name)}</b></div></td>
              <td className="px-5 py-4 font-mono text-slate-500" dir="ltr">{t(cl.id)}</td><td className="px-5 py-4 text-slate-600">{t(cl.contracts)}</td>
              <td className="px-5 py-4"><span className={clsx("inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full", clientMap[cl.status].c)}>{t(clientMap[cl.status].t)}</span></td>
              <td className="px-5 py-4 text-left"><button className="text-brand-600 hover:text-brand-800 font-bold hover:bg-brand-50 px-2.5 py-1.5 rounded-lg transition-colors" onClick={() => { openDrill('client', cl); }}>{t("\u0625\u062f\u0627\u0631\u0629")}</button></td>
            </tr></React.Fragment>))}
          </tbody></table></div></div>
      </section>
  );
}
