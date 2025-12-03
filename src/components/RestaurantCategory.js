import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data,isOpen, handleClick}) => {

    // const [isOpen, setIsOpen] = useState(false);

    // const handleClick = () => {
    //     if(isOpen){
    //         setIsOpen(false);
    //     }else{
    //         setIsOpen(true);
    //     }
    // }
    /**till now we are using state variable for each category, but now
     * we want that when one category is open, all other categories should be closed
     * so for that we will lift the state up to RestaurantMenu component
     * and we will pass two props from RestaurantMenu to RestaurantCategory
     * 1. isOpen - to know whether this category is open or closed
     * 2. handleClick - function to toggle the isOpen state variable
     */
    const categoryClick = () => { handleClick();};
    //each category will have its own isOpen and handleClick passed from parent component
    
    return <div>
        {/*acordion header*/}
        <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4">
         <div onClick={categoryClick} className = "flex justify-between cursor-pointer"> <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span><span>⬇️</span></div>

        {/*acordion body with items*/}
        {isOpen && <ItemList items={data.itemCards}/>}

        {/**this ItemList was on the UI layer now we have to
         * work on data layer to hide/show items on click of category
         * that's why we have created state isOpen to track whether category is open or closed
         * 
         * we have built our accordion!!!
         */}
        </div> 
    </div>;

};
export default RestaurantCategory;