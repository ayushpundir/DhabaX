import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"; 
import { Outlet } from "react-router";

const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
            {/** if path == "/About" this outlet will be replaced with outlet
             * this Outlet will not come in our html it just get replaced 
             * we are re-using our header
             */}
            <Outlet/>
        </div>
    )
};

const routerConfig = createBrowserRouter([
    {
        path: "/", 
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element:<Contact/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {routerConfig} />);