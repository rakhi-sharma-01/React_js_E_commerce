import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "@mui/material";
import { withRouter } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

class Header extends Component {
  constructor() {
    super();
  }
  handleClick = () => {
    console.log();
    this.props.history.push({
      pathname: "/cartDetails",
    });
  };
  render() {
    // const {cartCount} = this.props;
    return (
      <div>
        <div className="add-to-cart" style={{width:"100%",backgroundColor:"darkslategray",height:"100px",color:"white",display:"flex",justifyContent:"space-between"}}>
          <p style={{width:"150px",fontSize:"30px",padding:"25px"}}>Home</p>
          <div style={{padding:"25px"}}>
            <span className="cart-count">{this.props.cartCount}</span>
            <ShoppingCartIcon fontSize="large" style={{fontSize:"40px"}} onClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("cartCount", state);
  return {
    cartCount: state.cart.items.length,
  };
};

export default withRouter(connect(mapStateToProps)(Header));

          {/* <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
            onClick={this.handleClick}
          /> */}