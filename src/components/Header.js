import { LOGO_URL } from "../utils/constants"; 
import {useState} from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 

const Header = () => {

    const [user, setUser] = useState("login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className = "logo-container">
                <img className = "logo" 
                src = {LOGO_URL}>

                </img>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>
                        online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About Us</Link></li>
                    <li><Link to = "/contact">Contact Us</Link></li>
                    <li>cart</li>
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