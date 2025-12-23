// import { useEffect, useState, useContext} from "react";

// import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import liveMockData from "../utils/liveMockData";

// import UserContext from "../utils/UserContext"; //why this line is giving error!!

// const Body = () => {
//     //local state variable 
//     //this listResturant is a super powerful react variable this is how we create it
//     // inside useState we give default values and we use a set{variable_name}
//     // method to update this react variable this set method triggers the diff algo

//     //this super powerful variable keeps the ui in sync with data layer
//     //as soon as it change it will automatically refresh our component

//     //whenever a state variable changes react will re-render my component




//     const [listRestaurants, setlistRestaurants] = useState([]);
//     const [filteredRestaurants, setfilteredRestaurants] = useState([]); // filtered list shown
//     const [searchText, setsearchText] = useState("");

//     const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

//     const {loggedInUser, setUserName} = useContext(UserContext);

//    // console.log(listRestaurants);

//     // useEffect(()=>{
//     //     fetchData();
//     // }, []); //since we have passed an empty object it will be called only ones

//     // const fetchData = async () => {
//     //     const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     //     const json = await response.json();
//     //     // console.log(json);
//     //     setlistRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     //     setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // filtered list initially same as full list

//     // } 

//     useEffect(()=>{
//         const resInfo = liveMockData;

//     setlistRestaurants(resInfo?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setfilteredRestaurants(resInfo?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // filtered list initially same as full list

//     }, []); //dummy useEffect to avoid warning


//     const onlineStatus = useOnlineStatus();
//     if(onlineStatus === false) return (<h1>🔴 Offline, please check your internet connection!!</h1>);

//     //this is Conditional Rendering
// if (filteredRestaurants.length === 0) return <Shimmer />;
//     return (
//         <div className="body">
//             <div className = "filer flex">
//                 <div className="search m-1 p-4">

//                 <input data-testid="search-input" type="text" className="border border-solid border-black" placeholder="search here" value = {searchText}
//                 onChange={(e)=>{
//                     setsearchText(e.target.value);
//                 }}>
                    
//                 </input>
//                 <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
//                 onClick={()=>{
//                     const searching = listRestaurants.filter((restaurant)=>{
//                         return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
//                     });
//                     setfilteredRestaurants(searching);
                    
//                 }}
//                 >search</button> 
//                 </div>

//                 <div className="m-1 p-4 flex items-center">
//                     <button className = "filter-btn px-4 py-2 bg-gray-100 rounded-lg"
//                 onClick={()=>{
//                     const newList = listRestaurants.filter((restaurants) => restaurants.info.avgRating>=4.5);
//                     setfilteredRestaurants(newList);
//                 }
//             }
//                 >
//                     top rated restaurants</button>
//                 </div>
//                 <div className="m-1 p-4 flex items-center">
//                     <label>username</label>
//                     <input className="ml-1 p-2 border-2 border-black rounded-lg" value = {loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
//                 </div>
//             </div>
//             <div className ="flex flex-wrap res-container"> 
//                 {filteredRestaurants.map((restaurants) => (
//                     <Link to={"/restaurants/"+restaurants.info.id} key = {restaurants.info.id}>

//                         {/**if the restaurant is promoted then add a lable to it */}
//                         {
//                         restaurants.info.avgRating>=4.5 ?<PromotedRestaurantCard resData = {restaurants}/>:<RestaurantCard resData = {restaurants}/>
//                     }               
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }; 

// export default Body;

// //to use mock data

// // import resObj from "../utils/mockData";
// // // import { useEffect, useState } from "react"; 
// // // ⬆️ useEffect commented out because we are NOT doing any API calls now.
// // import { useState } from "react";

// // import RestaurantCard from "./RestaurantCard";
// // import Shimmer from "./Shimmer";
// // import { Link } from "react-router";

// // // ✅ get restaurants once from mockData (replacing API data)
// // const mockRestaurants =
// //   resObj?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

// // const Body = () => {
// //     //local state variable 
// //     //this listResturant is a super powerful react variable this is how we create it
// //     // inside useState we give default values and we use a set{variable_name}
// //     // method to update this react variable this set method triggers the diff algo

// //     //this super powerful variable keeps the ui in sync with data layer
// //     //as soon as it change it will automatically refresh our component

// //     //whenever a state variable changes react will re-render my component

// //     // ❌ ORIGINAL (using empty arrays + API) — commented out
// //     // const [listRestaurants, setlistRestaurants] = useState([]);
// //     // const [filteredRestaurants, setfilteredRestaurants] = useState([]); // filtered list shown

// //     // ✅ NEW: initialize from mock data instead of empty array
// //     const [listRestaurants, setlistRestaurants] = useState(mockRestaurants);
// //     const [filteredRestaurants, setfilteredRestaurants] = useState(mockRestaurants); // filtered list initially same as full list

// //     const [searchText, setsearchText] = useState("");

// //     // ❌ ORIGINAL: useEffect + fetchData (API call) — commented out because you don't want API calls
// //     /*
// //     useEffect(()=>{
// //         fetchData();
// //     }, []); //since we have passed an empty object it will be called only once

// //     const fetchData = async () => {
// //         const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
// //         const json = await response.json();
// //         // console.log(json);
// //         setlistRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// //         setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // filtered list initially same as full list
// //     } 
// //     */

// //     // ❌ ORIGINAL: this was causing an infinite re-render because setState was called
// //     // ❌ directly inside the component body (every render triggers another render)
// //     /*
// //     //this is Conditional Rendering
// //     if (filteredRestaurants.length === 0) return <Shimmer />;
// //     console.log(resObj.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
// //     setlistRestaurants(resObj.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
// //     setfilteredRestaurants(resObj.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
// //     */

// //     // ✅ NEW: proper conditional rendering without calling setState in render
// //     if (!filteredRestaurants || filteredRestaurants.length === 0) {
// //         return <Shimmer />;
// //     }

// //     return (
// //         <div className="body">
// //             <div className="filer flex">
// //                 <div className="search m-4 p-4">

// //                 <input
// //                     type="text"
// //                     className="border border-solid border-black"
// //                     placeholder="search here"
// //                     value={searchText}
// //                     onChange={(e) => {
// //                         setsearchText(e.target.value);
// //                     }}
// //                 >
// //                 </input>
// //                 <button
// //                     className="px-4 py-2 bg-green-100 m-4 rounded-lg"
// //                     onClick={() => {
// //                         const searching = listRestaurants.filter((restaurant) => {
// //                             return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
// //                         });
// //                         setfilteredRestaurants(searching);
// //                     }}
// //                 >
// //                     search
// //                 </button>
// //                 </div>

// //                 <div className="m-4 p-4 flex items-center">
// //                     <button
// //                         className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
// //                         onClick={() => {
// //                             const newList = listRestaurants.filter(
// //                                 (restaurants) => restaurants.info.avgRating >= 4.5
// //                             );
// //                             setfilteredRestaurants(newList);
// //                         }}
// //                     >
// //                         top rated restaurants
// //                     </button>
// //                 </div>
// //             </div>
// //             <div className="flex flex-wrap res-container"> 
// //                 {filteredRestaurants.map((restaurants) => (
// //                     <Link to={"/restaurants/" + restaurants.info.id} key={restaurants.info.id}>
// //                         <RestaurantCard resData={restaurants} />
// //                     </Link>
// //                 ))}
// //             </div>
// //         </div>
// //     )
// // }; 

// // export default Body;
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import liveMockData from "../utils/liveMockData";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    const resInfo = liveMockData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestaurants(resInfo);
    setFilteredRestaurants(resInfo);
  }, []);

  if (!onlineStatus) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-lg font-semibold text-red-600">
        You are offline. Please check your internet connection.
      </div>
    );
  }

  if (filteredRestaurants.length === 0) return <Shimmer />;

  return (
    <main className="mx-auto max-w-7xl px-6 py-6">
      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-4 rounded-lg bg-gray-50 p-4 shadow-sm">
        {/* Search */}
        <div className="flex gap-2">
          <input
            data-testid="search-input"
            type="text"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-60 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
          />
          <button
            onClick={() => {
              const result = restaurants.filter((r) =>
                r.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(result);
            }}
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
          >
            Search
          </button>
        </div>

        {/* Top Rated */}
        <button
          onClick={() => {
            const topRated = restaurants.filter((r) => r.info.avgRating >= 4.5);
            setFilteredRestaurants(topRated);
          }}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-100"
        >
          Top Rated
        </button>

        {/* Username */}
        <div className="ml-auto flex items-center gap-2">
          <label className="text-sm font-medium text-gray-600">Username</label>
          <input
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            className="transition-transform hover:scale-[1.02]"
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Body;