import React from "react";
import { withRouter } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter valid Email Id").required("Required"),
  password: yup.string().min(5).required("Required"),
});

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisibleIcon: false,
      errorMessage: "",
    };
  }
  handleToggle = () => {
    this.setState({ isVisibleIcon: !this.state.isVisibleIcon });
  };

  render() {
    return (
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
        <Box>
          <Box
            style={{
              height: "500px",
              width: "600px",
              margin: "auto",
              backgroundColor: "white",
              padding:"7px"
            }}
          >
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
              <p>Login page</p>
            </Box>
            <Box>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                  const storedUserData = localStorage.getItem("user");
                  if (storedUserData) {
                    const userData = JSON.parse(storedUserData);
                    if (
                      values.email === userData.email &&
                      values.password === userData.password
                    ) {
                      this.setState({errorMessage:"User logged in successfully!"});
                      console.log("User logged in successfully!");

                      localStorage.setItem("isLogIn", JSON.stringify(true));

                      this.props.history.push({
                        pathname: "/",
                      });
                    } 
                    else if(
                      values.email !== userData.email &&
                      values.password !== userData.password
                    )
                    {
                      this.setState({errorMessage:"User not valid"})
                    }
                    else if(
                      values.email !== userData.email
                    ){
                      this.setState({errorMessage:"Incorrect Email"});
                    }
                    else if(
                      values.password !== userData.password
                    )
                    {
                      this.setState({errorMessage:"Incorrect Password"});
                    }

                  } else {
                    this.setState({errorMessage:"User not found!"});
                    console.log("User not found!");
                  }
                  setSubmitting(false);
                }}
              >
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  errors,
                  touched,
                }) => (
                  <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "30px",
                      }}
                    >
                      {this.state.errorMessage && (
                        <Typography style={{color:"red",fontSize:"20px"}}>
                          {this.state.errorMessage}
                        </Typography>
                      )}  
                      <TextField
                        style={{ width: "350px" }}
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        label="Email"
                        variant="outlined"
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                      <TextField
                        style={{ width: "350px" }}
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
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
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                        style={{fontSize:"medium"}}
                      >
                        Log in
                        {/* <Link to={"/home"}>Log in</Link> */}
                        
                      </Button>
                    </Box>
                    <Box>
                      <Typography
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          margin: "20px",
                          fontSize: "18px",
                        }}
                      >
                        Don't have an Account ?
                        <span>
                          <Link to={"/signUp"}> Sign up</Link>
                        </span>
                      </Typography>
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default withRouter((LogIn));