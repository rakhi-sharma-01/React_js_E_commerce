import React from "react";
import { withRouter } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  name: yup.string().matches(/^[a-zA-Z]*$/,"Name should be text only").required("Name is required"),
  email: yup
    .string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter valid Email Id")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      // "Password must contain at least one uppercase, one lowercase, one special character, and one number with a minimum of eight characters"
    )
    .required("Password is required"),
  mobNo: yup.string().matches(/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/, "Mobile number should contain 10 digits")
  .required("Mobile number is required"),
  gender: yup.string().required("gender is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  address: yup.string().required("Address is required"),
});

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisibleIcon: false,
      strengthMsg: "",
    };
  }
  handleToggle = () => {
    this.setState({ isVisibleIcon: !this.state.isVisibleIcon });
  };

  handlePassword = (e) => {
    // console.log("called", e);
    // console.log("pass length",e?.target.value);
    const newPass = e.target.value;
  
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(newPass) && newPass.length >= 8) {
      this.setState({ strengthMsg: "strong password" });
    } 
    else if (/[a-z]/.test(newPass) && /[A-Z]/.test(newPass) && (/\d/.test(newPass)) || /[!@#$%^&*]/.test(newPass)){
      this.setState({ strengthMsg: "medium password" });
    }  
    else {
      this.setState({ strengthMsg: "weak password" });
    }
    return e.target.value;
  };

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
            <Box>
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
                <p>Sign Up</p>
              </Box>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  mobNo: "",
                  address: "",
                  gender: "",
                  city: "",
                  state: "",
                  country: "",
                  password: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("called");
                  console.log("userData: ", values);
                  localStorage.setItem("user", JSON.stringify(values));
                  setSubmitting(false);
                  this.props.history.push("./login");
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
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Email"
                          variant="outlined"
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                        />
                        <TextField
                          style={{ width: "300px" }}
                          id="password"
                          name="password"
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={(e) =>
                            setFieldValue("password", this.handlePassword(e))
                          }

                          type={this.state.isVisibleIcon ? "text" : "password"}
                          label="Password"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  className="toggle_eye"
                                  onClick={this.handleToggle}
                                >
                                  {this.state.isVisibleIcon ? (
                                    <VisibilityOff className="icon" />
                                  ) : (
                                    <Visibility className="icon" />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          error={Boolean(touched.password && errors.password)}
                          helperText={touched.password && errors.password}
                        />
                        {this.state.strengthMsg && (
                          <Typography style={{marginRight: "150px",fontSize: "15px",color: "blue"}}>{this.state.strengthMsg}</Typography>
                        )}
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
                        <FormControl>
                          <InputLabel
                            id="input_label"
                            // style={{
                            //   color: errors.gender ? "#d32f2f" : "rgba(0, 0, 0, 0.6)",
                            // }}
                          >
                            Gender
                          </InputLabel>
                          <Select
                            labelId="input_label"
                            label="Gender"
                            // value="Gender"
                            style={{ width: "300px" }}
                            id="gender"
                            name="gender"
                            type="text"
                            value={values.gender}
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="Gender"
                            onBlur={handleBlur}
                            error={Boolean(touched.gender && errors.gender)}
                          >
                            <MenuItem disabled value={"none"}>
                              Gender
                            </MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Others"}>Others</MenuItem>
                          </Select>
                          <FormHelperText error>
                            {touched.gender && errors.gender}
                          </FormHelperText>
                        </FormControl>
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
                        Sign Up
                      </Button>
                      <Typography
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          margin: "20px",
                          fontSize: "18px",
                        }}
                      >
                        Already have an account ?
                        <span>
                          <Link to={"/login"}> Log in</Link>
                        </span>
                      </Typography>
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

export default withRouter((SignUp));

