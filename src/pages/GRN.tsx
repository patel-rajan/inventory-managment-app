import React from 'react'
import { FileText, CheckCircle, XCircle, Clock } from 'lucide-react'

interface GRNProps {
  user: any
}

const GRN: React.FC<GRNProps> = ({ user }) => {
  const grns = [
    {
      id: 'GRN-2024-001',
      po: 'PO-2024-0847',
      vendor: 'ChemSupply Inc',
      items: 5,
      receivedDate: '2024-05-15',
      qcStatus: 'Approved',
      receivedBy: 'Sarah Chen',
      status: 'Completed'
    },
    {
      id: 'GRN-2024-002',
      po: 'PO-2024-0846',
      vendor: 'BioSupply Corp',
      items: 3,
      receivedDate: '2024-05-14',
      qcStatus: 'Pending',
      receivedBy: 'Mike Johnson',
      status: 'QC Review'
    },
    {
      id: 'GRN-2024-003',
      po: 'PO-2024-0845',
      vendor: 'LabEquip Ltd',
      items: 2,
      receivedDate: '2024-05-13',
      qcStatus: 'Rejected',
      receivedBy: 'Emma Wilson',
      status: 'Rejected'
    },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Goods Receipt Note (GRN)</h1>
            <p className="text-slate-600 dark:text-slate-400">Track and manage incoming materials</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
            <FileText className="w-5 h-5" />
            Create GRN
          </button>
        </div>
      </div>

      {/* GRN Table */}
      <div className="glass-card p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">GRN Number</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">PO Number</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Vendor</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Items</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Received Date</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Received By</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">QC Status</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {grns.map((grn) => (
                <tr key={grn.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-400" />
                      <span className="font-mono text-sm text-slate-900 dark:text-white">{grn.id}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-mono text-slate-600 dark:text-slate-400">{grn.po}</td>
                  <td className="py-4 px-4 text-sm text-slate-900 dark:text-white font-medium">{grn.vendor}</td>
                  <td className="py-4 px-4 text-sm text-slate-900 dark:text-white font-semibold">{grn.items}</td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{grn.receivedDate}</td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{grn.receivedBy}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {grn.qcStatus === 'Approved' && <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />}
                      {grn.qcStatus === 'Pending' && <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400" />}
                      {grn.qcStatus === 'Rejected' && <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />}
                      <span className={`text-sm font-medium ${
                        grn.qcStatus === 'Approved' ? 'text-green-600 dark:text-green-400' :
                        grn.qcStatus === 'Pending' ? 'text-orange-600 dark:text-orange-400' :
                        'text-red-600 dark:text-red-400'
                      }`}>
                        {grn.qcStatus}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      grn.status === 'Completed' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
                      grn.status === 'QC Review' ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400' :
                      'bg-red-500/20 text-red-600 dark:text-red-400'
                    }`}>
                      {grn.status}
                    </span>
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

export default GRN
