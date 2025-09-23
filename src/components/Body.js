import resObj from "../utils/mockData";

import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className = "search">Search</div>
            <div className ="res-container"> 
                {resObj.map((restaurants) => (
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