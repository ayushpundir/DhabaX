import resObj from "../utils/mockData";
import { useState } from "react";

import RestaurantCard from "./RestaurantCard";

const Body = () => {
    //local state variable 
    const [listRestaurants, setlistRestaurants] = useState([...resObj]);
    return (
        <div className="body">
            <div className = "filer">
                <button className = "filter-btn"
                onClick={()=>{
                    const newList = listRestaurants.filter((restaurants) => restaurants.stars>=4);
                    setlistRestaurants(newList);
                }
            }
                >
                    top rated restaurants</button>
            </div>
            <div className ="res-container"> 
                {listRestaurants.map((restaurants) => (
                    <RestaurantCard
                    key = {restaurants._id.$oid}
                    resData = {restaurants}
                    />
                ))}
            </div>
        </div>
    )
}; 

export default Body;