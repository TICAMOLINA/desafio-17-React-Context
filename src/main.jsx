import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Rutas from './routes/Rutas.jsx'
import Navbar from './components/Navbar.jsx'
import { UsersProvider } from './contexts/UsersContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <UsersProvider>

    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto">
        <Rutas/>
      </div>
    </BrowserRouter>

    </UsersProvider>
  </StrictMode>,
)
