import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    searchInputValue: '',
}

export const slice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<string>) => {
            state.searchInputValue = action.payload
        },
    },
})


export const {setInputValue} = slice.actions

export default slice.reducer