import { use, useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    //Fetch data
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    const getRestaurantInfo = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.32750&lng=78.03250&restaurantId=" + resId );
        const json = await data.json();
        setResInfo(json?.data);
    };
    return resInfo;
}
export default useRestaurantMenu;