import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IParams, PizzaItem} from "./types";

export const fetchPizzas = createAsyncThunk<PizzaItem[], IParams>(
    'pizzas/fetchPizzas',
    async (params) => {
        const {pagination, searchInputValue, search, sortCategory, fetchSelectedSortBy} = params
        const {data} = await axios.get(`https://634564d9dcae733e8ff12c3b.mockapi.io/items?${pagination}${searchInputValue ? `search=${search}` : `${sortCategory}&${fetchSelectedSortBy()}`}`)
        return data
    }
)