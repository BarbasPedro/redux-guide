import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // Verificar se o produto adicionado já se encontra no carrinho
      const productIsAlReadyInCard = state.products.some((product) => product.id === action.payload.id);
      // Se sim, incrementar a quantidade em vez de adicionar um novo produto
      if (productIsAlReadyInCard) {
        state.products = state.products.map(
            (product) => product.id === action.payload.id
            ? {
              ...product, quantity: product.quantity + 1}
            : product
          );

          return;
      }
      // Se não, adicioná-lo
      state.products = [...state.products, {...action.payload, quantity: 1}]
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
          product => product.id !== action.payload
        )
    },
    increaseQuantity: (state, action) => {
      state.products = state.products.map(
          (product) => product.id === action.payload
          ? { ...product, quantity: product.quantity + 1}
          : product
      )
    },
    decreaseQuantity: (state, action) => {
      state.products = state.products.map(
          (product) => product.id === action.payload
          ? {...product, quantity: product.quantity - 1}
          : product
        ).filter((product) => product.quantity > 0)
    }
  },
})

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer
