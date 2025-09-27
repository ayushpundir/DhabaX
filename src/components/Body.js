import resObj from "../utils/mockData";
import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    //local state variable 
    //this listResturant is a super powerful react variable this is how we create it
    // inside useState we give default values and we use a set{variable_name}
    // method to update this react variable this set method triggers the diff algo

    //this super powerful variable keeps the ui in sync with data layer
    //as soon as it change it will automatically refresh our component

    //whenever a state variable changes react will re-render my component
    const [listRestaurants, setlistRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]); // filtered list shown
    const [searchText, setsearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []); //since we have passed an empty object it will be called only ones

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        // console.log(json);
        setlistRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // filtered list initially same as full list

    } 

    //this is Conditional Rendering
if (filteredRestaurants.length === 0) return <Shimmer />;
    return (
        <div className="body">
            <div className = "filer">

                <input type="text" placeholder="search here" value = {searchText}
                onChange={(e)=>{
                    setsearchText(e.target.value);
                }}>
                    
                </input>
                <button 
                onClick={()=>{
                    const searching = listRestaurants.filter((restaurant)=>{
                        return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                    });
                    setfilteredRestaurants(searching);
                    
                }}
                >search</button>

                <button className = "filter-btn"
                onClick={()=>{
                    const newList = listRestaurants.filter((restaurants) => restaurants.info.avgRating>=4.5);
                    setfilteredRestaurants(newList);
                }
            }
                >
                    top rated restaurants</button>
            </div>
            <div className ="res-container"> 
                {filteredRestaurants.map((restaurants) => (
                    <Link to={"/restaurants/"+restaurants.info.id} key = {restaurants.info.id}><RestaurantCard
                    resData = {restaurants}
                    />
                    </Link>
                ))}
            </div>
        </div>
    )
}; 

export default Body;