/**
 * initially we have tried to use live data from swiggy website but we have faced
 * two problems
 * i) the swiggy backend keeps on changing how data is shared with the frontend
 * ii) we need to enable the cors pluging to call the swiggy api, any unkown 
 * can't call the swiggy api even the local host
 */

import Shimmer from "./Shimmer";
import resObj from "../utils/mockData";

import {useEffect, useState} from "react";
import { useParams } from "react-router";


const RestaurantsMenu = ()=> {

    const {resId} = useParams();
    const [hotel, sethotel] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.32750&lng=78.03250&restaurantId="+resId);
        const json = await data.json();
        sethotel(json.data.cards); // now this will be our 2nd render
        //this hotel contains hotel and menu details 
        // this hotel is an array of of object first object have hotel name 
        // and somewhere in 4th object we have menu
    }
    if(hotel.length===0) return <Shimmer/>
    console.log(hotel);
    
    const {itemCards} = hotel[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div>
            <h1>{hotel[0].card.card.text}</h1>
            <ul>
            {itemCards.map((item)=>{
                const {id, name}=item.card.info;
                return <li key = {id}>{name}</li>
            })}
            </ul>
        </div>
    )
}
export default RestaurantsMenu;