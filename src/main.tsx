import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { ThemeProvider } from '@/components/theme-provider'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider
    defaultTheme="dark"
    storageKey="vite-ui-theme"
  >
    <StrictMode>
      <Home />
    </StrictMode>
  </ThemeProvider>
)
