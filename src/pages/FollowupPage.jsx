import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function FollowupPage() {

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
        <div className="mb-6"><h1 className="text-2xl font-extrabold text-slate-800">{t("\u0645\u0631\u0643\u0632 \u0627\u0644\u062a\u0635\u0639\u064a\u062f \u0648\u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629")}</h1><p className="text-[14px] text-slate-400 mt-1">{t("\u0627\u0644\u062a\u0630\u0627\u0643\u0631 \u0627\u0644\u062a\u064a \u062a\u062c\u0627\u0648\u0632\u062a \u0645\u0647\u0644\u0629 \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 (SLA) \u2014 \u062a\u062f\u062e\u0651\u0644 \u0641\u0648\u0631\u064a \u0644\u0636\u0645\u0627\u0646 \u0627\u0633\u062a\u0645\u0631\u0627\u0631\u064a\u0629 \u0627\u0644\u062e\u062f\u0645\u0629.")}</p></div>
        <div className="rounded-2xl bg-rose-50 ring-1 ring-rose-100 p-4 text-[13px] text-rose-800 mb-6 flex items-start gap-3"><svg className="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4M12 17h.01" /></svg><div>{t("\u064a\u0648\u062c\u062f")} <b>{t(escalations.length)}</b> {t("\u062a\u0630\u0627\u0643\u0631 \u062a\u062c\u0627\u0648\u0632\u062a \u0645\u0647\u0644\u0629 \u0627\u0644\u0640 SLA. \"\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0639\u064a\u064a\u0646\" \u062a\u0646\u0642\u0644\u0647\u0627 \u0644\u0645\u062f\u064a\u0631 \u062d\u0633\u0627\u0628 \u0622\u062e\u0631\u060c \u0648\"\u062a\u062f\u062e\u0651\u0644 \u0645\u0628\u0627\u0634\u0631\" \u064a\u0636\u0639\u0647\u0627 \u062a\u062d\u062a \u0645\u0633\u0624\u0648\u0644\u064a\u062a\u0643 \u0641\u0648\u0631\u0627\u064b.")}</div></div>
        <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 overflow-hidden"><div className="overflow-x-auto"><table className="w-full text-right text-[13px]">
          <thead><tr className="text-slate-400 border-b border-slate-100 bg-slate-50/50"><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0639\u0645\u064a\u0644 / \u0627\u0644\u0645\u0631\u062c\u0639")}</th><th className="font-medium px-5 py-3.5">{t("\u0645\u062f\u064a\u0631 \u0627\u0644\u062d\u0633\u0627\u0628")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u0646\u0648\u0639")}</th><th className="font-medium px-5 py-3.5">{t("\u0627\u0644\u062a\u0623\u062e\u0651\u0631")}</th><th className="font-medium px-5 py-3.5 text-left">{t("\u0625\u062c\u0631\u0627\u0621")}</th></tr></thead>
          <tbody className="divide-y divide-slate-50">
            {(escalations || []).map((e, index) => (<React.Fragment key={e.id}><tr className="hover:bg-slate-50/60 transition-colors">
              <td className="px-5 py-4"><b className="text-slate-700">{t(e.client)}</b><div className="text-[11px] text-slate-400 font-mono" dir="ltr">{t(e.ref)}</div></td>
              <td className="px-5 py-4 text-slate-600">{t(e.am)}</td><td className="px-5 py-4 text-slate-500">{t(e.type)}</td>
              <td className="px-5 py-4"><span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full">{t("\u0645\u062a\u0623\u062e\u0631")} <span>{t(e.overdue)}</span></span></td>
              <td className="px-5 py-4 text-left"><div className="flex items-center justify-end gap-1.5">
                <button className="text-white bg-rose-500 hover:bg-rose-600 font-bold px-3 py-1.5 rounded-lg transition-colors" onClick={() => { openActionFromEsc(e,'escalate'); }} type="button">{t("\u062a\u0635\u0639\u064a\u062f")}</button>
                <button className="text-slate-600 bg-slate-100 hover:bg-slate-200 font-bold px-3 py-1.5 rounded-lg transition-colors" onClick={() => { openActionFromEsc(e,'reply'); }} type="button">{t("\u062a\u0633\u062c\u064a\u0644 \u0631\u062f")}</button>
                <button className="text-slate-500 hover:text-slate-700 font-bold px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => { intervene(e); }} type="button">{t("\u062a\u062f\u062e\u0651\u0644 \u0645\u0628\u0627\u0634\u0631")}</button>
              </div></td>
            </tr></React.Fragment>))}
            {Boolean(escalations.length===0) && (<React.Fragment><tr><td className="px-5 py-10 text-center text-slate-400" colSpan="5">{t("\u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u0630\u0627\u0643\u0631 \u0645\u062a\u062c\u0627\u0648\u0632\u0629 \u0644\u0644\u0645\u0647\u0644\u0629 \u2014 \u0639\u0645\u0644 \u0631\u0627\u0626\u0639 \ud83d\udc4f")}</td></tr></React.Fragment>)}
          </tbody></table></div></div>
      </section>
  );
}
