import React from 'react';
import {connect} from 'react-redux';
import Header from './Header'
import {decreaseQuantity,increaseQuantity} from './Action/cartActions';

class CartDetails extends React.Component{
    constructor(){
        super()
    };

    // handleDecrease = (id)=> {
    //     this.props.dispatch({type:"DECREASE_QUANTITY" , id})
    // }

    // handleIncrease = (id)=> {
    //     this.props.dispatch({type:"INCREASE_QUANTITY" , id})
    // }

    handleDecrease =(id)=>{
        this.props.decreaseQty({id})
    }

    handleIncrease =(id,index)=>{
        this.props.increaseQty({id,index})
    }

    
    

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
                  <div key={index}style={{border:"darkslategray solid 2px",width:"300px",padding:"20px",margin:"20px"}}>
                     <p>Name: {item.name}</p>
                     <p>Price: {item.price}</p>
                     <p> Quantity : 
                     <button style={{margin:"7px",padding:"3px"}} onClick={()=>this.handleDecrease(item?.id)}> - </button>
                     {item.quantity}
                     <button style={{margin:"7px",padding:"3px"}} onClick={()=>this.handleIncrease(item?.id,index)}> + </button>
                     </p>
                  </div>
                 ))}
              </div>
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
