import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"; 
import RestaurantsMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider} from "react-router";
import { Outlet } from "react-router";
import UserContext from "/src/utils/UserContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

    const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState("default user");

    useEffect(() => {
        //this useEffect will run only once when AppLayout is mounted
        //here we can make an API call and get the user info and update the userContext value
        setUserName("Ayush Pundir");
    }, []);

    //suppose we have done something in our project and our user is chaged i.e. value in userContext now how that can be updated wherever we have used it

    //this is the root of our application we need to provide our appStore to this  
    return ( 
        <Provider store={appStore}>
        <UserContext.Provider value = {{
            loggedInUser: userName, setUserName
        }}> 


        <div className = "app">

            <Header/>
            {/** if path == "/About" this outlet will be replaced with outlet
             * this Outlet (it is like a placeholder) will not come in our html it just get replaced 
             * we are re-using our header component
             */}
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense> 
            },
            {
                path: "/restaurants/:resId", //dynamic id
                element:<RestaurantsMenu/>
            },{
                path: "/cart",
                element:<Cart/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {routerConfig} />);