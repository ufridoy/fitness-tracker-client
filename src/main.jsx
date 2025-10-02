import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}> </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
