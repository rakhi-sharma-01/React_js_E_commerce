import React, { Component } from "react";
import Header from "./Header";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { addToCart } from "./Action/cartActions";
import { withRouter } from "react-router-dom";
import Slider from "./Slider";
import Footer from "./Footer";
import productsData from "./products.json";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: productsData,
      filteredProducts: [],
      filterType: "all",
    };
  }

  handleCartState = (productId) => {
    return this.props.cart.some((cartItem) => cartItem.id === productId);
  };

  handleAddToCart = (product) => {
    const { name, price, id, quantity, image } = product;
    this.props.addToCartr({ name, price, id, quantity, image });
  };

  handleGoToCart = () => {
    this.props.history.push("/cartDetails");
  };

  filterProducts = () => {
    const { products, filterType } = this.state;
    let filteredProducts = [];
    if (filterType === "all") {
      Object.values(products).forEach(category => {
        filteredProducts = filteredProducts.concat(category);
      });
    } else {
      filteredProducts = products[filterType];
    }
    this.setState({ filteredProducts });
};
handleFilterChange = (filterType) => {
  this.setState({ filterType }, () => {
    this.filterProducts();
  });
};


  componentDidMount() {
    const { products, filterType } = this.state;
    let filteredProducts = [];
    if (filterType === "all") {
      Object.values(products).forEach(category => {
        filteredProducts = filteredProducts.concat(category);
      });
      this.setState({ filteredProducts });

    // this.filteredProducts();
  }}

  render() {
    const { filteredProducts } = this.state;
    return (
      <div style={{ top: "20px", backgroundColor: "lavenderblush" }}>
        <Header cartCount={this.props.cart.length} />
        <div style={{ width: "100%", height: "500px" }}>
          <Slider />
        </div>
        <div style={{ display: "flex", justifyContent: "center",backgroundColor:"coral", }}>
          <Button style={{color:"white",fontSize:"20px",padding:"15px",fontWeight:600}} onClick={() => this.handleFilterChange("mobiles")}>
            Mobiles
          </Button>
          <Button style={{color:"white",fontSize:"20px",padding:"15px",fontWeight:600}} onClick={() => this.handleFilterChange("smart_tvs")}>
            Smart TVs
          </Button>
          <Button style={{color:"white",fontSize:"20px",padding:"15px",fontWeight:600}} onClick={() => this.handleFilterChange("tablets")}>
            Tablets
          </Button>
          {/* <Button style={{color:"white",fontSize:"20px",padding:"15px",fontWeight:600}} onClick={() => this.handleFilterChange("earphones")}>
            Earphones
          </Button> */}
          <Button style={{color:"white",fontSize:"20px",padding:"15px",fontWeight:600}} onClick={() => this.handleFilterChange("all")}>
            All Products
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="cart-wrapper">
              <div
                style={{ width: "300px", height: "360px", textAlign: "center" }}
              >
                <img
                  src={product.images[0]} //first image is the main image
                  style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "20px",
                  }}
                  alt={product.name}
                />
                <div style={{ marginTop: "10px" }}>{product.name}</div>
                <div>Rs: {product.price}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  onClick={() =>
                    this.handleCartState(product.id)
                      ? this.handleGoToCart(product)
                      : this.handleAddToCart(product)
                  }
                  style={{ fontWeight: 600, marginTop: "10px" }}
                >
                  {this.handleCartState(product.id) ? "Go to Cart" : "Add to Cart"}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div style={{width:"80%",margin:"20px 10%",height:"200px"}}><img style={{width:"100%",margin:"auto",height:"200px"}}src="banner1.png"/></div>
        <div style={{width:"80%",margin:"20px 10%",height:"200px"}}><img style={{width:"100%",margin:"auto",height:"200px"}}src="banner2.png"/></div>
        <Footer />
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
