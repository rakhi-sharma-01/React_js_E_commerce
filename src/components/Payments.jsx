import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class PaymentMethods extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selectedPaymentMethod: '',
    // };
  }
  handleCheckout = () => {
    this.props.history.push("/orderSucess");
  };

  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lavenderblush",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                boxShadow:
                  "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
                src="payment.jpg"
              />
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "oldlace",
                boxShadow:
                  "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
              }}
            >
              <Typography
                style={{
                  fontSize: "40px",
                  fontWeight: 600,
                  justifyContent: "center",
                  display: "flex",
                  color: "coral",
                  fontFamily: "serif",
                }}
              >
                Payment Methods
              </Typography>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "300px",
                  margin: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    overflow: "hidden",
                    height: "50px",
                    width: "60px",
                    padding: "15px",
                    margin: "10px",
                  }}
                  src="visa_card.png"
                />
                <img
                  style={{
                    overflow: "hidden",
                    height: "50px",
                    width: "60px",
                    padding: "15px",
                    margin: "10px",
                  }}
                  src="paypal.png"
                />
                <img
                  style={{
                    overflow: "hidden",
                    height: "50px",
                    width: "60px",
                    padding: "15px",
                    margin: "10px",
                  }}
                  src="mastercard.png"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  style={{ width: "300px" }}
                  id="name"
                  name="name"
                  type="name"
                  //   onChange={handleChange}
                  label="Name on Card"
                  variant="outlined"
                />
                <TextField
                  style={{ width: "300px" }}
                  id="cardNo"
                  name="cardNo"
                  type="tel"
                  label="Card No"
                  variant="outlined"
                  onChange={(e) => {
                    const inputValue = e.target.value.replace(/\D/g, "");
                    // setFieldValue("mobNo", inputValue);
                  }}
                  inputProps={{ maxLength: "16" }}
                />
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "27px" }}
                >
                  <FormControl>
                    <InputLabel id="input_label">Month</InputLabel>
                    <Select
                      labelId="input_label"
                      label="Month"
                      style={{ width: "150px" }}
                      id="month"
                      name="month"
                      type="text"
                      variant="outlined"
                      placeholder="Month"
                    >
                      <MenuItem disabled value={"none"}>
                        Month
                      </MenuItem>
                      <MenuItem value={"January"}>January</MenuItem>
                      <MenuItem value={"Feburary"}>Feburary</MenuItem>
                      <MenuItem value={"March"}>March</MenuItem>
                      <MenuItem value={"April"}>April</MenuItem>
                      <MenuItem value={"May"}>May</MenuItem>
                      <MenuItem value={"June"}>June</MenuItem>
                      <MenuItem value={"July"}>July</MenuItem>
                      <MenuItem value={"August"}>August</MenuItem>
                      <MenuItem value={"September"}>September</MenuItem>
                      <MenuItem value={"October"}>October</MenuItem>
                      <MenuItem value={"November"}>November</MenuItem>
                      <MenuItem value={"December"}>December</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <InputLabel id="input_label1">Year</InputLabel>
                    <Select
                      label="Year"
                      labelId="input_label1"
                      // value="Year"
                      style={{ width: "120px" }}
                      id="year"
                      name="year"
                      type="text"
                      variant="outlined"
                      placeholder="Year"
                    >
                      <MenuItem disabled value={"none"}>
                        Year
                      </MenuItem>
                      <MenuItem value={"2024"}>2024</MenuItem>
                      <MenuItem value={"2025"}>2025</MenuItem>
                      <MenuItem value={"2026"}>2026</MenuItem>
                      <MenuItem value={"2027"}>2027</MenuItem>
                      <MenuItem value={"2028"}>2028</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <TextField
                  style={{ width: "300px" }}
                  id="cvv"
                  name="cvv"
                  type="tel"
                  label="CVV"
                  variant="outlined"
                  onChange={(e) => {
                    const inputValue = e.target.value.replace(/\D/g, "");
                  }}
                  inputProps={{ maxLength: "3" }}
                />

                <Button
                  variant="filled"
                  style={{
                    textDecoration: "none",
                    padding: "10px",
                    margin: "20px",
                    width: "150px",
                    backgroundColor: "coral",
                    color: "white",
                    borderRadius: "5px",
                  }}
                  onClick={()=>{
                    this.handleCheckout()
                  }}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PaymentMethods);
