import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";


const initialState = {
    products: products,
    selectedProduct: null,
};

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setSelectedProduct: (state: any, action) => {
            const productId = action.payload;
            state.selectedProduct = state.products.find((p: any) => p.id === productId);
        }
    }
})