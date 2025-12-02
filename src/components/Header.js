import { LOGO_URL } from "../utils/constants"; 
import {useState} from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 
const Header = () => {

    const [user, setUser] = useState("login");
    const onlineStatus = useOnlineStatus();

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
                    <li className="px-4">cart</li>
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
                </ul>
            </div>
        </div>
    )
};

export default Header;