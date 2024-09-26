import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalProvider } from './context/GloblatState.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
)
