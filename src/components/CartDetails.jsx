import React from 'react';
import {connect} from 'react-redux';
import Header from './Header'
import {decreaseQuantity,increaseQuantity} from './Action/cartActions';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class CartDetails extends React.Component{
    constructor(){
        super();
        this.state={
            isLoggedIn: JSON.parse(localStorage.getItem("isLogIn")) || false
        }
    };

    handleDecrease =(id)=>{
        this.props.decreaseQty({id})
    }

    handleIncrease =(id,index)=>{
        this.props.increaseQty({id,index})
    }

    calculateTotalPrice =(item)=>{
        console.log("total",item,item.price * item.quantity);
        return parseInt((item.price).replace(/,/g, '')) * item.quantity;

    }
    // handlePlaceOrder=()=> {
    //     return localStorage.getItem("isLogIn")
    // }
    

    render(){
        const {cartItems} = this.props;
        console.log("cartItems",cartItems)

        return(
            <div>
                <Header />
                <p style={{fontSize:"25px",fontWeight:500,color:"white",backgroundColor:"coral",padding:"10px"}}>Cart Details Page</p>
              <div style={{width:"100%",height:"90%",backgroundColor:"lavenderblush"}}>
                  {cartItems.map((item, index) => (
                  <div key={index}style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",width:"600px",padding:"20px",margin:"20px",flexDirection:"row",display:"flex",}}>
                       {/* <div style={{}}> */}
                           <img src={item.images[0]}  style={{height:"100px",maxWidth:"100%",marginLeft:"30px"}}/>
                        {/* </div> */}
                     <div style={{margin:"auto",fontSize:"18px",fontFamily:"serif",fontWeight:600}}>
                         <p> {item.name}</p>
                         <p>Price: {item.price}</p>
                         <p> Quantity : 
                         <button style={{margin:"7px",height:"20px",width:"20px",borderRadius:"50%",backgroundColor:"azure",fontWeight:"bolder"}} onClick={()=>this.handleDecrease(item?.id)}> - </button>
                         {item.quantity}
                         <button style={{margin:"7px",height:"20px",width:"20px",borderRadius:"50%",backgroundColor:"azure",fontWeight:"bolder"}} onClick={()=>this.handleIncrease(item?.id,index)}> + </button>
                         </p>
                         <p>Total: {this.calculateTotalPrice(item)}</p>
                     </div>
                  </div>
                 ))}
              </div>
              <Button variant="text" style={{ margin: "20px", padding: "10px", backgroundColor: "coral", color: "white" ,fontWeight:600,border:"none",width:"250px" }}>
                 <Link to={this.state.isLoggedIn ? "/payments" : "/login"} style={{textDecoration:"none",padding:"5px",backgroundColor:"coral",color:"white",borderRadius:"5px"}} onClick={this.handleCheckout}>PLACE ORDER</Link>
              </Button>
              <Footer />
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    console.log("cartItems",state.cart.items)
return{
    cartItems: state.cart.items,
}
};

const mapDispatchToProps=(dispatch)=>{
    return{
        increaseQty: (item,index)=>dispatch(increaseQuantity(item,index)),
        decreaseQty: (item)=>dispatch(decreaseQuantity(item))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(CartDetails);

