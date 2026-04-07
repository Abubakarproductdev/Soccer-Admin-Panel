import React from 'react';
import { Bell } from 'lucide-react';

const TopBar = ({ currentView }) => {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="h-20 px-8 flex items-center justify-between">
        {/* Left Side */}
        <div>
          <h1 className="text-lg font-semibold text-slate-800">World Soccer Leagues</h1>
          <p className="text-sm text-slate-400">Admin Console</p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Notification */}
          <button className="relative p-2 rounded-full border border-slate-200 text-slate-400 hover:bg-slate-50 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full text-[9px] font-bold text-white flex items-center justify-center">
              2
            </span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full py-1.5 px-2 pr-4 cursor-pointer hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0a1128] text-white font-semibold text-sm">
              A
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-700">Admin User</span>
              <span className="text-sm text-slate-400">(Platform Admin)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Layer */}
      <div className="px-8 py-4 bg-[#f8fafc]">
        <span className="text-sm text-slate-400">Home / </span>
        <span className="text-sm text-slate-800 font-medium">{currentView}</span>
      </div>
    </div>
  );
};

export default TopBar;
