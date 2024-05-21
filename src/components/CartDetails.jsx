import React from 'react';
import {connect} from 'react-redux';
import Header from './Header'
import {decreaseQuantity,increaseQuantity} from './Action/cartActions';

class CartDetails extends React.Component{
    constructor(){
        super()
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

        const groupedItems = cartItems.reduce((acc, item)=> {
            if(acc[item.id]){
                acc[item.id].quantity++ 
            }else{
                acc[item.id] = {...item, quantity: 1}
            }
            return acc;
        }, {})

        return(
            <div>
                <Header/>
                <h3 style={{margin:"20px"}}>Cart Details Page</h3>
              <div>
                  {cartItems.map((item, index) => (
                  <div key={index}style={{border:"darkslategray solid 2px",width:"300px",padding:"20px",margin:"20px",flexDirection:"row",display:"flex",}}>
                       {/* <div style={{}}> */}
                           <img src={item.image}  style={{height:"80px",maxWidth:"100%"}}/>
                        {/* </div> */}
                     <div>
                         <p>Name: {item.name}</p>
                         <p>Price: {item.price}</p>
                         <p> Quantity : 
                         <button style={{margin:"7px",padding:"3px"}} onClick={()=>this.handleDecrease(item?.id)}> - </button>
                         {item.quantity}
                         <button style={{margin:"7px",padding:"3px"}} onClick={()=>this.handleIncrease(item?.id,index)}> + </button>
                         </p>
                         <p>Total: {this.calculateTotalPrice(item)}</p>
                     </div>
                  </div>
                 ))}
              </div>
              {/* <button
                  style={{ margin: "20px", padding: "10px", backgroundColor: "coral", color: "white" ,fontWeight:600,border:"none",width:"250px"}}
                  onClick={()=>this.handlePlaceOrder ? this.handleCheckout() : null}>
                  PLACE ORDER
              </button> */}
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

// {Object.values(groupedItems).map((item, index) => (
