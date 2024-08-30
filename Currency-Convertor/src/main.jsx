import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/theme.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </ThemeProvider>
)
