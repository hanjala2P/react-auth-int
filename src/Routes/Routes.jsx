import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Hero from "../Components/Hero/Hero";

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
                path:'register',
                Component:Register
            },
            {
                path:'login',
                Component:Login
            }
        ]

    }
])
export default router;