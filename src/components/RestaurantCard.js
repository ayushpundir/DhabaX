// import { CDN_URL } from "../utils/constants";

// const RestaurantCard = ({resData}) => { // these are props which contain object of everything we pass to it prop = {resData: restaurant data}
//  const {name, cuisines, avgRating, cloudinaryImageId} = resData.info;
//     return (
//         <div data-testid="resCard" className= "m-4 p-4 w-[200px] rounded-lg bg-gray-200 hover:bg-gray-200" id = {resData.info.id}>
//             <img className = "res-logo rounded-lg"
//             src = {CDN_URL+cloudinaryImageId}
//             />
//             <h3 className="font-bold py-4 text-lg">{name}</h3>
//             <h4>{cuisines.join(", ")}</h4>
//             <h4>rating:{avgRating}</h4>
//         </div>
//     )
// };
// export default RestaurantCard;

// /**
//  *  
//  * creating a higer order component to show promoted restaurants
//  * withPromotedLabel is a function (higher order component) which takes RestaurantCard component as an argument
//    and returns the promoted list} RestaurantCard 
//  */
// /**
//  * it is returning another functional component which takes props as argument
//  */
// export const withPromotedLabel = (RestaurantCard) => {
//     return (props) => {
//         return (
//             <div>
//                 <div className="absolute bg-black text-white px-2 py-1 rounded-bl-lg rounded-tr-lg">PROMOTED</div>
//                 <RestaurantCard {...props}/>
//             </div>
//         )
//     }
// }
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;

  return (
    <div
      data-testid="resCard"
      className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="h-40 w-full rounded-t-xl object-cover"
        />

        {/* Rating Badge */}
        <div
          className={`absolute bottom-2 left-2 rounded-md px-2 py-1 text-xs font-semibold text-white ${
            avgRating >= 4.5
              ? "bg-green-600"
              : avgRating >= 4.0
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          ⭐ {avgRating}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1 p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-gray-800">
          {name}
        </h3>
        <p className="line-clamp-2 text-xs text-gray-500">
          {cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;

/* ---------------- HOC ---------------- */
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <span className="absolute left-2 top-2 z-10 rounded-md bg-black/80 px-2 py-1 text-[10px] font-semibold text-white">
        PROMOTED
      </span>
      <RestaurantCard {...props} />
    </div>
  );
};