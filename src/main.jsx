import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import App from './App'
import Home from '/pages/Home'
import Prueba from '/pages/prueba'
import '/styles/index.css'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prueba" element={<Prueba />} />
    </Routes>
  </Router>
)
