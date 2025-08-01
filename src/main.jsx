
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // <-- 1. IMPORT THIS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. ADD THE BROWSER ROUTER WRAPPER AND BASENAME PROP  */}
    <BrowserRouter basename="/Food">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)