import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";


export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async (params) => {
        const {pagination, searchInputValue, search, sortCategory, fetchSelectedSortBy} = params
        const {data} = await axios.get(`https://634564d9dcae733e8ff12c3b.mockapi.io/items?${pagination}${searchInputValue ? `search=${search}` : `${sortCategory}&${fetchSelectedSortBy()}`}`)
        return data
    }
)

const initialState = {
    items: [],
    statusOfLoading: "loading",
}

export const pizzasSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.statusOfLoading = "loading"
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload
            state.statusOfLoading = "success"
        },
        [fetchPizzas.rejected]: (state) => {
            state.items = []
            state.statusOfLoading = "error"
        },
    }
})


export const {setItems} = pizzasSlice.actions

export default pizzasSlice.reducer