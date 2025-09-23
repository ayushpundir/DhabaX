import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {

    return (
        <div className= "res-card">
            <img className = "res-logo"
            src = {CDN_URL+resData.info.cloudinaryImageId}
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>rating:{resData.info.avgRating}</h4>
        </div>
    )
};
export default RestaurantCard;