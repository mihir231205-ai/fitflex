import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { FitnessProvider } from './context/FitnessContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FitnessProvider>
        <App />
      </FitnessProvider>
    </BrowserRouter>
  </StrictMode>,
)
