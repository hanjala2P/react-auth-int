import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import router from './Routes/Routes.jsx'
import { createContext } from 'react'
import AuthProvider from './Context/AuthContext/AuthProvider.jsx'

export const AuthContext = createContext(null);
const userInfo = {
  email:'hanjala@gmail.com'

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
   <RouterProvider router ={router}/>
</AuthProvider>
  </StrictMode>,
)
