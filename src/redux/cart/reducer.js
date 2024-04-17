import CartActionsTypes from "./actions-type";

const initialState = {
  products: [],
  productsTotalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case CartActionsTypes.ADD_PRODUCT:
      // Verificar se o produto adicionado já se encontra no carrinho
      const productIsAlReadyInCard = state.products.some((product) => product.id === action.payload.id);
      // Se sim, incrementar a quantidade em vez de adicionar um novo produto
      if (productIsAlReadyInCard) {
        return {
          ...state,
          products: state.products.map(
            (product) => product.id === action.payload.id
            ? {
              ...product, quantity: product.quantity + 1}
            : product
          ),
        }
      }
      // Se não, adicioná-lo
        return {
            ...state,
            products: [...state.products, {...action.payload, quantity: 1}]
        };

    case CartActionsTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload
        )
      };

    case CartActionsTypes.INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map(
          (product) => product.id === action.payload
          ? { ...product, quantity: product.quantity + 1}
          : product
        )
      };

    case CartActionsTypes.DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map(
          (product) => product.id === action.payload
          ? {...product, quantity: product.quantity - 1}
          : product
        ).filter((product) => product.quantity > 0)
      }

    default:
      return state;
  }
}

export default cartReducer
