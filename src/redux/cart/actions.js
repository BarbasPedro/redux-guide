import CartActionsTypes from "./actions-type";

export const addProductToCart = (payload) => ({
  type: CartActionsTypes.ADD_PRODUCT,
  payload
})

export const removeProductFromCart = (payload) => ({
  type: CartActionsTypes.REMOVE_PRODUCT,
  payload
})

export const increaseQuantityofProduct = (payload) => ({
  type: CartActionsTypes.INCREASE_QUANTITY,
  payload
})

export const decreaseQuanitityOfProduct = (payload) => ({
  type: CartActionsTypes.DECREASE_QUANTITY,
  payload
})
