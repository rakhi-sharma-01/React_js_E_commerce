import React, { Component } from "react";
import Header from "../Header";
import { Typography } from "@mui/material";
import { withRouter } from "react-router-dom";
import Footer from "../Footer";

class PrivacyPolicy extends Component {
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
              Privacy Policy
            </Typography>
            <Typography variant="h5">
              Section 1 - What Do We Do With Your Information?
            </Typography>

            <Typography variant="body1">
              This section explains how Rosier Foods collects and uses your
              personal information when you visit their store or make a
              purchase. It details that they collect information like name,
              address, email address during transactions and browsing activity
              (IP address) to understand user trends. It also mentions obtaining
              consent for email marketing (if applicable).
            </Typography>

            <Typography variant="h5">Section 2 - Consent </Typography>
            <Typography variant="body1">
              This section clarifies how Rosier Foods obtains your consent for
              collecting and using your information. It explains implied consent
              during transactions and the option to opt-out or provide explicit
              consent for marketing purposes. You can withdraw consent anytime
              by contacting them at the provided information.
            </Typography>

            <Typography variant="h5">Section 3 - Disclosure</Typography>
            <Typography variant="body1">
              This section states that Rosier Foods may disclose your
              information if legally required or if you violate their Terms of
              Service.
            </Typography>

            <Typography variant="h5">Section 4 - Payment</Typography>
            <Typography variant="body1">
              This section explains how Rosier Foods uses Razorpay for secure
              payment processing. It assures that your card data is not stored
              and uses PCI-DSS standards for encryption. It also details that
              transaction data is only used for completing the purchase and not
              saved later.
            </Typography>

            <Typography variant="h5">Section 5 - Third-Party Services</Typography>
            <Typography variant="body1">
              This section clarifies the role of third-party service providers
              like payment gateways. It assures that these providers only
              collect necessary information for transactions and recommends
              reviewing their privacy policies for a clearer understanding. It
              also highlights the possibility of your information being subject
              to laws of different jurisdictions based on the service provider's
              location. Finally, it mentions that this policy doesn't govern
              third-party websites or applications.
            </Typography>

            <Typography variant="h5">Section 6 - Security</Typography>

            <Typography variant="body1">
              This section assures that Rosier Foods takes security measures to
              protect your personal information from unauthorized access,
              disclosure, alteration, or destruction.
            </Typography>

            <Typography variant="h5">Section 7 - Cookies</Typography>

            <Typography variant="body1">
              This section briefly explains the use of cookies to maintain user
              sessions and clarifies that they are not used for personal
              identification on other websites.
            </Typography>

            <Typography variant="h5">Section 8 - Age of Consent</Typography>

            <Typography variant="body1">
              This section states the age requirement to use the website. Users
              must be of legal age in their jurisdiction or have parental
              consent for minors.
            </Typography>

            <Typography variant="h5">Section 9 - Changes to This Privacy Policy</Typography>

            <Typography variant="body1">
              This section informs users about potential changes to the Privacy
              Policy and encourages frequent review. It clarifies that changes
              are effective immediately upon posting and highlights any material
              changes with a notification. It also mentions the possibility of
              information transfer in case of a merger or acquisition.
            </Typography>

          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default withRouter(PrivacyPolicy);
