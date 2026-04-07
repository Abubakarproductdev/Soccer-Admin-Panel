import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';
import { 
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const pieData = [
  { name: 'Subscriptions', value: 200000 },
  { name: 'Ads', value: 120000 },
  { name: 'Affiliate', value: 45000 },
  { name: 'API Licensing', value: 27321 },
];

const COLORS = ['#0f172a', '#3b82f6', '#a855f7', '#ec4899'];

const FinancialReports = () => {
  return (
    <div className="px-8 py-6 bg-[#f8fafc] min-h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xl font-bold text-[#0a1128] mb-1">Financial Reporting</h2>
          <p className="text-sm text-slate-500">Revenue by streams + fees + net reporting (CSV/PDF export via Export Center).</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">
            Last 30 days <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          <button className="flex items-center gap-2 bg-white px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">
            All Streams <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
          <input type="text" placeholder="League ID (optional)" className="w-36 px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none" />
          <input type="text" placeholder="Team ID (optional)" className="w-36 px-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none" />
        </div>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <p className="text-sm font-medium text-slate-600 mb-2">Gross Revenue</p>
          <p className="text-2xl font-bold text-slate-800 mb-1">
            <AnimatedNumber value={392321} prefix="$" />
          </p>
          <p className="text-[11px] text-slate-400">Before fees/refunds</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <p className="text-sm font-medium text-slate-600 mb-2">Net Revenue</p>
          <p className="text-2xl font-bold text-slate-800 mb-1">
            <AnimatedNumber value={371146} prefix="$" />
          </p>
          <p className="text-[11px] text-slate-400">After fees/refunds</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <p className="text-sm font-medium text-slate-600 mb-2">Fees</p>
          <p className="text-2xl font-bold text-slate-800 mb-1">
            <AnimatedNumber value={15469} prefix="$" />
          </p>
          <p className="text-[11px] text-slate-400">Estimated processing fees</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <p className="text-sm font-medium text-slate-600 mb-2">Refunds</p>
          <p className="text-2xl font-bold text-slate-800 mb-1">
            <AnimatedNumber value={5705} prefix="$" />
          </p>
          <p className="text-[11px] text-slate-400">Effective take rate: 5.4%</p>
        </div>
      </div>

      {/* Revenue Breakdown Module */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200">
        <h3 className="text-base font-semibold text-slate-800 mb-1">Revenue Breakdown</h3>
        <p className="text-xs text-slate-400 mb-8">All streams share (gross)</p>
        
        <div className="flex gap-8">
          {/* Pie Chart Area */}
          <div className="flex-[1] flex flex-col items-center justify-center">
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legend placed manually exactly like the picture */}
            <div className="flex gap-4 mt-6">
              {[
                {name: 'API Licensing', color: '#ec4899'},
                {name: 'Ads', color: '#3b82f6'},
                {name: 'Affiliate', color: '#a855f7'},
                {name: 'Subscriptions', color: '#0f172a'},
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5" style={{backgroundColor: item.color}}></div>
                  <span className="text-[11px] text-slate-600 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Chart Area */}
          <div className="flex-[1.5] h-[280px]">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pieData} margin={{ top: 20, right: 30, left: -20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={true} stroke="#cbd5e1" tickLine={false} tick={{ fontSize: 10, fill: '#64748b', angle: -45, textAnchor: 'end' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} tickFormatter={(value) => `${value/1000}K`} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialReports;
