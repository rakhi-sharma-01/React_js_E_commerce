import React, {Component} from 'react';
import Header from './Header';
import { Button } from '@mui/material';
import {connect} from 'react-redux';
import {addToCart} from "./Action/cartActions";

class Home extends Component{
    constructor(){
        super()
        this.state ={
            products: [
                { id: '01', name: 'iPhone 11', price: 1000, quantity: 1, image: 'iphone.jpg'},
                { id: '02', name: 'Samsung Galaxy S20', price: 1200, quantity: 1, image:'iphone.jpg' },
                { id: '03', name: 'Google Pixel 5', price: 900, quantity: 1,image:'iphone.jpg' },
            ],
        }
    }

    handleAddToCart = (product) => {
        const { name, price ,id, quantity} = product;
        console.log("product",product);
        this.props.addToCartr({ name, price, id, quantity});
    };
    render(){
        const {products} = this.state;
        return(
        <div style={{top:"20px"}}>
            <Header cartCount={this.props.cart.length}/>           
            {/* <h1 style={{margin:"20px"}}>Home Component</h1> */}

            {products.map(product =>
            <div key={product.id} className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="iphone.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Name : {product.name}
                    </span>
                    <span>
                        Price : {product.price}
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <Button variant="contained" onClick={()=>{this.handleAddToCart(product)}}>Add to Cart</Button>
                </div>
            </div>
            )}
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        cart: state.cart.items,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        addToCartr:(item)=>dispatch(addToCart(item))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);