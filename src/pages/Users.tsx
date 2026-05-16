import React, { useState } from 'react'
import { Plus, Search, Edit, Trash2, Shield } from 'lucide-react'

interface UsersProps {
  user: any
}

const Users: React.FC<UsersProps> = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const users = [
    { id: 1, name: 'John Smith', email: 'john@bioinventory.com', role: 'Admin', department: 'Operations', status: 'Active', lastLogin: '2024-05-15 10:30' },
    { id: 2, name: 'Sarah Chen', email: 'sarah@bioinventory.com', role: 'Warehouse', department: 'Warehouse', status: 'Active', lastLogin: '2024-05-15 09:15' },
    { id: 3, name: 'Mike Johnson', email: 'mike@bioinventory.com', role: 'Procurement', department: 'Procurement', status: 'Active', lastLogin: '2024-05-14 16:45' },
    { id: 4, name: 'Emma Wilson', email: 'emma@bioinventory.com', role: 'QC', department: 'Quality Control', status: 'Active', lastLogin: '2024-05-15 08:20' },
    { id: 5, name: 'David Lee', email: 'david@bioinventory.com', role: 'Requestor', department: 'R&D', status: 'Inactive', lastLogin: '2024-05-10 14:30' },
  ]

  const roles = ['Admin', 'Procurement', 'Warehouse', 'QC', 'Finance', 'Requestor']

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">User Management</h1>
            <p className="text-slate-600 dark:text-slate-400">Manage users and access control</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
            <Plus className="w-5 h-5" />
            Add User
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="glass-card p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search users by name, email, or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="glass-input w-full pl-10"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="glass-card p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">User</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Email</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Role</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Department</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Last Login</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Status</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u) => (
                <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold">
                        {u.name.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">{u.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{u.email}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-cyan-500" />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{u.role}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{u.department}</td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{u.lastLogin}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      u.status === 'Active' 
                        ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                        : 'bg-slate-500/20 text-slate-600 dark:text-slate-400'
                    }`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users
