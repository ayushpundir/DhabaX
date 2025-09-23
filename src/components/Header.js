import { LOGO_URL } from "../utils/constants"; 
import {useState} from "react";

const Header = () => {

    const [user, setUser] = useState("login");

    return (
        <div className="header">
            <div className = "logo-container">
                <img className = "logo" 
                src = {LOGO_URL}>

                </img>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>about us</li>
                    <li>contact us</li>
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