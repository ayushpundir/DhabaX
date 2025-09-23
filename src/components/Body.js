import resObj from "../utils/mockData";
import { useState } from "react";

import RestaurantCard from "./RestaurantCard";

const Body = () => {
    //local state variable 
    //this listResturant is a super powerful react variable this is how we create it
    // inside useState we give default values and we use a set{variable_name}
    // method to update this react variable this set method triggers the diff algo

    //this super powerful variable keeps the ui in sync with data layer
    //as soon as it change it will automatically refresh our component

    //whenever a state variable changes react will re-render my component
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