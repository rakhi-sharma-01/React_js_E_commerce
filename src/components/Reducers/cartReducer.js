import { loadProducts } from "../Action/cartActions";

const initialState ={
    items:[],
    products:[],
    filteredProducts:[],
    productDetail:{}
};
const cartReducer = (state=initialState, action) =>{
    console.log("payload", action.payload);
    switch(action.type){
        case 'LOAD_PRODUCTS':
            let allProducts = [];
            Object.values(action.payload).forEach(category => {
                allProducts = allProducts.concat(category);
              });
              console.log(allProducts,"df")
            return{
                ...state,
                filteredProducts: allProducts,
                products:allProducts
            }
        case 'FILTER_PRODUCTS':
            const filterType = action.payload;
            
            let filteredProduct = [];
            if (filterType === "all") {
              filteredProduct = state.products;
            } else {
              filteredProduct = state.products.filter(product => product.category === filterType);
            }
            console.log(filteredProduct,state.products,"dfghj")
            return {
              ...state,
              filteredProducts: filteredProduct,
            };  
        case 'ADD_TO_CART':
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            console.log('existingItem', existingItem)
            if(existingItem){
                return{
                    ...state,
                    items: state.items.map(item=> item.id === action.payload.id ? ({...item, quantity : item.quantity +1}) : item)
                }
            }else{
                return{
                   ...state,
                   items: [...state.items, {...action.payload, quantity : 1}],
                }
            };

        case 'LOAD_PRODUCT_DETAILS':
            console.log("productss",state.products, typeof action.payload);
            const isProduct = state.products.find((product)=> product.id === Number(action.payload));
            console.log("isProduct",isProduct);
            if(isProduct){
                return{
                    ...state,
                    productDetail: isProduct
                }
            };
        case 'INCREASE_QUANTITY':
            return{
                ...state,
                items: state.items.map(item=> item.id === action.payload.id ? ({...item, quantity : item.quantity +1}) : item)
            }
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: state.items.filter(item =>
                    item.id !== action.payload.id || item.quantity > 1 
                ).map(item => 
                    item.id === action.payload.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
                )
        } 
        default :
        return state         
    }
}


export default cartReducer;


