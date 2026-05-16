import React, { useState } from 'react'
import { Plus, FileText, Clock, CheckCircle, XCircle, Eye } from 'lucide-react'

interface ProcurementProps {
  user: any
}

const Procurement: React.FC<ProcurementProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('requisitions')

  const requisitions = [
    { id: 'PR-2024-001', items: 5, requestor: 'Sarah Chen', department: 'R&D', date: '2024-05-15', status: 'Pending Approval', priority: 'High' },
    { id: 'PR-2024-002', items: 3, requestor: 'Mike Johnson', department: 'Production', date: '2024-05-14', status: 'Approved', priority: 'Medium' },
    { id: 'PR-2024-003', items: 8, requestor: 'Emma Wilson', department: 'QC', date: '2024-05-13', status: 'In Review', priority: 'Low' },
  ]

  const purchaseOrders = [
    { id: 'PO-2024-0847', vendor: 'ChemSupply Inc', items: 5, amount: 12450, date: '2024-05-15', status: 'Sent', delivery: '2024-05-22' },
    { id: 'PO-2024-0846', vendor: 'BioSupply Corp', items: 3, amount: 8900, date: '2024-05-14', status: 'Delivered', delivery: '2024-05-20' },
    { id: 'PO-2024-0845', vendor: 'LabEquip Ltd', items: 2, amount: 15600, date: '2024-05-13', status: 'In Transit', delivery: '2024-05-25' },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Procurement</h1>
            <p className="text-slate-600 dark:text-slate-400">Manage purchase requisitions and orders</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
            <Plus className="w-5 h-5" />
            New Requisition
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="glass-card p-2">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('requisitions')}
            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'requisitions'
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400'
                : 'text-slate-600 dark:text-slate-400 hover:bg-white/5'
            }`}
          >
            Purchase Requisitions
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'orders'
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400'
                : 'text-slate-600 dark:text-slate-400 hover:bg-white/5'
            }`}
          >
            Purchase Orders
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'requisitions' ? (
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Purchase Requisitions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">PR Number</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Requestor</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Department</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Items</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Date</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Priority</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Status</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requisitions.map((req) => (
                  <tr key={req.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400" />
                        <span className="font-mono text-sm text-slate-900 dark:text-white">{req.id}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-900 dark:text-white font-medium">{req.requestor}</td>
                    <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{req.department}</td>
                    <td className="py-4 px-4 text-sm text-slate-900 dark:text-white font-semibold">{req.items}</td>
                    <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{req.date}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        req.priority === 'High' ? 'bg-red-500/20 text-red-600 dark:text-red-400' :
                        req.priority === 'Medium' ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400' :
                        'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                      }`}>
                        {req.priority}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        req.status === 'Approved' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
                        req.status === 'Pending Approval' ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400' :
                        'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                      }`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                          <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        </button>
                        {req.status === 'Pending Approval' && (
                          <>
                            <button className="p-2 hover:bg-green-500/10 rounded-lg transition-colors">
                              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                            </button>
                            <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors">
                              <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Purchase Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">PO Number</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Vendor</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Items</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Amount</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Order Date</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Delivery Date</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Status</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {purchaseOrders.map((po) => (
                  <tr key={po.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400" />
                        <span className="font-mono text-sm text-slate-900 dark:text-white">{po.id}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-900 dark:text-white font-medium">{po.vendor}</td>
                    <td className="py-4 px-4 text-sm text-slate-900 dark:text-white font-semibold">{po.items}</td>
                    <td className="py-4 px-4 text-sm text-slate-900 dark:text-white font-bold">${po.amount.toLocaleString()}</td>
                    <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{po.date}</td>
                    <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{po.delivery}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        po.status === 'Delivered' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
                        po.status === 'In Transit' ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400' :
                        'bg-orange-500/20 text-orange-600 dark:text-orange-400'
                      }`}>
                        {po.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Procurement
