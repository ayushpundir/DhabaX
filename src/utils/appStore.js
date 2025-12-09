import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux-slices/cartSlice";

//the reducer which we have here is our appStore reducer which combines different reducers of each slice
//difference between reduxer and reducers 
//appStore has one big reducer and this reducer is made up of different smaller reducers from different slices
const appStore = configureStore({
    reducer: {
        //add different reducers here
        cart: cartReducer
    }
});

export default appStore;