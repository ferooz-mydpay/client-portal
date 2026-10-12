import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function DeskPage() {

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
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800">{t("\u0635\u0646\u062f\u0648\u0642 \u0627\u0644\u0639\u0645\u0644")}</h1>
            <p className="text-[14px] text-slate-400 mt-1">{t("\u0643\u0644 \u0625\u062c\u0631\u0627\u0621 \u064a\u0641\u062a\u062d \u0646\u0627\u0641\u0630\u0629 \u062a\u0633\u062c\u064a\u0644 \u0631\u062f\u060c \u062b\u0645 \u064a\u0638\u0647\u0631 \u0627\u0644\u0645\u0648\u0639\u062f \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0648\u0627\u0644\u0645\u0633\u0627\u0631 \u0648\u0627\u0644\u062d\u0627\u0644\u0629 \u2014 \u062f\u0648\u0646 \u0643\u0634\u0641 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062a\u0635\u0639\u064a\u062f \u0628\u0639\u062f \u0627\u0644\u0625\u0631\u0633\u0627\u0644.")}</p>
          </div>
          <div className="text-[12px] font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">{t(rolePathLabel)}</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-6">
          <div className="rounded-2xl bg-white p-3 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-amber-600">{t(myWork.filter(w=>w.status==='pending').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400">{t("معلّق لديّ")}</div></div>
          <div className="rounded-2xl bg-white p-3 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-brand-600">{t(myWork.filter(w=>w.status==='replied').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400">{t("تم الرد")}</div></div>
          <div className="rounded-2xl bg-white p-3 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-emerald-600">{t(myWork.filter(w=>w.status==='approved').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400">{t("موافقة")}</div></div>
          <div className="rounded-2xl bg-white p-3 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-rose-600">{t(myWork.filter(w=>w.status==='escalated').length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400">{t("تم التصعيد")}</div></div>
          <div className="col-span-2 sm:col-span-1 rounded-2xl bg-white p-3 sm:p-4 shadow-card ring-1 ring-slate-100"><div className="text-xl sm:text-2xl font-extrabold text-slate-700">{t(myWork.length)}</div><div className="text-[11px] sm:text-[12px] text-slate-400">{t("إجمالي البنود")}</div></div>
        </div>
        <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 overflow-hidden">
          <div className="overflow-x-auto"><table className="w-full text-right text-[13px] min-w-[620px]">
            <thead><tr className="text-slate-400 border-b border-slate-100 bg-slate-50/50">
              <th className="font-medium px-4 py-3">{t("البند")}</th>
              <th className="font-medium px-4 py-3">{t("من ← إلى")}</th>
              <th className="font-medium px-4 py-3">{t("الموعد النهائي")}</th>
              <th className="font-medium px-4 py-3">{t("الحالة")}</th>
              <th className="font-medium px-4 py-3 text-left">{t("إجراء")}</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-50">
              {(myWork || []).map((w, index) => (<React.Fragment key={w.id}>
                <tr className="hover:bg-slate-50/60">
                  <td className="px-4 py-3"><b className="text-slate-800">{t(w.title)}</b><div className="text-[11px] text-slate-400 font-mono" dir="ltr">{t(w.ref)}</div></td>
                  <td className="px-4 py-3 text-[12px] text-slate-600"><span>{t(labelOf(w.fromRole))}</span> → <span>{t(labelOf(w.toRole))}</span></td>
                  <td className="px-4 py-3"><span className={clsx("text-[12px] font-bold", w.deadline?'text-amber-700':'text-slate-400')}>{t(w.deadline||'—')}</span></td>
                  <td className="px-4 py-3"><span className={clsx("inline-flex text-[11px] font-bold px-2.5 py-1 rounded-full", workStatusMap[w.status].c)}>{t(workStatusMap[w.status].t)}</span></td>
                  <td className="px-4 py-3 text-left">
                    {Boolean(w.toRole===role && (w.status==='pending'||w.status==='onhold')) && (<div className="flex flex-wrap justify-end gap-1">
                      <button className="text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700" onClick={() => { openAction(w,'reply'); }} type="button">{t("\u0631\u062f")}</button>
                      <button className="text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white" onClick={() => { openAction(w,'approve'); }} type="button">{t("\u0645\u0648\u0627\u0641\u0642\u0629")}</button>
                      <button className="text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-rose-500 hover:bg-rose-600 text-white" onClick={() => { openAction(w,'reject'); }} type="button">{t("\u0631\u0641\u0636")}</button>
                      <button className="text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800" onClick={() => { openAction(w,'hold'); }} type="button">{t("\u062a\u0639\u0644\u064a\u0642")}</button>
                      {Boolean(w.status!=='escalated') && (<button className="text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-ink hover:bg-black text-white" onClick={() => { openAction(w,'escalate'); }} type="button">{t("\u062a\u0635\u0639\u064a\u062f")}</button>)}
                    </div>)}
                    {Boolean(w.status==='escalated') && (<span className="text-[11px] font-bold text-rose-600">{t("\u062a\u0645 \u0627\u0644\u062a\u0635\u0639\u064a\u062f")}</span>)}
                    {Boolean(w.toRole!==role && w.status!=='escalated') && (<span className="text-[11px] text-slate-400">{t("\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0637\u0631\u0641 \u0627\u0644\u0622\u062e\u0631")}</span>)}
                  </td>
                </tr>
              </React.Fragment>))}
              {Boolean(!myWork.length) && (<tr><td className="px-4 py-10 text-center text-slate-400" colSpan="5">{t("\u0644\u0627 \u0628\u0646\u0648\u062f \u0641\u064a \u0635\u0646\u062f\u0648\u0642\u0643 \u2014 \u0634\u063a\u0651\u0644 \u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u0623\u0648 \u0623\u0646\u0634\u0626 \u062a\u0630\u0643\u0631\u0629 \u0645\u0646 \u0627\u0644\u0639\u0645\u064a\u0644.")}</td></tr>)}
            </tbody>
          </table></div>
        </div>
      </section>
  );
}
