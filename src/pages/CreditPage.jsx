import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function CreditPage() {

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
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800">{t("\u062a\u062f\u0642\u064a\u0642 \u0645\u0631\u0641\u0642\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u0621")}</h1>
          <p className="text-[13px] sm:text-[14px] text-slate-400 mt-1">{t("\u0645\u0647\u0645\u0629 \u0645\u0648\u0638\u0641 \u0627\u0644\u0627\u0626\u062a\u0645\u0627\u0646 \u0645\u0633\u062a\u0642\u0644\u0629: \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0645\u0631\u0641\u0642\u0627\u062a \u0643\u0644 \u0637\u0644\u0628 \u0639\u0644\u0649 \u062d\u062f\u0629\u060c \u062b\u0645 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0623\u0648 \u0627\u0644\u0631\u0641\u0636 \u0623\u0648 \u0627\u0644\u062a\u0639\u0644\u064a\u0642 \u0644\u0627\u0633\u062a\u0643\u0645\u0627\u0644 \u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u2014 \u0648\u0627\u0644\u062a\u0631\u062d\u064a\u0644 \u0644\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0627\u0644\u064a \u0644\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u0646\u0647\u0627\u0626\u064a.")}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-amber-600">{t(creditRequests.filter(r=>r.status==='pending').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u062f\u0642\u064a\u0642")}</div></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-violet-600">{t(creditRequests.filter(r=>r.status==='onhold').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0645\u0639\u0644\u0651\u0642 \u0644\u0627\u0633\u062a\u0643\u0645\u0627\u0644")}</div></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-brand-600">{t(creditRequests.filter(r=>r.status==='audit_ok').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0644\u062f\u0649 \u0627\u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0627\u0644\u064a")}</div></div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-emerald-600">{t(creditRequests.filter(r=>r.status==='approved').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400 mt-0.5">{t("\u0645\u0641\u0639\u0651\u0644\u0629")}</div></div>
        </div>

        <div className="flex items-center gap-2 mb-4 overflow-x-auto no-scrollbar py-1">
          {([{id:'pending',t:'للتدقيق'},{id:'onhold',t:'معلّق'},{id:'audit_ok',t:'عند المدير'},{id:'approved',t:'معتمد'},{id:'rejected',t:'مرفوض'},{id:'all',t:'الكل'}] || []).map((f, index) => (<React.Fragment key={f.id}>
            <button className={clsx("chip whitespace-nowrap shrink-0", creditFilter===f.id?'active':'')} onClick={() => { setProp("creditFilter", f.id); }} type="button">{t(f.t)}</button>
          </React.Fragment>))}
        </div>

        <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 overflow-hidden">
          <div className="overflow-x-auto"><table className="w-full min-w-[650px] text-right text-[13px]">
            <thead><tr className="text-slate-400 border-b border-slate-100 bg-slate-50/50">
              <th className="font-medium px-4 py-3">{t("\u0627\u0644\u0637\u0644\u0628 / \u0627\u0644\u0639\u0645\u064a\u0644")}</th>
              <th className="font-medium px-4 py-3">{t("\u0627\u0644\u0645\u0641\u0648\u0651\u0636")}</th>
              <th className="font-medium px-4 py-3">{t("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062a")}</th>
              <th className="font-medium px-4 py-3">{t("\u0627\u0644\u062d\u0627\u0644\u0629")}</th>
              <th className="font-medium px-4 py-3 text-left">{t("\u0625\u062c\u0631\u0627\u0621")}</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-50">
              {(filteredCreditRequests || []).map((r, index) => (<React.Fragment key={r.id}>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3">
                    <b className="text-slate-800">{t(r.client)}</b>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5" dir="ltr">{t(r.ref+' · CR '+r.cr)}</div>
                    <div className="text-[12px] text-slate-500 mt-0.5">{t(r.need)}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-slate-700">{t(r.authName)}</div>
                    <div className="text-[11px] text-slate-400" dir="ltr">{t(r.authEmail)}</div>
                    <div className="text-[11px] text-slate-400" dir="ltr">{t(r.authPhone)}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-[12px] font-bold text-slate-700">{t(creditAttachStats(r).verified+' / '+creditAttachStats(r).required+' إلزامي')}</div>
                    <div className="text-[11px] text-slate-400">{t(creditAttachStats(r).missing+' ناقص · '+creditAttachStats(r).optional+' اختياري مرفوع')}</div>
                  </td>
                  <td className="px-4 py-3"><span className={clsx("inline-flex text-[11px] font-bold px-2.5 py-1 rounded-full", creditReqMap[r.status].c)}>{t(creditReqMap[r.status].t)}</span></td>
                  <td className="px-4 py-3 text-left">
                    <button className="text-brand-600 hover:text-brand-800 font-bold hover:bg-brand-50 px-2.5 py-1.5 rounded-lg text-[12px]" onClick={() => { openCreditCase(r); }} type="button">{t("\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0637\u0644\u0628")}</button>
                  </td>
                </tr>
              </React.Fragment>))}
              {Boolean(!filteredCreditRequests.length) && (<tr><td className="px-4 py-10 text-center text-slate-400" colSpan="5">{t("\u0644\u0627 \u0637\u0644\u0628\u0627\u062a \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u062a\u0635\u0641\u064a\u0629.")}</td></tr>)}
            </tbody>
          </table></div>
        </div>

        {Boolean(role==='fin_mgr' && creditMgrQueue.length) && (<div className="mt-6 rounded-2xl bg-brand-50 ring-1 ring-brand-100 p-4 text-[13px] text-brand-900"> {t("\u064a\u0648\u062c\u062f")} <b>{t(creditMgrQueue.length)}</b> {t("\u0645\u0644\u0641/\u0645\u0644\u0641\u0627\u062a \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0639\u062a\u0645\u0627\u062f\u0643 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0643\u062a \u0645\u062f\u064a\u0631 \u0645\u0627\u0644\u064a\u0629 \u2014 \u0627\u0641\u062a\u062d \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0645\u0646 \u0627\u0644\u062c\u062f\u0648\u0644 \u0623\u0648 \u0645\u0646 \u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0627\u0644\u064a\u0629.")} </div>)}
      </section>
  );
}
