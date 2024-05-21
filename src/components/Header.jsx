import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "@mui/material";
import { Link, withRouter } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Badge, Button } from "@mui/material";
import { styled } from "@mui/system";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '12px',
    height: '25px',
    minWidth: '25px',
    padding: '0 6px',
    borderRadius: '50%',
    top: '5px',
    right: '10px',
    fontWeight:600
  }
}));

class Header extends Component {
  constructor() {
    super();
    this.state={
      isLoggedIn: JSON.parse(localStorage.getItem("isLogIn")) || false
    }
  }
  handleClick = () => {
    console.log();
    this.props.history.push({
      pathname: "/cartDetails",
    });
  };
  goToProfile =()=>{
    this.props.history.push('./profile')
  }
  handleLogin = () => {
    localStorage.setItem("isLogIn", true);
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    localStorage.removeItem("isLogIn");
    this.setState({ isLoggedIn: false }); 
  };
  render() {
    // const {cartCount} = this.props;
    return (
      // <div style={{width:"100vw",display:"flex",overflow:"hidden"}}>
        <div style={{top:0,position:"sticky",width:"100%",overflow:"hidden",backgroundColor:"darkgrey",height:"100px",color:"white",display:"flex",justifyContent:"space-between"}}>
          <p style={{width:"100px",fontSize:"25px",padding:"25px"}}>Home</p>
          <p style={{width:"100px",fontSize:"25px",padding:"25px"}}>About</p>
          <p style={{width:"100px",fontSize:"25px",padding:"25px"}}>Services</p>
          <p style={{width:"100px",fontSize:"25px",padding:"25px"}}>Contact Us</p>

          <div style={{display:'flex',marginLeft:'40%',padding:"25px"}}>
            <AccountCircleIcon fontSize="large" style={{fontSize:"40px"}} onClick={this.goToProfile}/>
          </div>

          <div style={{padding:"25px"}}>
            <StyledBadge sx={{fontSize:"20px",fontWeight:600}} badgeContent={this.props.cartCount} color="primary">
              <ShoppingCartIcon fontSize="large" style={{fontSize:"40px"}} onClick={this.handleClick}/>
            </StyledBadge>
          </div>
          <div>
          <Button variant="text" style={{ color: "white", marginTop: "20px" }}>
            {this.state.isLoggedIn ? (
              <Link to="/" style={{textDecoration:"none",padding:"5px",backgroundColor:"darkblue",color:"white",borderRadius:"5px"}} onClick={this.handleLogout}>Log Out</Link>

            ) : (
              <Link to="/login" style={{textDecoration:"none",padding:"5px",margin:"5px",backgroundColor:"darkblue",color:"white",borderRadius:"5px"}} onClick={this.handleLogin}>Log In</Link>
            )}
          </Button>
            {/* <Button variant="text" style={{color:"white",marginTop:"20px"}} onClick={()=>{this.handleLogIn() === true ? this.handleLogIn() : this.handleLogOut()}}>
              {this.handleLogIn() === true ? 'Log out' : 'Log in'}
            </Button> */}
          </div>
          
        </div>
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("cartCount", state);
  return {
    cartCount: state.cart.items.length,
  };
};

export default withRouter(connect(mapStateToProps)(Header));

          {/* <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
            onClick={this.handleClick}
          /> */}