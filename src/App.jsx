import React, { useEffect } from 'react';
import { useSimulator } from './context/SimulatorContext';

// Components
import LandingView from './components/LandingView';
import SignupSection from './components/SignupSection';
import Header from './components/Header';
import SimBar from './components/SimBar';
import Sidebar from './components/Sidebar';
import InboxDrawer from './components/InboxDrawer';
import SimLogDrawer from './components/SimLogDrawer';
import DrillModal from './components/DrillModal';
import ToastContainer from './components/ToastContainer';

// Pages
import DeskPage from './pages/DeskPage';
import LegalPage from './pages/LegalPage';
import HrPage from './pages/HrPage';
import ProcurementPage from './pages/ProcurementPage';
import DashboardPage from './pages/DashboardPage';
import WorkersPage from './pages/WorkersPage';
import ContractsPage from './pages/ContractsPage';
import InvoicesPage from './pages/InvoicesPage';
import TicketsPage from './pages/TicketsPage';
import AmPage from './pages/AmPage';
import FollowupPage from './pages/FollowupPage';
import FinancePage from './pages/FinancePage';
import SalesSpecPage from './pages/SalesSpecPage';
import SalesSupPage from './pages/SalesSupPage';
import SalesMgrPage from './pages/SalesMgrPage';
import CreditPage from './pages/CreditPage';
import HousingPage from './pages/HousingPage';
import AdminPage from './pages/AdminPage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  const { screen, page, drawer, showInbox, showSimLog, modal, setProp, lang } = useSimulator();

  useEffect(() => {
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = lang || 'ar';
    document.title = lang === 'en'
      ? 'Jussur Al-Emdad · MVP Simulator (React)'
      : 'جسور الإمداد · محاكي MVP (React)';
  }, [lang]);

  return (
    <div className="font-sans text-slate-800 antialiased min-h-screen bg-[#f2f5f9]">
      {/* 1. Landing View */}
      {screen === 'landing' && <LandingView />}

      {/* 2. Signup Modal/Section */}
      {screen === 'signup' && <SignupSection />}

      {/* 3. Main Operational App Shell */}
      {screen === 'app' && (
        <div>
          <Header />
          <SimBar />
          {showInbox && <InboxDrawer />}
          {showSimLog && <SimLogDrawer />}

          <div className="flex">
            {drawer && (
              <div
                onClick={() => setProp('drawer', false)}
                className="fixed inset-0 bg-ink/40 z-40 lg:hidden"
              />
            )}
            <Sidebar />

            <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-7 max-w-[1400px] mx-auto w-full">
              {page === 'desk' && <DeskPage />}
              {page === 'legal' && <LegalPage />}
              {page === 'hr' && <HrPage />}
              {page === 'procurement' && <ProcurementPage />}
              {page === 'dashboard' && <DashboardPage />}
              {page === 'workers' && <WorkersPage />}
              {page === 'contracts' && <ContractsPage />}
              {page === 'invoices' && <InvoicesPage />}
              {page === 'tickets' && <TicketsPage />}
              {page === 'am' && <AmPage />}
              {page === 'followup' && <FollowupPage />}
              {page === 'finance' && <FinancePage />}
              {page === 'salesSpec' && <SalesSpecPage />}
              {page === 'salesSup' && <SalesSupPage />}
              {page === 'salesMgr' && <SalesMgrPage />}
              {page === 'credit' && <CreditPage />}
              {page === 'housing' && <HousingPage />}
              {page === 'admin' && <AdminPage />}
              {page === 'profile' && <ProfilePage />}
            </main>
          </div>
        </div>
      )}

      {/* Modals & Overlays */}
      {modal && modal.open && <DrillModal />}
      <ToastContainer />
    </div>
  );
}
