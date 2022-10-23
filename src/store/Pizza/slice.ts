import {createSlice} from "@reduxjs/toolkit";
import {IPizzaState, Status} from "./types";
import {fetchPizzas} from "./async";


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