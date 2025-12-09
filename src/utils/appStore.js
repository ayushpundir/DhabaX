import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux-slices/cartSlice";

//the reducer which we have here is our appStore reducer which combines different reducers of each slice
const appStore = configureStore({
    reducer: {
        //add different reducers here
        cart: cartReducer
    }
});

export default appStore;