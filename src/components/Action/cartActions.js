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

export const loadProducts = () => {
  const productsData = require('../products.json');
  console.log(productsData,"productsData")
  return {
    type: 'LOAD_PRODUCTS',
    payload: productsData
  }
}

export const filterProducts = (filterType) =>{
  return{
    type: 'FILTER_PRODUCTS',
    payload: filterType
  }
}
export const loadProductDetails = (productId) => {
  return {
    type: 'LOAD_PRODUCT_DETAILS',
    payload: productId
  };
};

