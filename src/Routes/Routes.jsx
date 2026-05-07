import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Hero from "../Components/Hero/Hero";
import Orders from "../Components/Orders/Orders";
import Profile from "../Components/Profile/Profile";
import Privateroutes from "./Privateroutes";
import Dashboard from "../Components/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Home,
        errorElement:<div><h2 className="text-center my-40 text-6xl">404 Not Found</h2></div>,
        children:[
            {
                index:true,
                Component:Hero

            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/orders',
               element:<Privateroutes>
                <Orders></Orders>
               </Privateroutes>
            },
            {
                path:'/profile',
                element:<Privateroutes>
                <Profile></Profile>
               </Privateroutes>
            },
            {
                path:'/dashboard',
                element:<Privateroutes>
                <Dashboard></Dashboard>
               </Privateroutes>
            },
        ]

    }
])
export default router;