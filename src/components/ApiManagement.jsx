import React from 'react';
import { Plus } from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const apiRequestsData = [
  { date: '2026-03-11', value: 16500 },
  { date: '2026-03-12', value: 14800 },
  { date: '2026-03-14', value: 17200 },
  { date: '2026-03-16', value: 19100 },
  { date: '2026-03-18', value: 18500 },
  { date: '2026-03-20', value: 19500 },
  { date: '2026-03-22', value: 17800 },
  { date: '2026-03-24', value: 15500 },
  { date: '2026-03-26', value: 12500 },
  { date: '2026-03-28', value: 12800 },
  { date: '2026-03-30', value: 11000 },
  { date: '2026-04-01', value: 12000 },
  { date: '2026-04-03', value: 11500 },
  { date: '2026-04-05', value: 12800 },
  { date: '2026-04-07', value: 12200 },
];

const ApiManagement = () => {
  return (
    <div className="px-8 py-6 bg-[#f8fafc] min-h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#0a1128] mb-1">API Management</h2>
        <p className="text-sm text-slate-500">Generate, manage, revoke API keys and monitor usage.</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* API Requests Chart outline */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-800">API Requests</h3>
          <p className="text-xs text-slate-400 mb-6">Daily requests (last 30 days)</p>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={apiRequestsData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} tickFormatter={(value) => `${value/1000}K`} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0f172a" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Usage by Endpoint Table */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-800">Usage by Endpoint</h3>
          <p className="text-xs text-slate-400 mb-6">Top endpoints (demo)</p>
          
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500 font-medium text-xs">
                <th className="pb-3 font-medium">Endpoint</th>
                <th className="pb-3 font-medium text-right">Requests</th>
                <th className="pb-3 font-medium text-right">Errors</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">/v1/matches</td>
                <td className="py-4 text-right">54.2K</td>
                <td className="py-4 text-right"><span className="px-2 py-0.5 bg-red-50 text-red-600 rounded text-xs font-semibold">92</span></td>
              </tr>
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">/v1/standings</td>
                <td className="py-4 text-right">31.8K</td>
                <td className="py-4 text-right"><span className="px-2 py-0.5 bg-red-50 text-red-600 rounded text-xs font-semibold">44</span></td>
              </tr>
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">/v1/teams</td>
                <td className="py-4 text-right">21.5K</td>
                <td className="py-4 text-right"><span className="px-2 py-0.5 bg-red-50 text-red-600 rounded text-xs font-semibold">38</span></td>
              </tr>
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">/v1/players</td>
                <td className="py-4 text-right">15.6K</td>
                <td className="py-4 text-right"><span className="px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-xs font-semibold">27</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* API Keys Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-800">API Keys</h3>
            <p className="text-xs text-slate-400">Role + Scope + Tier + Endpoint permissions (demo)</p>
          </div>
          <button className="flex items-center gap-2 bg-[#0a1128] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1b2649] transition-colors">
            <Plus className="w-4 h-4" /> New Key
          </button>
        </div>
        
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-slate-500 font-medium text-xs">
              <th className="pb-3 font-medium">Name</th>
              <th className="pb-3 font-medium">Token</th>
              <th className="pb-3 font-medium">Role</th>
              <th className="pb-3 font-medium">Scope</th>
              <th className="pb-3 font-medium">Tier</th>
              <th className="pb-3 font-medium">Limits</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
              <td className="py-4">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-slate-800">League Operator Key</p>
                  <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-600 font-medium">both</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight pr-4">Permissions: 4R / 1W • Endpoint rules stored for backend enforcement.</p>
              </td>
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <p className="font-mono text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded">wsl_1_8VC...E4FQL</p>
                  <button className="text-[10px] text-slate-500 font-medium border border-slate-200 bg-white px-2 py-1 rounded hover:bg-slate-50">Copy</button>
                </div>
              </td>
              <td className="py-4"><span className="text-xs text-slate-600 font-medium">League<br/>Operator</span></td>
              <td className="py-4 text-xs text-slate-500">League<br/>LEAGUE-1</td>
              <td className="py-4 text-xs text-slate-600"><span className="font-medium">Basic</span><br/>($9/mo)</td>
              <td className="py-4 text-xs text-slate-500">120/min<br/>5000/day</td>
              <td className="py-4">
                <span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-[10px] font-medium">active</span>
              </td>
              <td className="py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-medium hover:bg-slate-50">Edit</button>
                  <button className="px-3 py-1 border border-red-100 text-red-600 bg-red-50 rounded text-[10px] font-medium hover:bg-red-100">Revoke</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ApiManagement;
