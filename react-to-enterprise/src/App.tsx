import React from 'react'
import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Dashboard from './views/dashboard/Dashboard'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import DashboardLayout from './layout/DashboardLayout'
import AuthLayout from './layout/AuthLayout'
import Welcome from './views/dashboard/Welcome'
import Settings from './views/dashboard/Setting'
import Profile from './views/dashboard/Profile'

function App() {
  return (
    <BrowserRouter>
      <div className="App mx-auto max-w-6xl text-center my-8">
        <h1 className="font-semibold text-2xl">
          React - The Road To Enterprise
        </h1>
        <nav className="my-8 space-x-4">
          <Link to="/">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <div>
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Dashboard />}>
                <Route index element={<Welcome />} />
                <Route path="/settings" element={<Settings />} />{' '}
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
