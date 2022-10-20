import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";


export const fetchPizzas = createAsyncThunk<PizzaItem[], IParams>(
    'pizzas/fetchPizzas',
    async (params) => {
        const {pagination, searchInputValue, search, sortCategory, fetchSelectedSortBy} = params
        const {data} = await axios.get(`https://634564d9dcae733e8ff12c3b.mockapi.io/items?${pagination}${searchInputValue ? `search=${search}` : `${sortCategory}&${fetchSelectedSortBy()}`}`)
        return data
    }
)

export interface IParams {
    pagination: string;
    searchInputValue: string,
    search: string,
    fetchSelectedSortBy: () => string,
    sortCategory: string
}

export type PizzaItem = {
    id: string,
    title: string,
    imageUrl: string,
    price: number,
    sizes: number[],
    types: string[],
    rating: number,
    category: number
}

interface IPizzaState {
    items: PizzaItem[],
    statusOfLoading: string
}

enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

const initialState: IPizzaState = {
    items: [],
    statusOfLoading: Status.LOADING,
}

export const pizzasSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.statusOfLoading = Status.LOADING
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.statusOfLoading = Status.SUCCESS
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.items = []
            state.statusOfLoading = Status.ERROR
        })
    }
})


export const {setItems} = pizzasSlice.actions

export default pizzasSlice.reducer