import React from 'react'
import ReactDOM from 'react-dom/client'
import { Card } from './components/card'
import { NavBar } from './components/navbar'
import './index.css'
import { App } from './pages/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
