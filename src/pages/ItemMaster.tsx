import React, { useState } from 'react'
import { Plus, Search, Filter, Edit, Trash2, FileText, Package, Barcode } from 'lucide-react'

interface ItemMasterProps {
  user: any
}

const ItemMaster: React.FC<ItemMasterProps> = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)

  const items = [
    { 
      id: 1, 
      sku: 'CHM-001', 
      name: 'Sodium Chloride', 
      category: 'Chemicals', 
      unit: 'kg', 
      minStock: 100, 
      currentStock: 450, 
      price: 25.50,
      vendor: 'ChemSupply Inc',
      status: 'Active'
    },
    { 
      id: 2, 
      sku: 'CHM-002', 
      name: 'Ethanol 99%', 
      category: 'Chemicals', 
      unit: 'L', 
      minStock: 50, 
      currentStock: 35, 
      price: 45.00,
      vendor: 'BioSupply Corp',
      status: 'Low Stock'
    },
    { 
      id: 3, 
      sku: 'EQP-001', 
      name: 'Micropipette 100-1000µL', 
      category: 'Equipment', 
      unit: 'pcs', 
      minStock: 5, 
      currentStock: 12, 
      price: 450.00,
      vendor: 'LabEquip Ltd',
      status: 'Active'
    },
    { 
      id: 4, 
      sku: 'RAW-001', 
      name: 'Peptone', 
      category: 'Raw Materials', 
      unit: 'kg', 
      minStock: 25, 
      currentStock: 78, 
      price: 120.00,
      vendor: 'BioMaterials Co',
      status: 'Active'
    },
    { 
      id: 5, 
      sku: 'CHM-003', 
      name: 'Acetic Acid', 
      category: 'Chemicals', 
      unit: 'L', 
      minStock: 30, 
      currentStock: 15, 
      price: 35.00,
      vendor: 'ChemSupply Inc',
      status: 'Low Stock'
    },
  ]

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Item Master</h1>
            <p className="text-slate-600 dark:text-slate-400">Manage your inventory items and SKUs</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add New Item
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, SKU, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass-input w-full pl-10"
            />
          </div>
          <button className="glass-button flex items-center gap-2 px-4 py-2">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </div>

      {/* Items Table */}
      <div className="glass-card p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">SKU</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Item Name</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Category</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Unit</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Current Stock</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Min Stock</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Price</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Status</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Barcode className="w-4 h-4 text-slate-400" />
                      <span className="font-mono text-sm text-slate-900 dark:text-white">{item.sku}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{item.category}</td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{item.unit}</td>
                  <td className="py-4 px-4">
                    <span className={`font-semibold ${item.currentStock < item.minStock ? 'text-orange-600 dark:text-orange-400' : 'text-slate-900 dark:text-white'}`}>
                      {item.currentStock}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">{item.minStock}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-slate-900 dark:text-white">${item.price}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Active' 
                        ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                        : 'bg-orange-500/20 text-orange-600 dark:text-orange-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <FileText className="w-4 h-4 text-slate-600 dark:text-slate-400" />
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

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Add New Item</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Item Name</label>
                  <input type="text" className="glass-input w-full" placeholder="Enter item name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">SKU</label>
                  <input type="text" className="glass-input w-full" placeholder="Auto-generated" disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Category</label>
                  <select className="glass-input w-full">
                    <option>Chemicals</option>
                    <option>Equipment</option>
                    <option>Raw Materials</option>
                    <option>Consumables</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Unit</label>
                  <select className="glass-input w-full">
                    <option>kg</option>
                    <option>L</option>
                    <option>pcs</option>
                    <option>box</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Min Stock Level</label>
                  <input type="number" className="glass-input w-full" placeholder="0" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Unit Price</label>
                  <input type="number" className="glass-input w-full" placeholder="0.00" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Description</label>
                <textarea className="glass-input w-full" rows={3} placeholder="Enter item description"></textarea>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="submit" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all">
                  Add Item
                </button>
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 glass-button py-3">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemMaster
