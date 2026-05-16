import React, { useState } from 'react'
import { Plus, Search, Star, Mail, Phone, MapPin, TrendingUp } from 'lucide-react'

interface VendorsProps {
  user: any
}

const Vendors: React.FC<VendorsProps> = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const vendors = [
    {
      id: 1,
      name: 'ChemSupply Inc',
      category: 'Chemicals',
      contact: 'John Anderson',
      email: 'john@chemsupply.com',
      phone: '+1 (555) 123-4567',
      location: 'Boston, MA',
      rating: 4.8,
      orders: 156,
      totalValue: 487500,
      leadTime: '5-7 days',
      status: 'Active'
    },
    {
      id: 2,
      name: 'BioSupply Corp',
      category: 'Raw Materials',
      contact: 'Sarah Miller',
      email: 'sarah@biosupply.com',
      phone: '+1 (555) 234-5678',
      location: 'San Francisco, CA',
      rating: 4.6,
      orders: 98,
      totalValue: 325000,
      leadTime: '7-10 days',
      status: 'Active'
    },
    {
      id: 3,
      name: 'LabEquip Ltd',
      category: 'Equipment',
      contact: 'Michael Chen',
      email: 'michael@labequip.com',
      phone: '+1 (555) 345-6789',
      location: 'New York, NY',
      rating: 4.9,
      orders: 67,
      totalValue: 892000,
      leadTime: '10-14 days',
      status: 'Active'
    },
    {
      id: 4,
      name: 'BioMaterials Co',
      category: 'Raw Materials',
      contact: 'Emma Davis',
      email: 'emma@biomaterials.com',
      phone: '+1 (555) 456-7890',
      location: 'Chicago, IL',
      rating: 4.5,
      orders: 124,
      totalValue: 256000,
      leadTime: '5-8 days',
      status: 'Active'
    },
  ]

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.contact.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Vendor Management</h1>
            <p className="text-slate-600 dark:text-slate-400">Manage your supplier relationships</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg">
            <Plus className="w-5 h-5" />
            Add Vendor
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="glass-card p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search vendors by name, category, or contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="glass-input w-full pl-10"
          />
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredVendors.map((vendor) => (
          <div key={vendor.id} className="glass-card p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  {vendor.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{vendor.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{vendor.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{vendor.rating}</span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="w-4 h-4" />
                {vendor.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4" />
                {vendor.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4" />
                {vendor.location}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Orders</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{vendor.orders}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Total Value</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">${(vendor.totalValue / 1000).toFixed(0)}k</p>
              </div>
              <div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Lead Time</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{vendor.leadTime}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 glass-button py-2 text-sm">View Details</button>
              <button className="flex-1 glass-button py-2 text-sm">Contact</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vendors
