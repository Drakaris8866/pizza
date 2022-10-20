import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CartItem = {
    id: string,
    title: string,
    imageUrl: string,
    price: number,
    currentSize: number,
    currentType: string,
    count: number
}

interface ICartState {
    totalPrice: number;
    totalCount: number;
    items: CartItem[]
}

interface ICartRemoveAction {
    id: string;
    currentType: string;
    currentSize: number
}

const initialState: ICartState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.currentType === action.payload.currentType && obj.currentSize === action.payload.currentSize)
            if (findItem) {
                findItem.count && findItem.count++
            } else state.items.push({...action.payload, count: 1})

            state.totalPrice = state.items.reduce((sum, prev) => prev.price * prev.count + sum, 0)
            state.totalCount = state.items.reduce((sum, prev) => prev.count + sum, 0)
        },
        removeItem: (state, action: PayloadAction<ICartRemoveAction>) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.currentType === action.payload.currentType && obj.currentSize === action.payload.currentSize)
            if (findItem) {
                findItem.count--
                const i = state.items.findIndex((obj) => obj.id === action.payload.id && obj.currentType === action.payload.currentType && obj.currentSize === action.payload.currentSize)
                findItem.count < 1 && state.items.splice(i, 1)
            }
        },
        clearCart: (state) => {
            state.items = []
        }
    },
})


export const {addItem, clearCart, removeItem} = cartSlice.actions

export default cartSlice.reducer