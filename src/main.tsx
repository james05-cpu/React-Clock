import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Clock from './component/clock.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Clock/>
  </React.StrictMode>,
)
