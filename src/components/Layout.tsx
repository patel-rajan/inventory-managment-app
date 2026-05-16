import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, Package, Warehouse, ShoppingCart, Users, 
  FileText, TrendingUp, Settings, LogOut, Menu, X, 
  Bell, Search, Moon, Sun, Beaker
} from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
  user: any
  onLogout: () => void
  darkMode: boolean
  toggleDarkMode: () => void
}

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout, darkMode, toggleDarkMode }) => {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [notifications, setNotifications] = useState(3)

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/items', icon: Package, label: 'Item Master' },
    { path: '/inventory', icon: Warehouse, label: 'Inventory' },
    { path: '/procurement', icon: ShoppingCart, label: 'Procurement' },
    { path: '/vendors', icon: Users, label: 'Vendors' },
    { path: '/grn', icon: FileText, label: 'GRN' },
    { path: '/consumption', icon: TrendingUp, label: 'Consumption' },
    { path: '/reports', icon: FileText, label: 'Reports' },
  ]

  if (user?.role === 'Admin') {
    menuItems.push({ path: '/users', icon: Settings, label: 'Users' })
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`glass-sidebar fixed left-0 top-0 h-full z-40 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              {sidebarOpen && (
                <div>
                  <h1 className="text-lg font-bold text-slate-900 dark:text-white">BioInventory</h1>
                  <p className="text-xs text-slate-600 dark:text-slate-400">v1.0</p>
                </div>
              )}
            </div>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="glass-button p-2 lg:hidden"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-600 dark:text-cyan-400' 
                      : 'hover:bg-white/10 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span className="font-medium">{item.label}</span>}
                </Link>
              )
            })}
          </nav>

          {/* User Profile */}
          <div className="mt-auto pt-4 border-t border-white/20 dark:border-white/10">
            <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </div>
              {sidebarOpen && (
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{user?.name}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{user?.role}</p>
                </div>
              )}
            </div>
            {sidebarOpen && (
              <button
                onClick={onLogout}
                className="w-full mt-3 flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Top Bar */}
        <header className="glass-nav sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4 flex-1">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="glass-button p-2 hidden lg:block"
              >
                <Menu className="w-5 h-5" />
              </button>
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search items, orders, vendors..."
                  className="glass-input w-full pl-10 pr-4"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="glass-button p-2 relative"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Notifications */}
              <button className="glass-button p-2 relative">
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
