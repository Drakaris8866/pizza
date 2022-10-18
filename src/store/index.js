import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import searchReducer from './searchSlice'
import cartReducer from "./cartSlice";
import pizzasReducer from "./pizzasSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        search: searchReducer,
        cart: cartReducer,
        pizzas: pizzasReducer
    },
})