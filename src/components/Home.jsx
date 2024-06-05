import React, { Component } from "react";
import Header from "./Header";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { addToCart, filterProducts, loadProducts } from "./Action/cartActions";
import { Link, withRouter } from "react-router-dom";
import Slider from "./Slider";
import Footer from "./Footer";

class Home extends Component {
componentDidMount(){
  this.props.loadProducts();
}
handleFilterChange =(filterType) => {
  this.props.filterProducts(filterType)
}

  render() {
    const { filteredProducts,  } = this.props;
    console.log("filteredProducts",filteredProducts);

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
          <Button style={{color:"white",fontSize:"20px",padding:"15px",fontWeight:600}} onClick={() => this.handleFilterChange("all")}>
            All Products
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {filteredProducts.map((product) => (
           <Link to={`/productPage/${product.id}`} style={{ textDecoration: 'none' }}  >
              <div key={product.id} className="cart-wrapper" >
              <div
                style={{ width: "300px", height: "360px", textAlign: "center", }}
              >
                <img
                  src={product.images[0]} 
                  style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "20px",
                    
                  }}
                  alt={product.name}
                />
                <div style={{ marginTop: "10px",textDecoration: 'none' }}>{product.name}</div>
                <div style={{textDecoration:"none"}}>Rs: {product.price}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button style={{fontWeight:700,fontSize:"18px"}}>Know more</Button>
              </div>
             </div>
           </Link>
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
  console.log("products",state.cart.products);
  return {
    cart: state.cart.items,
    filteredProducts: state.cart.filteredProducts,
    products: state.cart.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    loadProducts: () => dispatch(loadProducts()),
    filterProducts: (filterType) => dispatch(filterProducts(filterType)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

// handleAddToCart =(product)=> {
//   this.props.addToCart(product)
// }
// handleCartState = (productId) => {
//   return this.props.cart.some((cartItem) => cartItem.id === productId);
// };

// handleGoToCart = () => {
//   this.props.history.push("/cartDetails");
// };

    // if(!filteredProducts){
    //   return null;
    // }

                {/* <Button
                  variant="contained"
                  onClick={() =>
                    this.handleCartState(product.id)
                      ? this.handleGoToCart(product)
                      : this.handleAddToCart(product)
                  }
                  style={{ fontWeight: 600, marginTop: "10px" }}
                >
                  {this.handleCartState(product.id) ? "Go to Cart" : "Add to Cart"}
                </Button> */}