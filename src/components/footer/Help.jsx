import { Typography, Button, TextField } from "@mui/material";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  comment: Yup.string().required("Comment is required"),
});

class Help extends Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
    };
  }

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    this.setState({ submitted: true });
    resetForm();
  };

  render() {
    return (
      <div>
        <Header />
        <div style={{ width: "100%", backgroundColor: "lavenderblush" }}>
          <div
            style={{
              width: "100%",
              height: "500px",
              backgroundImage: "url(helping-each-other.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "round",
            }}
          >
            {/* <img style={{width:"100%",height:"500px",position:"relative",zIndex:-1}} src={"helping-each-other.jpg"}/> */}
            <Typography
              style={{
                textAlign: "center",
                fontSize: "45px",
                fontWeight: 700,
                color: "#06cbda",
                padding: "30px",
              }}
            >
              We're here to help!{" "}
            </Typography>
          </div>
          <div
            style={{
              width: "100%",
              height: "650px",
              margin: "0 auto",
              backgroundColor: "lavenderblush",
              color:"black",
              display:"flex",
              flexDirection:"column"
            }}
          >
            <div style={{width:"100%"}}>
            <Typography variant="h4" gutterBottom style={{textAlign:"center",marginTop:"10px"}}>
              Contact Information
            </Typography>
            <Typography variant="body1" gutterBottom style={{textAlign:"center"}}>
              We’d love to hear about your experience with Rosier. Please get in
              touch with any comments, suggestions or questions you might have.
            </Typography>
            </div>
            <div style={{width:"100%"}}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phoneNumber: "",
                comment: "",
              }}
              validationSchema={validationSchema}
              onSubmit={this.handleSubmit}
            >
              {({ errors, touched }) => (
                <Form style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <div style={{ marginBottom: 20,width:"350px" }}>
                    <Field
                      name="name"
                      as={TextField}
                      label="Name"
                      fullWidth
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </div>
                  <div style={{ marginBottom: 20,width:"350px" }}>
                    <Field
                      name="email"
                      as={TextField}
                      label="Email"
                      fullWidth
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </div>
                  <div style={{ marginBottom: 20,width:"350px" }}>
                    <Field
                      name="phoneNumber"
                      as={TextField}
                      label="Phone number"
                      fullWidth
                      error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  </div>
                  <div style={{ marginBottom: 20,width:"350px" }}>
                    <Field
                      name="comment"
                      as={TextField}
                      label="Comment"
                      fullWidth
                      multiline
                      rows={4}
                      error={touched.comment && Boolean(errors.comment)}
                      helperText={touched.comment && errors.comment}
                    />
                  </div>
                  <Button type="submit" variant="contained" color="primary">
                    Send
                  </Button>
                </Form>
              )}
            </Formik>
            {this.state.submitted && (
              <Typography
                variant="h6"
                color="success"
                style={{ marginTop: 20 }}
              >
                Sent successfully!
              </Typography>
            )}
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(Help);
