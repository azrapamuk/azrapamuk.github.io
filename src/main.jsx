import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './style.css'

// HashRouter keeps links working on GitHub Pages (URLs look like /#/gamedev)
createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
