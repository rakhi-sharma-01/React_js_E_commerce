import React, { Component } from "react";
import Header from "./Header";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { addToCart } from "./Action/cartActions";
import { withRouter } from "react-router-dom";
import Slider from "./Slider";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: "01",
          name: "iPhone 14 Pro Max",
          price: "1,39,000",
          quantity: 1,
          image: "iphone_14.jpg",
        },
        {
          id: "02",
          name: "Samsung Galaxy S20",
          price: "49,999",
          quantity: 1,
          image: "Samsung.jpg",
        },
        {
          id: "03",
          name: "Google Pixel 5",
          price: "69,999",
          quantity: 1,
          image: "google_pixel_5.jpg",
        },
      ],
    };
  }

  handleCartState = (productId) => {
    return this.props.cart.some((cartItem) => cartItem.id === productId);
  };

  handleAddToCart = (product) => {
    const { name, price, id, quantity, image } = product;
    console.log("product", product);
    this.props.addToCartr({ name, price, id, quantity, image });
    // this.setState(prevState => ({
    //     products : prevState.products.map(p => p.id === id ? {...p, handleCartState :true} : p)
    // }))
  };
  handleGoToCart = () => {
    this.props.history.push("/cartDetails");
  };
  render() {
    const { products } = this.state;
    return (
      <div style={{ top: "20px", backgroundColor: "lavenderblush" }}>
        <Header cartCount={this.props.cart.length} />
        
        <div style={{ width: "100%", height: "500px" }}>
          {/* <img
            style={{ width: "100%", height: "500px" }}
            src="shopping-sales.jpg"
          /> */}
          <Slider/>
        </div>

        <div style={{ display: "flex", flexDirection: "row" ,width:"100%",overflow:"hidden"}}>
          {products.map((product) => (
            <div key={product.id} className="cart-wrapper">
              <div className="" style={{ width: "300px", height: "400px" }}>
                <img
                  src={product.image}
                  style={{
                    height: "380px",
                    width: "300px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "20px", padding: "7px" }}>
                  {product.name}
                </span>
                <span
                  style={{
                    color: "white",
                    backgroundColor: "#CC0C39",
                    borderRadius: "4px",
                    padding: "4px 8px",
                  }}
                >
                  Limited time deal
                </span>
                <span style={{ fontSize: "20px", padding: "7px" }}>
                  Rs : {product.price}
                </span>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    this.handleCartState(product.id) === true
                      ? this.handleGoToCart(product)
                      : this.handleAddToCart(product);
                  }}
                  style={{ fontWeight: 600 }}
                >
                  {this.handleCartState(product.id) === true
                    ? "Go to Cart"
                    : "Add to Cart"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartr: (item) => dispatch(addToCart(item)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
