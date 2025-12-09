// import { CDN_URL } from "../utils/constants";
// const ItemList = ({items}) => {
//     console.log(items);
//    /**
//     * items is an array of objects
//     * in RestaurantMenu.js we are passing itemCards array for each category to ItemList component
//     * so one by one we will get items of all categories eg first we will get array of recommended, then array of top picks etc.
//     */
//     return (
//     <div>
//         {items.map((item) => (
//            <div key = {item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
//             <div className= "w-9/12">
//             <div className = "py-2">
//                <span>{item.card.info.name}</span>
//                <span> - {item.card.info.price / 100 || item.card.info.defaultPrice / 100}💲</span>
//            </div>
//            <p className="text-xs">{item.card.info.description}</p>
//            </div>
//            <div className ="p-4 w-3/12">
//               <div className="absolute">
//                     <button className = "p-2 bg-green-500 text-white rounded-lg mx-16">Add +</button>
//                 </div>
//                 <img className="w-full rounded-lg" alt="item image" src={CDN_URL + item.card.info.imageId}/>
//                 </div>
//            </div>
//         ))} 
//     </div>
//     );
// };
// export default ItemList;
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux-slices/cartSlice";

const ItemList = ({ items }) => {
  //console.log(items);
  /**
   * items is an array of objects
   * in RestaurantMenu.js we are passing itemCards array for each category to ItemList component
   * so one by one we will get items of all categories eg first we will get array of recommended, then array of top picks etc.
   */

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  // this pizza is passed to the second argument 'action' of reducer function in cartSlice.js
  //redux manages this action object internally
  //this pizza is the payload we are sending to the reducer function
  // it creates an action object like this 
  // const action = {
  //   type: "cart/addItem", 
  //   payload: "pizza"
  // }
  //whatever we pass to dispatch function it becomes payload of action object
  
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3 text-left shadow-sm transition-shadow hover:shadow-md sm:flex-row"
        >
          {/* Text section */}
          <div className="flex-1 pr-3">
            <div className="mb-1 flex items-baseline gap-2">
              <span className="font-semibold text-gray-800">
                {item.card.info.name}
              </span>
              <span className="text-sm font-medium text-green-700">
                 - {item.card.info.price / 100 || item.card.info.defaultPrice / 100}💲
              </span>
            </div>
            <p className="text-xs leading-snug text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          {/* Image + button section */}
          <div className="relative flex w-full items-end justify-end sm:w-40 sm:flex-none">
            <img
              className="h-28 w-full rounded-xl object-cover sm:h-24"
              alt="item image"
              src={CDN_URL + item.card.info.imageId}
            />
            <div className="absolute -bottom-3 right-2 sm:bottom-2 sm:right-2">
              <button className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-md transition hover:bg-green-600 active:scale-95"
              onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
