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

{/* <div style={{padding:"10px",height:"4vh",backgroundColor:"black",height:"100px",color:"white",display:"flex",justifyContent:"space-evenly"}}> */}
{/* <div style={{width:"100vw",top:"20px",backgroundColor:"lavenderblush",overflowX:"hidden",overflowY:"scroll",height:"calc(100vh,6rem)"}}> */}
