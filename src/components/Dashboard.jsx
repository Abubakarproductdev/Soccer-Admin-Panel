import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Dummy data for charts
const revenueData = [
  { date: '2026-03-11', value: 8500 },
  { date: '2026-03-12', value: 8900 },
  { date: '2026-03-14', value: 9200 },
  { date: '2026-03-16', value: 9400 },
  { date: '2026-03-18', value: 9600 },
  { date: '2026-03-20', value: 9100 },
  { date: '2026-03-22', value: 8800 },
  { date: '2026-03-24', value: 8400 },
  { date: '2026-03-26', value: 8100 },
  { date: '2026-03-28', value: 8200 },
  { date: '2026-03-30', value: 8000 },
  { date: '2026-04-01', value: 7800 },
  { date: '2026-04-03', value: 8200 },
  { date: '2026-04-05', value: 7900 },
  { date: '2026-04-07', value: 8600 },
];

const engagementData = [
  { date: '2026-03-11', value1: 1200, value2: 500, value3: 100 },
  { date: '2026-03-14', value1: 1300, value2: 480, value3: 110 },
  { date: '2026-03-18', value1: 1350, value2: 490, value3: 100 },
  { date: '2026-03-22', value1: 1250, value2: 460, value3: 95 },
  { date: '2026-03-26', value1: 1180, value2: 430, value3: 90 },
  { date: '2026-03-30', value1: 1150, value2: 400, value3: 85 },
  { date: '2026-04-03', value1: 1210, value2: 430, value3: 92 },
  { date: '2026-04-07', value1: 1280, value2: 470, value3: 105 },
];

const StatCard = ({ title, value, subtitle }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between h-[120px]">
    <h3 className="text-sm font-medium text-slate-600">{title}</h3>
    <p className="text-2xl font-bold text-slate-800 my-1">
      <AnimatedNumber value={value} />
    </p>
    <p className="text-xs text-slate-400">{subtitle}</p>
  </div>
);

const ProgressCard = ({ title, value, percentage, bgClass }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-200">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-sm font-medium text-slate-600">{title}</h3>
      <span className="text-xs font-semibold text-slate-500">
        <AnimatedNumber value={percentage} suffix="%" />
      </span>
    </div>
    <p className="text-2xl font-bold text-slate-800 mb-3">
      <AnimatedNumber value={value} />
    </p>
    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
      <div className={`h-full ${bgClass} rounded-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="px-8 py-6 bg-[#f8fafc] min-h-[calc(100vh-140px)]">

      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">Dashboard (Overview + Analytics)</h2>
          <p className="text-sm text-slate-500">Revenue, engagement, and system performance in one place.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
            Last 30 days <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <button className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
            All streams <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Stats Row 1 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <StatCard title="Total Revenue" value="$249,011" subtitle="All streams (selected range)" />
        <StatCard title="Avg Active Users" value="1.2K" subtitle="Daily average" />
        <StatCard title="Avg Ad Clicks" value="445" subtitle="Daily average" />
        <StatCard title="Marketplace Activity" value="92" subtitle="Daily average" />
      </div>

      {/* Stats Row 2 */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <ProgressCard title="Ads" value="87,515" percentage={35} bgClass="bg-[#0a1128]" />
        <ProgressCard title="Subscriptions" value="99,603" percentage={40} bgClass="bg-[#0a1128]" />
        <ProgressCard title="Affiliate" value="37,191" percentage={15} bgClass="bg-[#0a1128]" />
        <ProgressCard title="API Licensing" value="24,707" percentage={10} bgClass="bg-[#0a1128]" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Revenue Trend Outline */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 h-[400px]">
          <h3 className="text-base font-semibold text-slate-800">Revenue Trend</h3>
          <p className="text-xs text-slate-400 mb-6">Total revenue over time (selected range)</p>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} tickFormatter={(value) => `${value / 1000}k`} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0f172a" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Engagement Overview Outline */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 h-[400px]">
          <h3 className="text-base font-semibold text-slate-800">Engagement Overview</h3>
          <p className="text-xs text-slate-400 mb-6">Active users, ad clicks, marketplace activity</p>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#f1f5f9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} tickFormatter={(value) => value > 0 ? `${(value / 1000).toFixed(1)}K` : 0} />
                <Tooltip />
                <Area type="monotone" dataKey="value1" stackId="1" stroke="#334155" fill="#e2e8f0" strokeWidth={1} />
                <Area type="monotone" dataKey="value2" stackId="2" stroke="#e11d48" fill="#fce7f3" strokeWidth={1} />
                <Area type="monotone" dataKey="value3" stackId="3" stroke="#475569" fill="#94a3b8" strokeWidth={1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 gap-6">

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h3 className="text-base font-semibold text-slate-800">Recent Activity</h3>
          <p className="text-xs text-slate-400 mb-6">Latest system actions (demo data)</p>

          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-0.5">New subscription created</p>
                <p className="text-xs text-slate-500">Stripe • Premium</p>
              </div>
              <span className="text-xs text-slate-400">2m ago</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-0.5">API key generated</p>
                <p className="text-xs text-slate-500">League Admin</p>
              </div>
              <span className="text-xs text-slate-400">18m ago</span>
            </div>
          </div>
        </div>

        {/* System Performance */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 border-b-2">
          <h3 className="text-base font-semibold text-slate-800">System Performance</h3>
          <p className="text-xs text-slate-400 mb-6">Operational health snapshot</p>

          <div className="grid grid-cols-3 gap-4">
            <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl">
              <p className="text-xs font-medium text-slate-500 mb-2">Uptime</p>
              <p className="text-2xl font-bold text-slate-800 mb-1">
                <AnimatedNumber value={99.95} suffix="%" decimals={2} />
              </p>
              <p className="text-[10px] text-slate-400">Last 30 days</p>
            </div>
            <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl">
              <p className="text-xs font-medium text-slate-500 mb-2">Latency (p95)</p>
              <p className="text-2xl font-bold text-slate-800 mb-1">
                <AnimatedNumber value={210} suffix="ms" />
              </p>
              <p className="text-[10px] text-slate-400">API response time</p>
            </div>
            <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl">
              <p className="text-xs font-medium text-slate-500 mb-2">Error Rate</p>
              <p className="text-2xl font-bold text-slate-800 mb-1">
                <AnimatedNumber value={0.12} suffix="%" decimals={2} />
              </p>
              <p className="text-[10px] text-slate-400">Requests failing</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
