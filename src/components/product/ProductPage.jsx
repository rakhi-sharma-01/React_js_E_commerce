import React, { Component } from 'react';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import './ProductPage.css';

class ProductPage extends Component {
  render() {
    return (
      <div className="product-page">
        <ProductGallery />
        <ProductDetails />
      </div>
    );
  }
}

export default ProductPage;
