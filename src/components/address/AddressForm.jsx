import React, { Component } from 'react';
import './address.css';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address submitted:', this.state);
    // You can add logic to handle form submission, such as API calls
  }

  render() {
    return (
      <div className="address-form">
        <h2>Add Your Address</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Zip:
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddressForm;