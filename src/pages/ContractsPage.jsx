import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function ContractsPage() {

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
<section data-crm-entity="je_contract">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800">{t("\u0627\u0644\u0639\u0642\u0648\u062f")}</h1>
            <p className="text-[14px] text-slate-400 mt-1">{t("\u0639\u0642\u0648\u062f \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0646\u0634\u0637\u0629 \u0648\u0645\u062f\u062f\u0647\u0627 \u0648\u0646\u0633\u0628 \u0627\u0644\u0625\u0634\u063a\u0627\u0644 \u2014 \u0645\u0631\u062a\u0628\u0637\u0629 \u0628\u0643\u064a\u0627\u0646 \u0627\u0644\u0639\u0642\u062f \u0641\u064a CRM.")}</p>
          </div>
          <button className="px-4 py-2.5 rounded-xl bg-ink text-white text-[13px] font-bold ring-1 ring-brand-500/30 hover:bg-black transition-colors" onClick={() => { openDrill('contract', contracts[0]); }}>{t("\u0639\u0631\u0636 \u0627\u0644\u0639\u0642\u062f \u0627\u0644\u0631\u0642\u0645\u064a")}</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {(contracts || []).map((c, index) => (<React.Fragment key={c.id}>
            <button className="text-right rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 hover:ring-brand-300 hover:-translate-y-0.5 transition-all" onClick={() => { openDrill('contract', c); }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap"><h3 className="font-extrabold text-slate-800 text-lg">{t(c.title)}</h3><span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">{t("\u0633\u0627\u0631\u064a")}</span></div>
                  <p className="text-[12px] text-slate-400 mt-1.5 font-mono" dir="ltr"><span>{t(c.id)}</span> · <span>{t(c.count)}</span> {t("\u0639\u0627\u0645\u0644")}</p>
                </div>
                <div className="text-left"><div className="text-[12px] text-slate-400">{t("\u0627\u0644\u0625\u0634\u063a\u0627\u0644")}</div><div className="font-extrabold text-brand-600 text-2xl">{t(c.occ+'%')}</div></div>
              </div>
              <div className="mt-6"><div className="flex items-center justify-between text-[12px] mb-2"><span className="text-slate-400">{t("\u0627\u0644\u0645\u062f\u0629 \u0627\u0644\u0645\u0646\u0642\u0636\u064a\u0629")}</span><span className="font-bold text-slate-600">{t(c.elapsed+'% · متبقٍ '+c.remain)}</span></div><div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full bg-gradient-to-l from-brand-600 to-brand-400" style={parseStyle('width:'+c.elapsed+'%')}></div></div></div>
            </button>
          </React.Fragment>))}
        </div>
      </section>
  );
}
