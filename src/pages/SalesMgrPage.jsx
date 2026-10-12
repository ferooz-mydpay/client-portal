import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function SalesMgrPage() {

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
          <h1 className="text-2xl font-extrabold text-slate-800">{t("\u0644\u0648\u062d\u0629 \u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a")}</h1>
          <p className="text-[14px] text-slate-400 mt-1">{t("\u0627\u0639\u062a\u0645\u0627\u062f \u0646\u0647\u0627\u0626\u064a \u0644\u0644\u0639\u0631\u0648\u0636 \u0648\u0627\u0644\u062e\u0635\u0648\u0645\u0627\u062a \u00b7 \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0644\u0644\u062a\u0634\u063a\u064a\u0644 \u00b7 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641 \u0648\u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062a \u2014 \u0645\u0646\u0641\u0635\u0644\u0629 \u0639\u0646 \u0645\u064a\u062f\u0627\u0646 \u0627\u0644\u0623\u062e\u0635\u0627\u0626\u064a.")}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
            <div className="text-[12px] text-slate-400 font-bold">{t("\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0639\u062a\u0645\u0627\u062f\u0643")}</div>
            <div className="text-3xl font-extrabold text-indigo-600 mt-1">{t(mgrQuoteQueue.length)}</div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
            <div className="text-[12px] text-slate-400 font-bold">{t("\u062c\u0627\u0647\u0632 \u0644\u0644\u062a\u0633\u0644\u064a\u0645")}</div>
            <div className="text-3xl font-extrabold text-emerald-600 mt-1">{t(salesLeads.filter(l=>l.stage==='signed'||l.stage==='finance'||l.stage==='am').length)}</div>
          </div>
          <button className="text-right rounded-2xl bg-ink p-5 shadow-card text-white hover:-translate-y-0.5 transition-all" onClick={() => { openPage('admin'); }} type="button">
            <div className="text-[12px] text-white/60 font-bold">{t("\u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641 \u0627\u0644\u0634\u0647\u0631\u064a")}</div>
            <div className="text-2xl font-extrabold mt-1">{t(salesPct+'٪')}</div>
            <div className="text-[11px] text-brand-300 mt-1">{t("\u0639\u0645\u0648\u0644\u0627\u062a \u0648\u0645\u0633\u062a\u0647\u062f\u0641 \u2190")}</div>
          </button>
          <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
            <div className="text-[12px] text-slate-400 font-bold">{t("\u0645\u062d\u0642\u0651\u0642")}</div>
            <div className="text-2xl font-extrabold text-slate-800 mt-1 tabular-nums">{t(salesAchieved.toLocaleString())}</div>
          </div>
        </div>

        <div className="rounded-2xl bg-indigo-50 ring-1 ring-indigo-100 p-4 mb-5 text-[13px] text-indigo-900"> {t("\u0635\u0644\u0627\u062d\u064a\u0627\u062a\u0643: \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u00b7 \u062e\u0635\u0645 \u062e\u0627\u0631\u062c \u0627\u0644\u0633\u0642\u0641 \u00b7 \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u062d\u0633\u0627\u0628/\u0627\u0644\u062a\u0634\u063a\u064a\u0644. \u0644\u0627 \u062a\u062f\u062e\u0644 \u0632\u064a\u0627\u0631\u0627\u062a \u0645\u064a\u062f\u0627\u0646\u064a\u0629 \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0644\u0648\u062d\u0629.")} </div>

        <h2 className="text-lg font-extrabold text-slate-800 mb-3">{t("\u0627\u0639\u062a\u0645\u0627\u062f \u0639\u0631\u0648\u0636 / \u062e\u0635\u0648\u0645\u0627\u062a \u0645\u0635\u0639\u0651\u062f\u0629")}</h2>
        <div className="space-y-3 mb-8">
          {(mgrQuoteQueue || []).map((l, index) => (<React.Fragment key={'mgr-'+l.id}>
            <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100">
              <div className="flex flex-wrap justify-between gap-3">
                <div>
                  <b className="text-slate-800">{t(l.client)}</b>
                  <div className="text-[12px] text-slate-400">{t(l.ref+(l.quote?' · '+l.quote.no:''))}</div>
                  {Boolean(l.quote && l.quote.discountPct>10) && (<div className="text-[12px] text-rose-600 font-bold mt-1">{t('خصم خارج السقف: '+l.quote.discountPct+'٪ — يحتاج اعتماد المدير')}</div>)}
                </div>
                <div className="font-extrabold text-slate-800">{t(l.quote?l.quote.amount.toLocaleString()+' ر.س':'—')}</div>
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
              <textarea className="field mt-3" value={actionNote ?? ""} onChange={(e) => setProp("actionNote", e.target.value)} rows="2" placeholder={t("\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u0646\u0647\u0627\u0626\u064a")}></textarea>
              <div className="flex flex-wrap gap-2 mt-3">
                <button className="px-3 py-2 rounded-xl bg-brand-500 text-white text-[12px] font-bold" onClick={() => { mgrFinalApproveQuote(l); }} type="button">{t("\u0627\u0639\u062a\u0645\u0627\u062f \u0646\u0647\u0627\u0626\u064a \u0644\u0644\u0639\u0631\u0636")}</button>
                <button className="px-3 py-2 rounded-xl bg-rose-50 text-rose-700 text-[12px] font-bold" onClick={() => { mgrRejectQuote(l); }} type="button">{t("\u0631\u0641\u0636 \u0648\u0625\u0639\u0627\u062f\u0629 \u0644\u0644\u0623\u062e\u0635\u0627\u0626\u064a")}</button>
                <button className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-[12px] font-bold" onClick={() => { openDrill('lead', l); }} type="button">{t("\u0645\u0644\u0641 \u0627\u0644\u0635\u0641\u0642\u0629")}</button>
              </div>
            </div>
          </React.Fragment>))}
          {Boolean(!mgrQuoteQueue.length) && (<div className="rounded-2xl bg-white p-8 text-center text-slate-400 text-sm ring-1 ring-slate-100">{t("\u0644\u0627 \u0628\u0646\u0648\u062f \u0645\u0635\u0639\u0651\u062f\u0629 \u0644\u0644\u0627\u0639\u062a\u0645\u0627\u062f")}</div>)}
        </div>

        <h2 className="text-lg font-extrabold text-slate-800 mb-3">{t("\u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064a \u0644\u0644\u062a\u0634\u063a\u064a\u0644")}</h2>
        <div className="space-y-3 mb-6">
          {(salesLeads.filter(x=>x.stage==='signed'||x.stage==='finance'||x.stage==='am') || []).map((l, index) => (<React.Fragment key={'hand-'+l.id}>
            <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div>
                <b>{t(l.client)}</b>
                <div className="text-[12px] text-slate-400">{t((l.contract?l.contract.no:l.ref)+' · '+leadMap[l.stage].t)}</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-[12px] font-bold" onClick={() => { setProp("actionNote", actionNote||'تسليم معتمد من مدير المبيعات'); handover(l); }} type="button">{t("\u062a\u0633\u0644\u064a\u0645 \u0644\u0645\u062f\u064a\u0631 \u0627\u0644\u062d\u0633\u0627\u0628")}</button>
                <button className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-[12px] font-bold" onClick={() => { openDrill('lead', l); }} type="button">{t("\u062a\u0641\u0627\u0635\u064a\u0644")}</button>
              </div>
            </div>
          </React.Fragment>))}
          {Boolean(!salesLeads.filter(x=>x.stage==='signed'||x.stage==='finance'||x.stage==='am').length) && (<div className="text-sm text-slate-400 text-center py-6">{t("\u0644\u0627 \u0639\u0642\u0648\u062f \u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0646\u0647\u0627\u0626\u064a")}</div>)}
        </div>

        <h2 className="text-lg font-extrabold text-slate-800 mb-3">{t("\u0623\u062f\u0627\u0621 \u0627\u0644\u0641\u0631\u064a\u0642 (\u0639\u0631\u0636 \u0641\u0642\u0637 \u0644\u0644\u0645\u062f\u064a\u0631)")}</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100"><div className="text-[12px] text-slate-400">{t("\u0632\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0623\u062e\u0635\u0627\u0626\u064a \u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631")}</div><div className="text-2xl font-extrabold">{t(visitsThisMonth.length)}</div></div>
          <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100"><div className="text-[12px] text-slate-400">{t("\u0639\u0631\u0648\u0636 \u0645\u0642\u062f\u0651\u0645\u0629")}</div><div className="text-2xl font-extrabold">{t(offersSubmittedCount)}</div></div>
          <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100"><div className="text-[12px] text-slate-400">{t("\u0639\u0642\u0648\u062f \u0645\u0643\u062a\u0645\u0644\u0629")}</div><div className="text-2xl font-extrabold">{t(clientsFullyActivated)}</div></div>
        </div>
      </section>
  );
}
