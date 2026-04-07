import React from 'react';
import { 
  Home, 
  Users, 
  BarChart2, 
  Download, 
  CreditCard, 
  Key, 
  Map, 
  Database, 
  Settings,
  ChevronDown
} from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const navItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Role & Users', icon: Users },
    { name: 'Financial Reports', icon: BarChart2 },
    { name: 'Export Center', icon: Download },
    { name: 'Subscriptions', icon: CreditCard },
    { name: 'API Management', icon: Key },
    { name: 'World Soccer Leagues', icon: Map },
    { name: 'Data Management', icon: Database, hasDropdown: true },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-[280px] h-screen bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0 overflow-y-auto">
      {/* Logo Area */}
      <div className="p-6">
        <div className="bg-[#1b2649] text-white p-3 rounded-lg flex flex-col justify-center border-b-4 border-[#e63946] mb-1">
            <div className="flex items-center gap-2">
                <div className="bg-[#e63946] rounded-full p-1 flex justify-center items-center w-8 h-8">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                </div>
                <span className="font-bold text-3xl tracking-wider uppercase italic">WSL</span>
            </div>
        </div>
        <div className="text-[#1b2649] text-[10px] font-black uppercase text-center tracking-tighter w-full">
            WORLDSOCCERLEAGUES.COM
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 py-2">
        <p className="text-xs text-slate-500 font-medium mb-4 px-3">Navigation</p>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setCurrentView(item.name)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative ${
                  isActive
                    ? 'text-[#0a1128]'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#0a1128]">
                    <svg width="12" height="32" viewBox="0 0 12 32" fill="none">
                      <path d="M 12 0 C 0 8 0 24 12 32" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
                <div className="flex items-center gap-3 relative z-10 pl-2">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#0a1128]' : 'text-slate-500'}`} />
                  {item.name}
                </div>
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-slate-400 relative z-10" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
