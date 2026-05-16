import React, { useState } from 'react'
import { Package, TrendingUp, TrendingDown, AlertCircle, MapPin, Calendar } from 'lucide-react'

interface InventoryProps {
  user: any
}

const Inventory: React.FC<InventoryProps> = ({ user }) => {
  const [selectedWarehouse, setSelectedWarehouse] = useState('all')

  const warehouses = [
    { id: 'all', name: 'All Warehouses' },
    { id: 'wh1', name: 'Main Warehouse' },
    { id: 'wh2', name: 'Lab Storage A' },
    { id: 'wh3', name: 'Lab Storage B' },
  ]

  const inventory = [
    {
      id: 1,
      item: 'Sodium Chloride',
      sku: 'CHM-001',
      warehouse: 'Main Warehouse',
      batch: 'BA-2024-001',
      quantity: 450,
      unit: 'kg',
      expiry: '2025-12-31',
      location: 'A-12-03',
      status: 'Good'
    },
    {
      id: 2,
      item: 'Ethanol 99%',
      sku: 'CHM-002',
      warehouse: 'Lab Storage A',
      batch: 'BA-2024-045',
      quantity: 35,
      unit: 'L',
      expiry: '2024-08-15',
      location: 'B-05-12',
      status: 'Low Stock'
    },
    {
      id: 3,
      item: 'Peptone',
      sku: 'RAW-001',
      warehouse: 'Main Warehouse',
      batch: 'BA-2024-112',
      quantity: 78,
      unit: 'kg',
      expiry: '2024-07-01',
      location: 'C-08-05',
      status: 'Expiring Soon'
    },
    {
      id: 4,
      item: 'Acetic Acid',
      sku: 'CHM-003',
      warehouse: 'Lab Storage B',
      batch: 'BA-2024-089',
      quantity: 15,
      unit: 'L',
      expiry: '2024-06-25',
      location: 'A-03-08',
      status: 'Expiring Soon'
    },
    {
      id: 5,
      item: 'Micropipette Tips',
      sku: 'CON-001',
      warehouse: 'Lab Storage A',
      batch: 'BA-2024-156',
      quantity: 2500,
      unit: 'pcs',
      expiry: '2026-01-15',
      location: 'D-12-01',
      status: 'Good'
    },
  ]

  const movements = [
    { type: 'Inward', item: 'Sodium Chloride', quantity: '+100 kg', date: '2024-05-15', user: 'Sarah Chen' },
    { type: 'Outward', item: 'Ethanol 99%', quantity: '-25 L', date: '2024-05-15', user: 'Mike Johnson' },
    { type: 'Transfer', item: 'Peptone', quantity: '50 kg', date: '2024-05-14', user: 'Emma Wilson' },
    { type: 'Adjustment', item: 'Acetic Acid', quantity: '-5 L', date: '2024-05-14', user: 'System' },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Inventory Management</h1>
            <p className="text-slate-600 dark:text-slate-400">Real-time stock tracking across all locations</p>
          </div>
          <div className="flex gap-3">
            <button className="glass-button flex items-center gap-2 px-4 py-2">
              <TrendingUp className="w-5 h-5" />
              Stock In
            </button>
            <button className="glass-button flex items-center gap-2 px-4 py-2">
              <TrendingDown className="w-5 h-5" />
              Stock Out
            </button>
          </div>
        </div>
      </div>

      {/* Warehouse Filter */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-4">
          <MapPin className="w-5 h-5 text-slate-400" />
          <select 
            value={selectedWarehouse}
            onChange={(e) => setSelectedWarehouse(e.target.value)}
            className="glass-input flex-1 max-w-xs"
          >
            {warehouses.map(wh => (
              <option key={wh.id} value={wh.id}>{wh.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Current Stock</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Item</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Batch</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Warehouse</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Location</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Quantity</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Expiry</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{item.item}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{item.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-mono text-slate-600 dark:text-slate-400">{item.batch}</td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{item.warehouse}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-medium">
                      {item.location}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {item.quantity} {item.unit}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Calendar className="w-4 h-4" />
                      {item.expiry}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Good' 
                        ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                        : item.status === 'Low Stock'
                        ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400'
                        : 'bg-red-500/20 text-red-600 dark:text-red-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Movements */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Recent Movements</h2>
        <div className="space-y-3">
          {movements.map((movement, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  movement.type === 'Inward' ? 'bg-green-500/20' :
                  movement.type === 'Outward' ? 'bg-orange-500/20' :
                  movement.type === 'Transfer' ? 'bg-blue-500/20' :
                  'bg-purple-500/20'
                }`}>
                  {movement.type === 'Inward' ? <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" /> :
                   movement.type === 'Outward' ? <TrendingDown className="w-5 h-5 text-orange-600 dark:text-orange-400" /> :
                   movement.type === 'Transfer' ? <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" /> :
                   <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{movement.type}: {movement.item}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{movement.user} • {movement.date}</p>
                </div>
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">{movement.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Inventory
