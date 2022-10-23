export type CartItem = {
    id: string,
    title: string,
    imageUrl: string,
    price: number,
    currentSize: number,
    currentType: string,
    count: number
}

export interface ICartState {
    totalPrice: number;
    totalCount: number;
    items: CartItem[]
}

export interface ICartRemoveAction {
    id: string;
    currentType: string;
    currentSize: number
}