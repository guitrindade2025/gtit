import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global-no-select.css'
import './styles/text-selection.css'
import App from './App.tsx'

// Adicionar classe global para desativar seleção de texto
document.body.classList.add('no-text-select');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
