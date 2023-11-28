import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './login.tsx'
import '@/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
