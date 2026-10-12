import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import { clsx, parseStyle } from '../utils';


export default function LegalPage() {

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
        <div className="mb-6"><h1 className="text-2xl font-extrabold text-slate-800">{t("\u0627\u0644\u0634\u0624\u0648\u0646 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629")}</h1><p className="text-[14px] text-slate-400 mt-1">{t("\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0639\u0642\u0648\u062f \u0648\u0627\u0644\u0645\u0644\u0627\u062d\u0642 \u0648\u0627\u0644\u0645\u062e\u0627\u0637\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629 \u2014 \u0627\u0644\u0631\u062f\u0648\u062f \u062a\u0645\u0631 \u0628\u0627\u0644\u062a\u0633\u0644\u0633\u0644: \u0628\u0627\u062d\u062b \u2192 \u0645\u0634\u0631\u0641 \u2192 \u0645\u062f\u064a\u0631.")}</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-100 mb-4 text-[13px] text-slate-600">{t("\u0635\u0646\u062f\u0648\u0642\u0643 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a \u064a\u0639\u0631\u0636 \u0627\u0644\u0628\u0646\u0648\u062f \u0627\u0644\u0645\u062d\u0627\u0644\u0629 \u0625\u0644\u064a\u0643 \u0641\u0642\u0637. \u0627\u0633\u062a\u062e\u062f\u0645 \u00ab\u0635\u0646\u062f\u0648\u0642 \u0627\u0644\u0639\u0645\u0644\u00bb \u0644\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0631\u062f \u0623\u0648 \u0627\u0644\u062a\u0635\u0639\u064a\u062f \u0645\u0639 \u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0625\u0644\u0632\u0627\u0645\u064a\u0629.")}</div>
        <button className="px-4 py-2.5 rounded-xl bg-ink text-white font-bold text-sm" onClick={() => { openPage('desk'); }} type="button">{t("\u0641\u062a\u062d \u0635\u0646\u062f\u0648\u0642 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a")}</button>
      </section>
  );
}
