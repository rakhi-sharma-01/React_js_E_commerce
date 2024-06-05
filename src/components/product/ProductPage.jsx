import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  addToCart,
  loadProductDetails,
  loadProducts,
} from "../Action/cartActions";
import "./ProductPage.css";
import Header from "../Header";
import Footer from "../Footer";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: null,
    };
  }
  componentDidMount() {
    this.props.loadProducts();
    const id = window.location.href.split("/")[4];
    console.log("id", id);
    this.props.loadProductDetails(id);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.productDetail.images !== this.props.productDetail.images &&
      this.props.productDetail.images &&
      this.state.mainImage === null
    ) {
      this.setState({ mainImage: this.props.productDetail.images[0] });
    }
  }

  handleThumbnailClick = (image) => {
    this.setState({ mainImage: image });
  };
  handleAddToCart = (product) => {
    this.props.addToCart(product);
  };

  handleCartState = (productId) => {
    return this.props.cart.some((cartItem) => cartItem.id === productId);
  };

  handleGoToCart = () => {
    this.props.history.push("/cartDetails");
  };

  render() {
    const { productDetail } = this.props;
    const { mainImage } = this.state;
    // if (!product) {
    //   return <div>Loading...</div>;
    // };

    return (
      <div>
        <Header />

        <div className="product-page">
          <div className="product-gallery">
            <img
              src={mainImage}
              alt="Product"
              className="main-image"
            />
            <div className="thumbnail-images">
              {productDetail.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => this.handleThumbnailClick(image)}
                />
              ))}
            </div>
          </div>
          <div className="product-details">
            <p style={{ fontSize: "30px", fontWeight: 700, margin: "20px" }}>
              {productDetail.name}
            </p>
            <p className="price">Rs:{productDetail.price}</p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 500,
                margin: "20px",
                color: "green",
              }}
            >
              {productDetail.offers}
            </p>
            <p style={{ fontSize: "20px", fontWeight: 400, margin: "20px" }}>
              Description: {productDetail.description}
            </p>
   
            <button
              className="add-to-bag"
              onClick={() =>
                this.handleCartState(productDetail.id)
                  ? this.handleGoToCart(productDetail)
                  : this.handleAddToCart(productDetail)
              }
              // onClick={() => this.props.addToCart(productDetail)}
            >
              {this.handleCartState(productDetail.id)
                ? "Go to Cart"
                : "Add to Cart"}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("productDetail", state.cart.productDetail);
  return {
    cart: state.cart.items,
    products: state.cart.products,
    productDetail: state.cart.productDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    loadProductDetails: (productId) => dispatch(loadProductDetails(productId)),
    loadProducts: () => dispatch(loadProducts()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);


