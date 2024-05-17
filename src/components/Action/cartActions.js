export const addToCart =(item)=>{
    return{
      type: 'ADD_TO_CART',
      payload: item,
    }
};

export const decreaseQuantity = (id) => {
  return {
    type: 'DECREASE_QUANTITY',
    payload:id,
  }
};

export const increaseQuantity = (payload) => {
  return {
    type: 'INCREASE_QUANTITY',
    payload:payload

  }
};