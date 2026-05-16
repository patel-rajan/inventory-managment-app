import React, { useState } from 'react'
import { Beaker, Mail, Lock, Eye, EyeOff } from 'lucide-react'

interface LoginProps {
  onLogin: (user: any, token: string) => void
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('admin@bioinventory.com')
  const [password, setPassword] = useState('admin123')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      const mockUser = {
        id: 1,
        name: 'John Smith',
        email: email,
        role: 'Admin',
        department: 'Operations'
      }
      const mockToken = 'mock-jwt-token-' + Date.now()
      onLogin(mockUser, mockToken)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-4 shadow-2xl">
            <Beaker className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">BioInventory</h1>
          <p className="text-slate-600 dark:text-slate-400">Inventory & Procurement Management</p>
        </div>

        {/* Login Card */}
        <div className="glass-card p-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Welcome Back</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-input w-full pl-10"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="glass-input w-full pl-10 pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-white/30" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Remember me</span>
              </label>
              <a href="#" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 font-semibold">Demo Credentials:</p>
            <p className="text-xs text-slate-700 dark:text-slate-300">Email: admin@bioinventory.com</p>
            <p className="text-xs text-slate-700 dark:text-slate-300">Password: admin123</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
          © 2024 BioInventory. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Login
