import React from 'react'
import { TrendingDown, Beaker, Calendar } from 'lucide-react'

interface ConsumptionProps {
  user: any
}

const Consumption: React.FC<ConsumptionProps> = ({ user }) => {
  const consumptions = [
    {
      id: 'CON-2024-001',
      item: 'Sodium Chloride',
      batch: 'BA-2024-001',
      quantity: 25,
      unit: 'kg',
      project: 'Project Alpha',
      department: 'R&D',
      consumedBy: 'Sarah Chen',
      date: '2024-05-15',
      purpose: 'Buffer preparation'
    },
    {
      id: 'CON-2024-002',
      item: 'Ethanol 99%',
      batch: 'BA-2024-045',
      quantity: 10,
      unit: 'L',
      project: 'Project Beta',
      department: 'Production',
      consumedBy: 'Mike Johnson',
      date: '2024-05-15',
      purpose: 'Sterilization'
    },
    {
      id: 'CON-2024-003',
      item: 'Peptone',
      batch: 'BA-2024-112',
      quantity: 5,
      unit: 'kg',
      project: 'Project Gamma',
      department: 'QC',
      consumedBy: 'Emma Wilson',
      date: '2024-05-14',
      purpose: 'Media preparation'
    },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Material Consumption</h1>
            <p className="text-slate-600 dark:text-slate-400">Track material usage across projects</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
            <TrendingDown className="w-5 h-5" />
            Record Consumption
          </button>
        </div>
      </div>

      {/* Consumption Table */}
      <div className="glass-card p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">ID</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Item</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Batch</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Quantity</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Project</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Department</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Consumed By</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Date</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {consumptions.map((con) => (
                <tr key={con.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <span className="font-mono text-sm text-slate-900 dark:text-white">{con.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <Beaker className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">{con.item}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-mono text-slate-600 dark:text-slate-400">{con.batch}</td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {con.quantity} {con.unit}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-medium">
                      {con.project}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{con.department}</td>
                  <td className="py-4 px-4 text-sm text-slate-900 dark:text-white font-medium">{con.consumedBy}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Calendar className="w-4 h-4" />
                      {con.date}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{con.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Consumption
