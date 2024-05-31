import React, { Component } from "react";
import Header from "../Header";
import { Typography } from "@mui/material";
import { withRouter } from "react-router-dom";
import Footer from "../Footer";

class RefundPolicy extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            width: "100%",
            backgroundColor: "lavenderblush",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{width:"50%",textAlign:"justify",padding:"20px",margin:"20px 10px",gap:"20px",display:"flex",flexDirection:"column",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}}>
            <Typography style={{fontWeight:700, fontSize:"30px",textAlign:"center"}}>Refund Policy</Typography>

            <Typography variant="body1">
              We have a 2-day return policy, which means you have 2 days after
              receiving your item to request a return.
            </Typography>

            <Typography variant="body1">
              For exchanges or returns to be considered, your item must maintain
              its original condition, remain unused, and be in its original
              packaging. Please ensure that you provide the invoice during the
              return pickup process. Products that have been used are not
              eligible for exchange or return.
            </Typography>

            <Typography variant="body1">
              Exchanges or returns are permissible under the following
              circumstances:
            </Typography>

            <ul style={{listStyleType:"none"}}>
              <li>
                <Typography variant="body1">
                  1. The product is damaged, or you have received the incorrect
                  item.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  2. The product's seal is broken upon delivery.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  3. The product has expired before its delivery.
                </Typography>
              </li>
            </ul>

            <Typography variant="body1">
              If your return meets the criteria, we will arrange for the item to
              be picked up from the same address. You will receive notification
              regarding the expected pick-up date.
            </Typography>

            <Typography variant="body1">
              For exchanges, the replacement product will be delivered to you
              within 3-5 days after the return pick-up is completed.
            </Typography>

            <Typography variant="body1">
              If there are any discrepancies related to the delivery, kindly
              contact us within 48 hours after the order has been marked as
              delivered.
            </Typography>

            <Typography variant="body1">
              We will consider a request for order cancellation only if the
              product has not yet been shipped. Should your cancellation request
              be accepted, you will receive a refund for the entire amount.
              Rosier reserves the right to cancel or reject any order for
              various reasons, such as stock unavailability, pricing or
              informational errors, or issues identified with the customer's
              personal or financial details.
            </Typography>

            <Typography variant="body1">
              Upon receiving and inspecting your return, we will notify you of
              its arrival and whether the refund has been approved. If approved,
              the refund will be processed automatically to your original
              payment method. Please allow approximately 5-7 days for the
              refunded amount to reflect.
            </Typography>

            <Typography variant="body1">
              For any questions regarding returns, feel free to contact us at
              care@rakhisharma.com
            </Typography>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default withRouter(RefundPolicy);
