//now we no longer need this as for menu now we will use mock data
//swiggy api is not allowing to call their api from unknown origins
/**
 * initially we have tried to use live data from swiggy website but we have faced in cors issue
 * so now I'm using mocked data for development purpose
 */

// import { use, useEffect, useState } from "react";

// const useRestaurantMenu = (resId) => {
//     //Fetch data
//     const [resInfo, setResInfo] = useState(null);

//     useEffect(() => {
//         getRestaurantInfo();
//     }, []);

//     const getRestaurantInfo = async () => {
//         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.32750&lng=78.03250&restaurantId=" + resId );
//         const json = await data.json();
//         setResInfo(json?.data);
//     };
//     return resInfo;
// }
// export default useRestaurantMenu;