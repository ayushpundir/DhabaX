import { LOGO_URL } from "../utils/constants"; 
import {useState} from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import { useContext } from "react";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";
const Header = () => {

    const [user, setUser] = useState("login");
    const onlineStatus = useOnlineStatus();

    //const data = useContext(UserContext);
    const {loggedInUser} = useContext(UserContext); // we just have to write this then no need of context drilling
    /**
     * only the data which we have to use at multiple places we have to put in context
     * don't put everything in context some might think that there is no need of props at all we can put everything in context
     * that's wrong because context is used for only those data which we have to use at multiple places 
     * because context has some performance issues
     * in class based components we have to use UserContext.consumer as we can't use hooks there
     */

    const cartItems = useSelector((store) => store.cart.items);
    //selecting right portion of the store is important to optimize the performance of the app
    // we can't do const cartItems = useSelector((store) => store); because whenever any change happens in the store the entire component will re render
    // but if we select only cart items then only when cart items change this component will re render

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className = "logo-container">
                <img className = "w-32" 
                src = {LOGO_URL}>

                </img>
            </div>
            <div className = "flex items-center">
                <ul className = "flex p-4 m-4">
                    <li className="px-4">
                        online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4"><Link to = "/">Home</Link></li>
                    <li className="px-4"><Link to = "/about">About Us</Link></li>
                    <li className="px-4"><Link to = "/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to = "/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to = "/cart">Cart - {cartItems.length} items</Link></li>
                    <button
            onClick={()=>{
                if(user==="login"){
                    setUser("logout");
                }
                else{
                    setUser("login");
                }
            }}
            >{user}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;