import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchInputValue: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setInputValue: (state, action) => {
            state.searchInputValue = action.payload
        },
    },
})


export const { setInputValue } = searchSlice.actions

export default searchSlice.reducer