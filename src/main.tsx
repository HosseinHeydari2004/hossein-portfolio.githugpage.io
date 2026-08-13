import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'katex/dist/katex.min.css'
import './index.css'
import './layout.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/hossein-portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
