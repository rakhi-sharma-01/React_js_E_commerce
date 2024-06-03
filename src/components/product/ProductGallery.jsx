import React, { Component } from 'react';
import './ProductGallery.css';

class ProductGallery extends Component {
  render() {
    return (
      <div className="product-gallery">
        <img src="image-url" alt="Product" className="main-image" />
        <div className="thumbnail-images">
          <img src="thumbnail1-url" alt="Thumbnail" />
          <img src="thumbnail2-url" alt="Thumbnail" />
          <img src="thumbnail3-url" alt="Thumbnail" />
        </div>
      </div>
    );
  }
}

export default ProductGallery;
