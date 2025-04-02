import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Theme from './components/Theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme />
  </StrictMode>,
)
