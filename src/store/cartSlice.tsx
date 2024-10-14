// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    deliveryFree: 15,
    freeDeleveryFrom: 200,
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addCartItem: (state, action) => {
            const newProduct = action.payload.product;
            
            const cartItem = state.items.find( // pesquisa para ver se ja tem o mesmo produto com o mesmo ID 
                (item) => item.product.id === newProduct.id
            );
    
            if(cartItem){          // se tiver o estado muda a quantidade + 1;
                cartItem.quantity += 1;
            }else {
                state.items.push({product: newProduct, quantity: 1}); 
            }
        },
        changeQuantity: (state, action) => {
            const { productId, amount } = action.payload;
            const cartItem = state.items.find(
                (item) => item.product.id === productId
            )
            if(cartItem){
                cartItem.quantity += amount;
            }
            
            if(cartItem.quantity <= 0){
                state.items = state.items.filter((item) => item !== cartItem);
            }
        }
    }
})

// selectores em redux
export const selectNumberOfItems = (state) => state.cart.items.length;

// somando os valores do subtotal 
export const selectSubtotal = (state) => state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity, 0
)