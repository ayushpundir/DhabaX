import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => { // these are props which contain object of everything we pass to it prop = {0:{info:{name:burgerKing}}}
 const {name, cuisines, avgRating, cloudinaryImageId} = resData.info;
    return (
        <div className= "res-card" id = {resData.info.id}>
            <img className = "res-logo"
            src = {CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>rating:{avgRating}</h4>
        </div>
    )
};
export default RestaurantCard;