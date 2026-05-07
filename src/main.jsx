import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import router from './Routes/Routes.jsx'
import { createContext } from 'react'

export const AuthContext = createContext(null);
const userInfo = {
  email:'hanjala@gmail.com'

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext value={userInfo}>
        <RouterProvider router ={router}/>
    </AuthContext>
  </StrictMode>,
)
