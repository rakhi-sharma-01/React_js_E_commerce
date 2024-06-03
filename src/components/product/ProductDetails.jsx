import React, { Component } from 'react';
import './ProductDetails.css';

class ProductDetails extends Component {
  render() {
    return (
      <div className="product-details">
        <h1>Maternity Full Panel Favorite Ankle Jeggings</h1>
        <p className="price">$53.00 <span className="original-price">$74.95</span></p>
        <p className="color">Color: Dark Indigo</p>
        <div className="sizes">
          <p>Size:</p>
          <select>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
          </select>
        </div>
        <button className="add-to-bag">ADD TO BAG</button>
      </div>
    );
  }
}

export default ProductDetails;
