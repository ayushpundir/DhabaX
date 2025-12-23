// import { LOGO_URL } from "../utils/constants"; 
// import {useState} from "react";
// import {Link} from "react-router";
// import useOnlineStatus from "../utils/useOnlineStatus"; 
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

// import { useSelector } from "react-redux";
// const Header = () => {

//     const [user, setUser] = useState("login");
//     const onlineStatus = useOnlineStatus();

//     //const data = useContext(UserContext);
//     const {loggedInUser} = useContext(UserContext); // we just have to write this then no need of context drilling
//     /**
//      * only the data which we have to use at multiple places we have to put in context
//      * don't put everything in context some might think that there is no need of props at all we can put everything in context
//      * that's wrong because context is used for only those data which we have to use at multiple places 
//      * because context has some performance issues
//      * in class based components we have to use UserContext.consumer as we can't use hooks there
//      */

//     const cartItems = useSelector((store) => store.cart.items);
//     //selecting right portion of the store is important to optimize the performance of the app
//     // we can't do const cartItems = useSelector((store) => store); because whenever any change happens in the store the entire component will re render
//     // but if we select only cart items then only when cart items change this component will re render

//     return (
//         <div className="flex justify-between bg-gray-100 shadow-lg">
//             <div className = "logo-container">
//                 <img className = "w-32" 
//                 src = {LOGO_URL}>

//                 </img>
//             </div>
//             <div className = "flex items-center">
//                 <ul className = "flex p-4 m-4">
//                     <li className="px-4">
//                         online Status: {onlineStatus ? "🟢" : "🔴"}
//                     </li>
//                     <li className="px-4"><Link to = "/">Home</Link></li>
//                     <li className="px-4"><Link to = "/about">About Us</Link></li>
//                     <li className="px-4"><Link to = "/contact">Contact Us</Link></li>
//                     <li className="px-4"><Link to = "/grocery">Grocery</Link></li>
//                     <li className="px-4"><Link to = "/cart">Cart - {cartItems.length} items</Link></li>
//                     <button
//             onClick={()=>{
//                 if(user==="login"){
//                     setUser("logout");
//                 }
//                 else{
//                     setUser("login");
//                 }
//             }}
//             >{user}</button>
//                     <li className="px-4 font-bold">{loggedInUser}</li>
//                 </ul>
//             </div>
//         </div>
//     )
// };

// export default Header;
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [user, setUser] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO_URL} alt="App Logo" className="h-10 w-auto" />
          <span className="text-xl font-semibold tracking-tight text-gray-800">
            DhabaX
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          {/* Online Status */}
          <div className="flex items-center gap-2 text-xs">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="text-gray-600">
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </div>

          {/* Links */}
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
            { to: "/grocery", label: "Grocery" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-orange-600 ${
                  isActive ? "text-orange-600" : "text-gray-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative rounded-full bg-gray-100 px-4 py-1 text-gray-800 hover:bg-gray-200"
          >
            Cart
            <span className="ml-2 rounded-full bg-orange-500 px-2 py-0.5 text-xs text-white">
              {cartItems.length}
            </span>
          </NavLink>

          {/* User */}
          <span className="hidden text-gray-600 sm:block">
            Hi, <span className="font-semibold">{loggedInUser}</span>
          </span>

          {/* Login / Logout */}
          <button
            onClick={() => setUser(user === "Login" ? "Logout" : "Login")}
            className="rounded-lg border border-gray-300 px-4 py-1 text-sm font-medium transition hover:bg-gray-100"
          >
            {user}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;