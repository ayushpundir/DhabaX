import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => { // these are props which contain object of everything we pass to it prop = {resData: restaurant data}
 const {name, cuisines, avgRating, cloudinaryImageId} = resData.info;
    return (
        <div className= "m-4 p-4 w-[200px] rounded-lg bg-gray-200 hover:bg-gray-200" id = {resData.info.id}>
            <img className = "res-logo rounded-lg"
            src = {CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>rating:{avgRating}</h4>
        </div>
    )
};
export default RestaurantCard;

/**
 *  
 * creating a higer order component to show promoted restaurants
 * withPromotedLabel is a function (higher order component) which takes RestaurantCard component as an argument
   and returns the promoted list} RestaurantCard 
 */
/**
 * it is returning another functional component which takes props as argument
 */
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <div className="absolute bg-black text-white px-2 py-1 rounded-bl-lg rounded-tr-lg">PROMOTED</div>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}