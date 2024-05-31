import React, { Component } from "react";
import Header from "../Header";
import { Typography } from "@mui/material";
import { withRouter } from "react-router-dom";
import Footer from "../Footer";

class TermsOfService extends Component {
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
          <div
            style={{
              width: "50%",
              textAlign: "justify",
              padding: "20px",
              margin: "20px 10px",
              gap: "20px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            }}
          >
            <Typography
              style={{ fontWeight: 700, fontSize: "30px", textAlign: "center" }}
            >
              Terms of Service
            </Typography>
            <Typography variant="h6">Section 1 - Online Store Terms</Typography>
            <Typography variant="body1">
              This section outlines the age requirement to use the service and
              restricts illegal activities or copyright infringement. It also
              prohibits transmission of malicious code and warns about service
              termination for any violation of these terms.
            </Typography>
            <Typography variant="h6">Section 2 - General Conditions</Typography>
            <Typography variant="body1">
              This section reserves the right to refuse service and highlights
              that user content might be transferred unencrypted. It restricts
              unauthorized copying or exploitation of the service and clarifies
              that headings are for convenience only.
            </Typography>
            <Typography variant="h6">
              Section 3 - Accuracy, Completeness and Timeliness of Information
            </Typography>
            <Typography variant="body1">
              This section disclaims responsibility for inaccurate information
              and clarifies that the website content is for general information
              only. It advises users to consult primary sources for critical
              decisions and acknowledges the possibility of outdated historical
              information. The right to modify site content is reserved, but
              there's no obligation to update information. Users are responsible
              for monitoring site changes.
            </Typography>
            <Typography variant="h6">
              Section 4 - Modifications to the Service and Prices
            </Typography>
            <Typography variant="body1">
              This section informs users about potential price changes and
              reserves the right to modify or discontinue the service (or any
              part of it) without notice. It also clarifies that there's no
              liability for such actions.
            </Typography>
            <Typography variant="h6">
              Section 5 - Products or Services
            </Typography>
            <Typography variant="body1">
              This section covers the availability and limitations of online
              products or services. It acknowledges efforts to display product
              colors accurately but makes no guarantees about monitor
              calibration. It reserves the right to limit sales and product
              quantities. Product descriptions and pricing are subject to change
              without notice. The right to discontinue any product is also
              reserved. Offers are void where prohibited. There's no guarantee
              on product quality or service, and error correction is not
              assured.
            </Typography>
            <Typography variant="h6">
              Section 6 - Accuracy of Billing and Account Information
            </Typography>
            <Typography variant="body1">
              This section reserves the right to refuse orders and outlines
              limitations on purchase quantities. It also details how users will
              be notified of order changes or cancellations. The right to limit
              or prohibit orders placed by dealers or resellers is reserved.
              Users are required to provide accurate and updated account
              information for purchases. For return details, users are directed
              to the Returns Policy.
            </Typography>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default withRouter(TermsOfService);
