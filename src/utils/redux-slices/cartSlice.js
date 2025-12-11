import { createSlice } from "@reduxjs/toolkit";

//createSlice is a function which takes in configuration and returns an object, the configuration has name, initialState and reducers 
//different types of action in cart add, remove, clear cart

//addItem is an (dispatch) action and there is a reducer function associated with it
// the reducer function gets access to state and action, and it modifies the state based on action
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items : []
    },
    reducers: {
        addItem : (state, action) => {

            /**In valina (older) redux 
             * we were not allowed to mutate the state directly
             * we had to return a new state object, returning was mandatory
             * const newState = {...state}
             * newState.items.push(action.payload);
             * return newState;
            */
            // but now redux toolkit says that we HAVE to mutate the state directly 
            // we are mutating the state directly here
            //but internally redux toolkit uses immer library which does the immutability stuff for us
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        clearCart : (state) => {
            //state.items.length = 0;
            //state = []; //this will not work as we are reassigning local state variable of the function, not mutating the original state
            state.items = []; //this will work
        }
    }
});
//the kind of object returned by createSlice
// cartSlice = {
//     actions: { 
//         addItem,
//         removeItem,
//         clearCart 
//     },
//     reducer: function,
//     name: "cart"
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;