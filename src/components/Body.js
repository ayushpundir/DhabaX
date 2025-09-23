import resObj from "../utils/mockData";
import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    //local state variable 
    //this listResturant is a super powerful react variable this is how we create it
    // inside useState we give default values and we use a set{variable_name}
    // method to update this react variable this set method triggers the diff algo

    //this super powerful variable keeps the ui in sync with data layer
    //as soon as it change it will automatically refresh our component

    //whenever a state variable changes react will re-render my component
    const [listRestaurants, setlistRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        // console.log(json);
        setlistRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } 

    //this is Conditional Rendering
    if(listRestaurants.length === 0) return <Shimmer/>

    return (
        <div className="body">
            <div className = "filer">
                <button className = "filter-btn"
                onClick={()=>{
                    const newList = listRestaurants.filter((restaurants) => restaurants.info.avgRating>=4.5);
                    setlistRestaurants(newList);
                }
            }
                >
                    top rated restaurants</button>
            </div>
            <div className ="res-container"> 
                {listRestaurants.map((restaurants) => (
                    <RestaurantCard
                    key = {restaurants.info.id}
                    resData = {restaurants}
                    />
                ))}
            </div>
        </div>
    )
}; 

export default Body;