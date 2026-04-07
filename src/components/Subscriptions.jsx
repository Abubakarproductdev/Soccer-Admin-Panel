import React from 'react';
import { Plus } from 'lucide-react';

const Subscriptions = () => {
  return (
    <div className="px-8 py-6 bg-[#f8fafc] min-h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#0a1128] mb-1">Subscription Management</h2>
        <p className="text-sm text-slate-500">Stripe/PayPal billing surfaces (frontend mocks now).</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <p className="text-sm font-medium text-slate-600 mb-2">Active Subscribers</p>
          <p className="text-2xl font-bold text-slate-800 mb-1">2</p>
          <p className="text-[11px] text-slate-400">Currently paying</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <p className="text-sm font-medium text-slate-600 mb-2">MRR</p>
          <p className="text-2xl font-bold text-slate-800 mb-1">$28</p>
          <p className="text-[11px] text-slate-400">Monthly recurring revenue</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <p className="text-sm font-medium text-slate-600 mb-2">Churn Rate</p>
          <p className="text-2xl font-bold text-slate-800 mb-1">0</p>
          <p className="text-[11px] text-slate-400">Canceled vs total</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <p className="text-sm font-medium text-slate-600 mb-2">Plans</p>
          <p className="text-2xl font-bold text-slate-800 mb-1">3</p>
          <p className="text-[11px] text-slate-400">Available plans</p>
        </div>
      </div>

      {/* Two Columns for Tables */}
      <div className="flex gap-6">
        
        {/* Plans Table */}
        <div className="flex-[1] bg-white rounded-2xl border border-slate-200 p-6 self-start">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-800">Plans</h3>
              <p className="text-xs text-slate-400">Create/update plans (mock CRUD)</p>
            </div>
            <button className="flex items-center gap-2 bg-[#0a1128] text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#1b2649] transition-colors">
              <Plus className="w-3.5 h-3.5" /> New Plan
            </button>
          </div>
          
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500 font-medium text-xs">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium">Provider</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4">
                  <p className="font-medium text-slate-800 mb-1">Pro</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Role: league_operator • Scope: league</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Modules: 3 • API: 120 rpm / 5000 day</p>
                </td>
                <td className="py-4 font-medium">$29</td>
                <td className="py-4"><span className="text-xs text-blue-600 font-medium">PayPal</span></td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs font-medium">Active</span>
                </td>
                <td className="py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-medium hover:bg-slate-50">Edit</button>
                    <button className="px-3 py-1 border border-red-100 text-red-600 bg-red-50 rounded text-[10px] font-medium hover:bg-red-100">Delete</button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4">
                  <p className="font-medium text-slate-800 mb-1">Basic</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Role: viewer • Scope: platform</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Modules: 1 • API: 30 rpm / 300 day</p>
                </td>
                <td className="py-4 font-medium">$9</td>
                <td className="py-4"><span className="text-xs text-indigo-600 font-medium">Stripe</span></td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs font-medium">Active</span>
                </td>
                <td className="py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-medium hover:bg-slate-50">Edit</button>
                    <button className="px-3 py-1 border border-red-100 text-red-600 bg-red-50 rounded text-[10px] font-medium hover:bg-red-100">Delete</button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4">
                  <p className="font-medium text-slate-800 mb-1">Premium</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Role: data_contributor • Scope: team</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Modules: 2 • API: 60 rpm / 1000 day</p>
                </td>
                <td className="py-4 font-medium">$19</td>
                <td className="py-4"><span className="text-xs text-indigo-600 font-medium">Stripe</span></td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs font-medium">Active</span>
                </td>
                <td className="py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-medium hover:bg-slate-50">Edit</button>
                    <button className="px-3 py-1 border border-red-100 text-red-600 bg-red-50 rounded text-[10px] font-medium hover:bg-red-100">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Subscribers Table */}
        <div className="flex-[1] bg-white rounded-2xl border border-slate-200 p-6 self-start">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-800">Subscribers</h3>
            <p className="text-xs text-slate-400">Manage plan + status (mock update)</p>
          </div>
          
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500 font-medium text-xs">
                <th className="pb-3 font-medium">Email</th>
                <th className="pb-3 font-medium">Plan</th>
                <th className="pb-3 font-medium">Provider</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">user1@wsl.com</td>
                <td className="py-4">
                  <p className="font-medium text-slate-800 mb-1">Premium ($19/mo)</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Role: data_contributor • Scope: team</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Modules: 2 • API: 60 rpm / 1000 day</p>
                </td>
                <td className="py-4"><span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded font-medium border border-indigo-100">Stripe</span></td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs font-medium">active</span>
                </td>
                <td className="py-4 text-right">
                  <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-medium hover:bg-slate-50">Manage</button>
                </td>
              </tr>
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">user2@wsl.com</td>
                <td className="py-4">
                  <p className="font-medium text-slate-800 mb-1">Basic ($9/mo)</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Role: viewer • Scope: platform</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Modules: 1 • API: 30 rpm / 300 day</p>
                </td>
                <td className="py-4"><span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded font-medium border border-indigo-100">Stripe</span></td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs font-medium">active</span>
                </td>
                <td className="py-4 text-right">
                  <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-medium hover:bg-slate-50">Manage</button>
                </td>
              </tr>
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">user3@wsl.com</td>
                <td className="py-4">
                  <p className="font-medium text-slate-800 mb-1">Pro ($29/mo)</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Role: league_operator • Scope: league</p>
                </td>
                <td className="py-4"><span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded font-medium border border-blue-100">PayPal</span></td>
                <td className="py-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded text-[10px] font-medium">canceled</span>
                </td>
                <td className="py-4 text-right">
                  <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-medium hover:bg-slate-50">Manage</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Subscriptions;
