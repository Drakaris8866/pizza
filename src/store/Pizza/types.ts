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

export interface IPizzaState {
    items: PizzaItem[],
    statusOfLoading: string
}

export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}