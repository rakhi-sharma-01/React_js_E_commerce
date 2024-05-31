// import { Button } from '@mui/material';
// import React, {Component} from 'react';


// export default class Mobiles extends Component{
//     constructor(){
//         super()
//     }
//     render(){
//         return(
//             <div style={{ display: "flex", flexDirection: "row" ,width:"100%",overflow:"hidden"}}>
//             {products.map((product) => (
//               <div key={product.id} className="cart-wrapper">
//                 <div className="" style={{ width: "300px", height: "400px" }}>
//                   <img
//                     src={product.image}
//                     style={{
//                       height: "380px",
//                       width: "300px",
//                       borderRadius: "20px",
//                     }}
//                   />
//                 </div>
//                 <div
//                   className=""
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <span style={{ fontSize: "20px", padding: "7px" }}>
//                     {product.name}
//                   </span>
//                   <span
//                     style={{
//                       color: "white",
//                       backgroundColor: "#CC0C39",
//                       borderRadius: "4px",
//                       padding: "4px 8px",
//                     }}
//                   >
//                     Limited time deal
//                   </span>
//                   <span style={{ fontSize: "20px", padding: "7px" }}>
//                     Rs : {product.price}
//                   </span>
//                 </div>
//                 <div
//                   className=""
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Button
//                     variant="contained"
//                     onClick={() => {
//                       this.handleCartState(product.id) === true
//                         ? this.handleGoToCart(product)
//                         : this.handleAddToCart(product);
//                     }}
//                     style={{ fontWeight: 600 }}
//                   >
//                     {this.handleCartState(product.id) === true
//                       ? "Go to Cart"
//                       : "Add to Cart"}
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )
//     }
// }