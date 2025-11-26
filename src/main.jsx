import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'sonner'
import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster richColors position="bottom-right" />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
