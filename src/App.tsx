import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ItemMaster from './pages/ItemMaster'
import Inventory from './pages/Inventory'
import Procurement from './pages/Procurement'
import Vendors from './pages/Vendors'
import GRN from './pages/GRN'
import Consumption from './pages/Consumption'
import Reports from './pages/Reports'
import Users from './pages/Users'
import Layout from './components/Layout'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      setIsAuthenticated(true)
      setUser(JSON.parse(userData))
    }

    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleLogin = (userData: any, token: string) => {
    setIsAuthenticated(true)
    setUser(userData)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <Login onLogin={handleLogin} />
          } 
        />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Layout user={user} onLogout={handleLogout} darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard user={user} />} />
                  <Route path="/items" element={<ItemMaster user={user} />} />
                  <Route path="/inventory" element={<Inventory user={user} />} />
                  <Route path="/procurement" element={<Procurement user={user} />} />
                  <Route path="/vendors" element={<Vendors user={user} />} />
                  <Route path="/grn" element={<GRN user={user} />} />
                  <Route path="/consumption" element={<Consumption user={user} />} />
                  <Route path="/reports" element={<Reports user={user} />} />
                  <Route path="/users" element={<Users user={user} />} />
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  )
}

export default App
