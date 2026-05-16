import React, { useState } from 'react'
import { FileText, Download, Calendar, Filter } from 'lucide-react'

interface ReportsProps {
  user: any
}

const Reports: React.FC<ReportsProps> = ({ user }) => {
  const [selectedReport, setSelectedReport] = useState('stock-ledger')

  const reportTypes = [
    { id: 'stock-ledger', name: 'Stock Ledger', description: 'Complete inventory movement history' },
    { id: 'batch-history', name: 'Batch History', description: 'Track batch-wise inventory' },
    { id: 'valuation', name: 'Inventory Valuation', description: 'Current stock value analysis' },
    { id: 'purchase-history', name: 'Purchase History', description: 'Historical purchase data' },
    { id: 'vendor-analytics', name: 'Vendor Analytics', description: 'Vendor performance metrics' },
    { id: 'consumption', name: 'Consumption Trends', description: 'Material usage patterns' },
    { id: 'expiry', name: 'Expiry Reports', description: 'Items nearing expiration' },
    { id: 'dead-stock', name: 'Dead Stock', description: 'Non-moving inventory items' },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Reports & Analytics</h1>
            <p className="text-slate-600 dark:text-slate-400">Generate comprehensive inventory reports</p>
          </div>
        </div>
      </div>

      {/* Report Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reportTypes.map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`glass-card p-6 text-left hover:scale-105 transition-all ${
              selectedReport === report.id ? 'ring-2 ring-cyan-400' : ''
            }`}
          >
            <FileText className="w-8 h-8 text-cyan-500 mb-3" />
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">{report.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{report.description}</p>
          </button>
        ))}
      </div>

      {/* Report Generator */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Generate Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Start Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="date" className="glass-input w-full pl-10" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">End Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="date" className="glass-input w-full pl-10" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Format</label>
            <select className="glass-input w-full">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all">
            <Download className="w-5 h-5" />
            Generate Report
          </button>
          <button className="glass-button flex items-center gap-2 px-6 py-3">
            <Filter className="w-5 h-5" />
            Advanced Filters
          </button>
        </div>
      </div>

      {/* Sample Report Preview */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Report Preview</h2>
        <div className="bg-white/5 rounded-lg p-8 text-center">
          <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400">Select parameters and generate a report to see preview</p>
        </div>
      </div>
    </div>
  )
}

export default Reports
