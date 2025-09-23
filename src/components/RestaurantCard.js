import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const {name, categories, stars} = resData;

    return (
        <div className= "res-card">
            <img className = "res-logo"
            src = {CDN_URL}
            />
            <h3>{name}</h3>
            <h4>{categories.join(", ")}</h4>
            <h4>rating:{stars}</h4>
        </div>
    )
};
export default RestaurantCard;