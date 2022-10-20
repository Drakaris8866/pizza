import {configureStore} from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import searchReducer from './searchSlice'
import cartReducer from "./cartSlice";
import pizzasReducer from "./pizzasSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        search: searchReducer,
        cart: cartReducer,
        pizzas: pizzasReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch