import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeCategory: 0,
    sortBy: 0,
    currentPage: 1,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.activeCategory = action.payload
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action) => {
            state.activeCategory = Number(action.payload.activeCategory)
            state.sortBy = Number(action.payload.sortBy)
            state.currentPage = Number(action.payload.currentPage)
        },
    },
})


export const { setCategory, setSortBy, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer