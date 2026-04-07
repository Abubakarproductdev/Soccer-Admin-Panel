import React from 'react';
import { ChevronDown } from 'lucide-react';

const ExportCenter = () => {
  return (
    <div className="px-8 py-6 bg-[#f8fafc] min-h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#0a1128] mb-1">Export Center</h2>
        <p className="text-sm text-slate-500">Export data to CSV or PDF (print-to-PDF).</p>
      </div>

      <div className="flex gap-6">
        {/* Create Export Form */}
        <div className="flex-[1] bg-white rounded-2xl border border-slate-200 p-6 self-start">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-800">Create Export</h3>
            <p className="text-xs text-slate-400">Generate CSV or PDF from selected dataset</p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">Dataset</p>
              <div className="w-full relative">
                <select className="w-full appearance-none px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0a1128]/20">
                  <option>Financial Reports</option>
                  <option>Users</option>
                  <option>Subscriptions</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">Format</p>
              <div className="w-full relative">
                <select className="w-full appearance-none px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0a1128]/20">
                  <option>CSV</option>
                  <option>PDF</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <button className="w-full bg-[#0a1128] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#1b2649] transition-colors mt-2">
              Generate Export
            </button>
            <p className="text-[10px] text-slate-400 text-center mt-2">
              CSV downloads immediately. PDF opens print dialog (Save as PDF).
            </p>
          </div>
        </div>

        {/* Export History Table */}
        <div className="flex-[2.5] bg-white rounded-2xl border border-slate-200 p-6 self-start">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-800">Export History</h3>
            <p className="text-xs text-slate-400">Track created exports</p>
          </div>
          
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500 font-medium">
                <th className="pb-3 font-medium">Filename</th>
                <th className="pb-3 font-medium">Dataset</th>
                <th className="pb-3 font-medium">Format</th>
                <th className="pb-3 font-medium">Created</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800 font-mono text-xs">financial-reports.csv</td>
                <td className="py-4">financial-reports</td>
                <td className="py-4 text-slate-500">CSV</td>
                <td className="py-4 text-slate-500">4/3/2026, 8:59:39 PM</td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs font-medium">completed</span>
                </td>
                <td className="py-4 text-right">
                  <button className="px-3 py-1 border border-red-100 text-red-600 bg-red-50 rounded text-xs font-medium hover:bg-red-100">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExportCenter;
