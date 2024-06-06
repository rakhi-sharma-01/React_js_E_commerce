import React from "react";
import { withRouter } from "react-router-dom";
import {
  Box,
  Button,
  TextField
} from "@mui/material";
import { Formik } from "formik";
// import { Link } from "react-router-dom";
import * as yup from "yup";

const AddressSchema = yup.object().shape({
  name: yup.string().matches(/^[a-zA-Z\s]*$/,"Name should be text only").required("Name is required"),
  mobNo: yup.string().matches(/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/, "Mobile number should contain 10 digits")
  .required("Mobile number is required"),
  city: yup.string().required("City is required"),
  pincode: yup.string().matches(/^[1-9]{1}\d{2}\s?\d{3}$/,"pincode is invalid").required("pincode is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  address: yup.string().required("Address is required"),
});

class Address extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisibleIcon: false,
      strengthMsg: "",
    };
  }

  render() {
    // console.log("errors", this.errors);
    return (
      <>
        <Box
          style={{
            backgroundColor: "#764abc",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box
            style={{
              width: "fit-content",
              height: "fit-content",
              margin: "auto",
              backgroundColor: "white",
            }}
          >
            <Box style={{padding:"20px 5px"}}>
              <Box
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: 700,
                  margin: "30px",
                  backgroundColor: "#764abc",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Shipping Address</p>
              </Box>
              <Formik
                initialValues={{
                  name: "",
                  mobNo: "",
                  city: "",
                  pincode: "",
                  state: "",
                  country: "",
                  address: "",
                }}
                validationSchema={AddressSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("userAddress: ", values);
                  localStorage.setItem("userAddress", JSON.stringify(values));
                  setSubmitting(false);
                  this.props.history.push("./payments");
                }}
              >
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  errors,
                  handleBlur,
                  setFieldValue,
                  touched,
                }) => (
                  <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "30px",
                        gap: "120px",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "20px",
                          gap: "20px",
                        }}
                      >
                        <TextField
                          style={{ width: "300px" }}
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Name"
                          variant="outlined"
                          error={Boolean(touched.name && errors.name)}
                          helperText={touched.name && errors.name}
                        />
                        <TextField
                          style={{ width: "300px" }}
                          id="mobNo"
                          name="mobNo"
                          type="tel"
                          value={values.mobNo}
                          label="Mobile No"
                          variant="outlined"
                          onBlur={handleBlur}
                          onChange={(e) => {
                            const inputValue = e.target.value.replace(
                              /\D/g,
                              ""
                            );
                            setFieldValue("mobNo", inputValue);
                          }}
                          inputProps={{ maxLength: "10" }}
                          error={Boolean(touched.mobNo && errors.mobNo)}
                          helperText={touched.mobNo && errors.mobNo}
                        />
                        <TextField
                          style={{ width: "300px" }}
                          id="city"
                          name="city"
                          type="text"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="City"
                          variant="outlined"
                          error={Boolean(touched.city && errors.city)}
                          helperText={touched.city && errors.city}
                        />
                        <TextField
                          style={{ width: "300px" }}
                          id="pincode"
                          name="pincode"
                        //   type="tel"
                          value={values.pincode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="pincode"
                          variant="outlined"
                          error={Boolean(touched.pincode && errors.pincode)}
                          helperText={touched.pincode && errors.pincode}
                        />
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "20px",
                          gap: "20px",
                          marginBottom:"76px"
                        }}
                      >
                        <TextField
                          style={{ width: "300px" }}
                          id="state"
                          name="state"
                          type="text"
                          value={values.state}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="State"
                          variant="outlined"
                          error={Boolean(touched.state && errors.state)}
                          helperText={touched.state && errors.state}
                        />
                        <TextField
                          style={{ width: "300px" }}
                          id="country"
                          name="country"
                          type="text"
                          value={values.country}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Country"
                          variant="outlined"
                          error={Boolean(touched.country && errors.country)}
                          helperText={touched.country && errors.country}
                        />
                        <TextField
                          style={{ width: "300px" }}
                          id="address"
                          name="address"
                          type="text"
                          value={values.address}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Address"
                          variant="outlined"
                          multiline
                          rows={2}
                          error={Boolean(touched.address && errors.address)}
                          helperText={touched.address && errors.address}
                        />
                      </Box>
                    </Box>
                    <Box
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                        style={{fontSize:"medium"}}
                      >
                        Save Address
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default withRouter((Address));