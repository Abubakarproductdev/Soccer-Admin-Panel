import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import RoleUsers from './components/RoleUsers';
import FinancialReports from './components/FinancialReports';
import ExportCenter from './components/ExportCenter';
import Subscriptions from './components/Subscriptions';
import ApiManagement from './components/ApiManagement';

function App() {
  const [currentView, setCurrentView] = useState('Dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'Dashboard': return <Dashboard />;
      case 'Role & Users': return <RoleUsers />;
      case 'Financial Reports': return <FinancialReports />;
      case 'Export Center': return <ExportCenter />;
      case 'Subscriptions': return <Subscriptions />;
      case 'API Management': return <ApiManagement />;
      // Fallback for Data Management, Settings, etc
      default: return (
        <div className="p-8"><h2 className="text-xl font-bold text-slate-800">{currentView} Content Area</h2><p className="text-slate-500 mt-2">Will be implemented later.</p></div>
      );
    }
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans antialiased text-slate-900">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 ml-[280px] flex flex-col h-screen overflow-hidden">
        <TopBar currentView={currentView} />
        <main className="flex-1 overflow-y-auto w-full">
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default App;
