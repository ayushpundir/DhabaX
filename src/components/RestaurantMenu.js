/**
 * initially we have tried to use live data from swiggy website but we have faced
 * two problems
 * i) the swiggy backend keeps on changing how data is shared with the frontend
 * ii) we need to enable the cors pluging to call the swiggy api, any unkown 
 * can't call the swiggy api even the local host
 * 
 * so now I'm using mocked data for development purpose
 */

// import Shimmer from "./Shimmer";
// import { useParams } from "react-router";
// import useRestaurantMenu from "../utils/useRestaurantMenu";


// const RestaurantsMenu = () => {

//     const { resId } = useParams();
//     const resInfo = useRestaurantMenu(resId);

//     if(resInfo===null) return <Shimmer />;
//     const { name, cuisines, costForTwoMessage } =
//         resInfo?.cards[2]?.card?.card?.info;

//     const { itemCards } =
//         resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//     console.log(itemCards);

//     return (
//         <div className="menu">
//             <h1>{name}</h1>
//             <p>
//                 {cuisines.join(", ")} - {costForTwoMessage}
//             </p>
//             <h2>Menu</h2>
//             <ul>
//                 {itemCards.map((item) = (
//                     <li key={item.card.info.id}>
//                         {item.card.info.name} -{" Rs."}
//                         {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//                     </li>
//             ))}
//             </ul>
//         </div>
//     )
// }
// export default RestaurantsMenu;

/*******************************************************************/
//using mock data 
/***************************************************************** */
import { useParams } from "react-router";
import res1 from "../utils/res1";
import allResMenuInfo from "../utils/allResMenuInfo";
import res69500 from "../utils/res69500";
import res69701 from "../utils/res69701";
import res69801 from "../utils/res69801";
import res73011 from "../utils/res73011";
import res311806 from "../utils/res311806";
import res807972 from "../utils/res807972";
import res1091924 from "../utils/res1091924";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {
    const { resId } = useParams();
    const resInfo = allResMenuInfo[resId];
    console.log(resInfo);

    const {name, cuisines, costForTwoMessage} = resInfo?.data.cards[2].card.card.info;

    const { itemCards } =  resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    //console.log(resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards); these are the cards of the entire menu i want to filter out  all the categories

    const categories = resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories); // contains all the categories of menu

    return (
        <div className="menu text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className = "font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

            {/** category acordion */}
            {categories.map((category) => (
                <div key={category.card.card.title} className="my-8">
                    <RestaurantCategory data = {category.card.card}/>
                    </div>

            ))}
        </div>
    );
};
export default RestaurantsMenu;