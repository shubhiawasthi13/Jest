import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App2.jsx'
// import App from './App.jsx'
import FunPage from './FunPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <FunPage/>
  </StrictMode>,
)
