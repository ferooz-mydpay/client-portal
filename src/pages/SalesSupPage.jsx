import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function SalesSupPage() {

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
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800">{t("\u0644\u0648\u062d\u0629 \u0645\u0634\u0631\u0641 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a")}</h1>
          <p className="text-[13px] sm:text-[14px] text-slate-400 mt-1">{t("\u0645\u0631\u0627\u062c\u0639\u0629 \u0639\u0631\u0648\u0636 \u0627\u0644\u0623\u062e\u0635\u0627\u0626\u064a\u064a\u0646 \u00b7 \u0627\u0639\u062a\u0645\u0627\u062f \u0636\u0645\u0646 \u0633\u0642\u0641 \u0627\u0644\u062e\u0635\u0645 \u00b7 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u0648\u062c\u064a\u0647 \u2014 \u0628\u062f\u0648\u0646 \u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u064a\u062f\u0627\u0646\u064a\u0629 \u0623\u0648 \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064a.")}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
          <div className="rounded-2xl bg-white p-3.5 sm:p-5 shadow-card ring-1 ring-slate-100">
            <div className="text-[11px] sm:text-[12px] text-slate-400 font-bold">{t("\u0639\u0631\u0648\u0636 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0645\u0631\u0627\u062c\u0639\u062a\u0643")}</div>
            <div className="text-xl sm:text-3xl font-extrabold text-amber-600 mt-1">{t(supQuoteQueue.length)}</div>
          </div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-5 shadow-card ring-1 ring-slate-100">
            <div className="text-[11px] sm:text-[12px] text-slate-400 font-bold">{t("\u0635\u0641\u0642\u0627\u062a \u062a\u062d\u062a \u0627\u0644\u062a\u0641\u0627\u0648\u0636")}</div>
            <div className="text-xl sm:text-3xl font-extrabold text-violet-600 mt-1">{t(salesOpen.length)}</div>
          </div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-5 shadow-card ring-1 ring-slate-100">
            <div className="text-[11px] sm:text-[12px] text-slate-400 font-bold">{t("\u0633\u0642\u0641 \u0627\u0644\u062e\u0635\u0645 \u0644\u062f\u064a\u0643")}</div>
            <div className="text-xl sm:text-3xl font-extrabold text-brand-600 mt-1">{t("10\u066a")}</div>
          </div>
          <div className="rounded-2xl bg-white p-3.5 sm:p-5 shadow-card ring-1 ring-slate-100">
            <div className="text-[11px] sm:text-[12px] text-slate-400 font-bold">{t("\u0645\u062d\u0627\u0644\u0629 \u0644\u0644\u0645\u062f\u064a\u0631")}</div>
            <div className="text-xl sm:text-3xl font-extrabold text-indigo-600 mt-1">{t(mgrQuoteQueue.length)}</div>
          </div>
        </div>

        <div className="rounded-2xl bg-amber-50 ring-1 ring-amber-100 p-4 mb-5 text-[13px] text-amber-900"> {t("\u0635\u0644\u0627\u062d\u064a\u0627\u062a\u0643: \u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u062a\u0633\u0639\u064a\u0631 \u0625\u0630\u0627 \u0627\u0644\u062e\u0635\u0645 \u2264 10\u066a. \u0623\u064a \u062e\u0635\u0645 \u0623\u0639\u0644\u0649 \u064a\u064f\u0635\u0639\u0651\u064e\u062f \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b \u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a. \u0644\u0627 \u062a\u0645\u0644\u0643 \u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0639\u0645\u064a\u0644 \u0644\u0644\u062a\u0634\u063a\u064a\u0644.")} </div>

        <h2 className="text-lg font-extrabold text-slate-800 mb-3">{t("\u0637\u0627\u0628\u0648\u0631 \u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0639\u0631\u0648\u0636")}</h2>
        <div className="space-y-3 mb-8">
          {(supQuoteQueue || []).map((l, index) => (<React.Fragment key={l.id}>
            <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-card ring-1 ring-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <b className="text-slate-800">{t(l.client)}</b>
                  <div className="text-[12px] text-slate-400 font-mono mt-0.5" dir="ltr">{t(l.ref+(l.quote?' · '+l.quote.no:''))}</div>
                  <div className="text-[13px] text-slate-500 mt-1">{t(l.need)}</div>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="text-right sm:text-left">
                    <div className="text-[11px] text-slate-400">{t("\u0642\u064a\u0645\u0629 \u0627\u0644\u0639\u0631\u0636")}</div>
                    <div className="font-extrabold text-slate-800">{t(l.quote?l.quote.amount.toLocaleString()+' ر.س':'—')}</div>
                  </div>
                  <div className={clsx("text-[12px] font-bold sm:mt-1", (l.quote&&l.quote.discountPct>10)?'text-rose-600':'text-emerald-600')}>{t('خصم '+(l.quote?l.quote.discountPct:0)+'%')}</div>
                </div>
              </div>

              {Boolean(l.quote && l.quote.lines && l.quote.lines.length) && (<React.Fragment>
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
                      {(l.quote.lines || []).map((row,ri, index) => (<React.Fragment key={ri}>
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
                      <td className="px-2 py-2 text-left font-extrabold text-brand-700 tabular-nums">{t((Number(l.quote.amount)||0).toLocaleString()+' ر.س')}</td>
                    </tr></tfoot>
                  </table>
                </div>
              </React.Fragment>)}
              <textarea className="field mt-3" value={actionNote ?? ""} onChange={(e) => setProp("actionNote", e.target.value)} rows="2" placeholder={t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f / \u0627\u0644\u0631\u0641\u0636")}></textarea>
              <div className="flex flex-wrap gap-2 mt-3">
                <button className="flex-1 sm:flex-none text-center px-3 py-2 rounded-xl bg-emerald-600 text-white text-[12px] font-bold" onClick={() => { supApproveQuote(l); }} type="button">{t("\u0627\u0639\u062a\u0645\u0627\u062f \u0636\u0645\u0646 \u0627\u0644\u0633\u0642\u0641")}</button>
                <button className="flex-1 sm:flex-none text-center px-3 py-2 rounded-xl bg-amber-50 text-amber-800 text-[12px] font-bold" onClick={() => { supReturnQuote(l); }} type="button">{t("\u0625\u0639\u0627\u062f\u0629 \u0644\u0644\u0623\u062e\u0635\u0627\u0626\u064a \u0644\u0644\u062a\u0639\u062f\u064a\u0644")}</button>
                <button className="flex-1 sm:flex-none text-center px-3 py-2 rounded-xl bg-indigo-50 text-indigo-700 text-[12px] font-bold" onClick={() => { supEscalateQuote(l); }} type="button">{t("\u062a\u0635\u0639\u064a\u062f \u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a")}</button>
                <button className="flex-1 sm:flex-none text-center px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-[12px] font-bold" onClick={() => { openDrill('lead', l); }} type="button">{t("\u0645\u0644\u0641 \u0627\u0644\u0635\u0641\u0642\u0629")}</button>
              </div>
            </div>
          </React.Fragment>))}
          {Boolean(!supQuoteQueue.length) && (<div className="rounded-2xl bg-white p-8 text-center text-slate-400 text-sm ring-1 ring-slate-100">{t("\u0644\u0627 \u0639\u0631\u0648\u0636 \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0645\u0631\u0627\u062c\u0639\u062a\u0643 \u062d\u0627\u0644\u064a\u0627\u064b")}</div>)}
        </div>

        <h2 className="text-lg font-extrabold text-slate-800 mb-3">{t("\u0625\u0639\u0627\u062f\u0629 \u062a\u0648\u062c\u064a\u0647 \u0627\u0644\u0635\u0641\u0642\u0627\u062a")}</h2>
        <div className="rounded-2xl bg-white shadow-card ring-1 ring-slate-100 overflow-hidden">
          <div className="overflow-x-auto"><table className="w-full min-w-[650px] text-right text-[13px]">
            <thead><tr className="text-slate-400 border-b border-slate-100 bg-slate-50/50">
              <th className="font-medium px-4 py-3">{t("\u0627\u0644\u0639\u0645\u064a\u0644")}</th><th className="font-medium px-4 py-3">{t("\u0627\u0644\u0645\u0631\u062d\u0644\u0629")}</th><th className="font-medium px-4 py-3">{t("\u0627\u0644\u0642\u064a\u0645\u0629")}</th><th className="font-medium px-4 py-3 text-left">{t("\u0625\u062c\u0631\u0627\u0621")}</th>
            </tr></thead>
            <tbody className="divide-y divide-slate-50">
              {(salesLeads.filter(x=>x.stage!=='handed') || []).map((l, index) => (<React.Fragment key={'sup-'+l.id}>
                <tr>
                  <td className="px-4 py-3"><b>{t(l.client)}</b><div className="text-[11px] text-slate-400">{t(l.ref)}</div></td>
                  <td className="px-4 py-3"><span className={clsx("text-[11px] font-bold px-2 py-0.5 rounded-full", leadMap[l.stage].c)}>{t(leadMap[l.stage].t)}</span></td>
                  <td className="px-4 py-3 tabular-nums">{t(l.value?l.value.toLocaleString():'—')}</td>
                  <td className="px-4 py-3 text-left">
                    <button className="text-[12px] font-bold text-brand-700 bg-brand-50 px-3 py-1.5 rounded-lg whitespace-nowrap" onClick={() => { supReassignLead(l); }} type="button">{t("\u0625\u0639\u0627\u062f\u0629 \u062a\u0648\u062c\u064a\u0647 / \u0645\u062a\u0627\u0628\u0639\u0629")}</button>
                  </td>
                </tr>
              </React.Fragment>))}
            </tbody>
          </table></div>
        </div>
      </section>
  );
}
