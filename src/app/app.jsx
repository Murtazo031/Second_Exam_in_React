import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import MainPage from '../pages/main/main-page'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage/>
  </StrictMode>,
)
