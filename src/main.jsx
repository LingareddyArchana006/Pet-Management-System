import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PetProfilePage from './components/Petprofilepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PetProfilePage />
  </StrictMode>,
)
