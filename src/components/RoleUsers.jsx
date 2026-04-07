import React from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const RoleUsers = () => {
  return (
    <div className="px-8 py-6 bg-[#f8fafc] min-h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#0a1128] mb-1">Role & User Management (RBAC)</h2>
          <p className="text-sm text-slate-500">Frontend-only RBAC UI now. Backend enforcement will be added later.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#0a1128] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1b2649] transition-colors">
          <Plus className="w-4 h-4" /> New User
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6 bg-white p-4 rounded-2xl border border-slate-200">
        <div className="flex-1">
          <input 
            type="text" 
            placeholder="Search name, email, role..." 
            className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1128]/20"
          />
        </div>
        <div className="w-[200px] relative">
          <select className="w-full appearance-none px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0a1128]/20">
            <option>All roles</option>
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="w-[200px] relative">
          <select className="w-full appearance-none px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0a1128]/20">
            <option>All statuses</option>
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="flex gap-6">
        {/* Users Table */}
        <div className="flex-[2] bg-white rounded-2xl border border-slate-200 p-6">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-800">Users</h3>
            <p className="text-xs text-slate-400">Create, update, and manage access</p>
          </div>
          
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500 font-medium">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Email</th>
                <th className="pb-3 font-medium">Role</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Scope</th>
                <th className="pb-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              {/* Row 1 */}
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">Super Admin</td>
                <td className="py-4">super@wsl.com</td>
                <td className="py-4"><span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium border border-slate-200">Super Admin</span></td>
                <td className="py-4"><span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs font-medium">active</span></td>
                <td className="py-4 text-slate-500">Platform</td>
                <td className="py-4">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 border border-slate-200 rounded text-xs font-medium hover:bg-slate-50">Assign</button>
                    <button className="px-3 py-1 border border-slate-200 rounded text-xs font-medium hover:bg-slate-50">Edit</button>
                    <button className="px-3 py-1 border border-red-100 text-red-600 bg-red-50 rounded text-xs font-medium hover:bg-red-100">Delete</button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">State Admin</td>
                <td className="py-4">state@wsl.com</td>
                <td className="py-4"><span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium border border-slate-200">State Admin</span></td>
                <td className="py-4"><span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs font-medium">active</span></td>
                <td className="py-4 text-slate-500">State: TX</td>
                <td className="py-4">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 border border-slate-200 rounded text-xs font-medium hover:bg-slate-50">Assign</button>
                    <button className="px-3 py-1 border border-slate-200 rounded text-xs font-medium hover:bg-slate-50">Edit</button>
                    <button className="px-3 py-1 border border-red-100 text-red-600 bg-red-50 rounded text-xs font-medium hover:bg-red-100">Delete</button>
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">League Operator</td>
                <td className="py-4">league@wsl.com</td>
                <td className="py-4"><span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium border border-slate-200">League Operator</span></td>
                <td className="py-4"><span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs font-medium">active</span></td>
                <td className="py-4 text-slate-500">League: LEAGUE 1</td>
                <td className="py-4">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 border border-slate-200 rounded text-xs font-medium hover:bg-slate-50">Assign</button>
                    <button className="px-3 py-1 border border-slate-200 rounded text-xs font-medium hover:bg-slate-50">Edit</button>
                    <button className="px-3 py-1 border border-red-100 text-red-600 bg-red-50 rounded text-xs font-medium hover:bg-red-100">Delete</button>
                  </div>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                <td className="py-4 font-medium text-slate-800">Contributor</td>
                <td className="py-4">contrib@wsl.com</td>
                <td className="py-4"><span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium border border-slate-200">Data Contributor</span></td>
                <td className="py-4"><span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs font-medium">active</span></td>
                <td className="py-4 text-slate-500">Team: TEAM-1</td>
                <td className="py-4">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 border border-slate-200 rounded text-xs font-medium hover:bg-slate-50">Assign</button>
                    <button className="px-3 py-1 border border-slate-200 rounded text-xs font-medium hover:bg-slate-50">Edit</button>
                    <button className="px-3 py-1 border border-red-100 text-red-600 bg-red-50 rounded text-xs font-medium hover:bg-red-100">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Role Access Preview */}
        <div className="flex-[1] bg-white rounded-2xl border border-slate-200 p-6 self-start">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-800">Role Access Preview</h3>
            <p className="text-xs text-slate-400">Frontend-only module visibility map (derived from permissions)</p>
          </div>

          <div className="mb-4">
            <p className="text-xs font-medium text-slate-600 mb-2">Role</p>
            <div className="w-full relative">
              <select className="w-full appearance-none px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0a1128]/20">
                <option>Super Admin</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="text-xs font-medium text-slate-500 mb-4">Allowed Modules</p>
            <div className="space-y-4">
              {['Dashboard', 'Role & User Management', 'Financial Reports', 'Export Center', 'Subscriptions'].map((module, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-slate-800">{module}</p>
                    <p className="text-[10px] text-slate-400">Default for super admin</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-green-600">Allowed</span>
                    <div className="w-8 h-4 bg-green-500 rounded-full relative cursor-pointer opacity-50">
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleUsers;
