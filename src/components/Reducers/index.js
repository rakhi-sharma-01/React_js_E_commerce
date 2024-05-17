import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer= combineReducers({
    cart: cartReducer,
});

export default rootReducer;



// {products.map(product =>
//     <div key={product.id} className="cart-wrapper">
//         <div className="img-wrapper item">
//             <img src="iphone.jpg" />
//         </div>
//         <div className="text-wrapper item">
//             <span>
//                 Name : {product.name}
//             </span>
//             <span>
//                 Price : {product.price}
//             </span>
//         </div>
//         <div className="btn-wrapper item">
//             <Button variant="contained" onClick={()=>{this.handleAddToCart(product)}}>Add to Cart</Button>
//         </div>
//     </div>
//     )}