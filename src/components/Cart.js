import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/redux-slices/cartSlice";



const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items); // getting cart items from redux store

    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart()); // dispatching clearCart action
    };
        return (
    <div className="text-center m-4 p-4">
        <h1 className="font-bold text-2xl">Cart</h1>
        <div className="w-6/12 m-auto"> 
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleClear}>clear</button>
        <ItemList items={cartItems} />
        </div>
    </div>
    );
};
export default Cart;