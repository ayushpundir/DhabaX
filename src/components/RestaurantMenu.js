/**
 * initially we have tried to use live data from swiggy website but we have faced
 * two problems
 * i) the swiggy backend keeps on changing how data is shared with the frontend
 * ii) we need to enable the cors pluging to call the swiggy api, any unkown 
 * can't call the swiggy api even the local host
 */

import Shimmer from "./Shimmer";
import resObj from "../utils/mockData";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantsMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) = (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -{" Rs."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
            ))}
            </ul>
        </div>
    )
}
export default RestaurantsMenu;