import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

const rootElement = document.getElementById("root")
const root = createRoot(rootElement!)

if (root) {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
