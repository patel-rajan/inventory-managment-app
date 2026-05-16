import React from 'react'
import { 
  TrendingUp, TrendingDown, Package, AlertTriangle, 
  ShoppingCart, Users, DollarSign, Activity, Calendar,
  ArrowUpRight, ArrowDownRight
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface DashboardProps {
  user: any
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const stats = [
    { 
      label: 'Total Stock Value', 
      value: '$2,847,392', 
      change: '+12.5%', 
      trend: 'up', 
      icon: DollarSign,
      color: 'from-green-400 to-emerald-500'
    },
    { 
      label: 'Low Stock Items', 
      value: '23', 
      change: '-5 from last week', 
      trend: 'down', 
      icon: AlertTriangle,
      color: 'from-orange-400 to-red-500'
    },
    { 
      label: 'Pending Orders', 
      value: '47', 
      change: '+8 new today', 
      trend: 'up', 
      icon: ShoppingCart,
      color: 'from-blue-400 to-cyan-500'
    },
    { 
      label: 'Active Vendors', 
      value: '156', 
      change: '+12 this month', 
      trend: 'up', 
      icon: Users,
      color: 'from-purple-400 to-pink-500'
    },
  ]

  const inventoryData = [
    { month: 'Jan', inward: 4000, outward: 2400, value: 2400 },
    { month: 'Feb', inward: 3000, outward: 1398, value: 2210 },
    { month: 'Mar', inward: 2000, outward: 9800, value: 2290 },
    { month: 'Apr', inward: 2780, outward: 3908, value: 2000 },
    { month: 'May', inward: 1890, outward: 4800, value: 2181 },
    { month: 'Jun', inward: 2390, outward: 3800, value: 2500 },
  ]

  const categoryData = [
    { name: 'Raw Materials', value: 35, color: '#06b6d4' },
    { name: 'Chemicals', value: 25, color: '#3b82f6' },
    { name: 'Equipment', value: 20, color: '#8b5cf6' },
    { name: 'Consumables', value: 15, color: '#ec4899' },
    { name: 'Others', value: 5, color: '#f59e0b' },
  ]

  const recentActivity = [
    { action: 'GRN Created', item: 'Sodium Chloride - 500kg', user: 'Sarah Chen', time: '5 min ago', status: 'success' },
    { action: 'Low Stock Alert', item: 'Ethanol 99% - 200L', user: 'System', time: '12 min ago', status: 'warning' },
    { action: 'PO Approved', item: 'PO-2024-0847', user: 'John Smith', time: '1 hour ago', status: 'success' },
    { action: 'Vendor Added', item: 'BioSupply Corp', user: 'Mike Johnson', time: '2 hours ago', status: 'info' },
    { action: 'Stock Transfer', item: 'Lab A → Lab B', user: 'Emma Wilson', time: '3 hours ago', status: 'success' },
  ]

  const expiringItems = [
    { name: 'Acetic Acid', batch: 'BA-2024-001', expiry: '2024-06-15', quantity: '50L', days: 12 },
    { name: 'Glucose Solution', batch: 'BA-2024-045', expiry: '2024-06-20', quantity: '100L', days: 17 },
    { name: 'Buffer Solution', batch: 'BA-2024-089', expiry: '2024-06-25', quantity: '25L', days: 22 },
    { name: 'Peptone', batch: 'BA-2024-112', expiry: '2024-07-01', quantity: '10kg', days: 28 },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Welcome back, {user?.name}! 👋
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Here's what's happening with your inventory today
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Calendar className="w-4 h-4" />
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowDownRight className="w-5 h-5 text-red-500" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{stat.label}</p>
              <p className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-slate-600 dark:text-slate-400'}`}>
                {stat.change}
              </p>
            </div>
          )
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Movement Chart */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Inventory Movement</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px'
                }} 
              />
              <Legend />
              <Line type="monotone" dataKey="inward" stroke="#06b6d4" strokeWidth={2} />
              <Line type="monotone" dataKey="outward" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Stock by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity & Expiry Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent Activity</h2>
            <Activity className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'warning' ? 'bg-orange-500' :
                  'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{activity.action}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{activity.item}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expiring Items */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Expiring Soon</h2>
            <AlertTriangle className="w-5 h-5 text-orange-500" />
          </div>
          <div className="space-y-3">
            {expiringItems.map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Batch: {item.batch}</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-medium">
                    {item.days} days
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Qty: {item.quantity}</span>
                  <span>Exp: {item.expiry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
