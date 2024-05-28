import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "@mui/material";
import { Link, withRouter } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Badge, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import "./header.css";

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
      isLoggedIn: JSON.parse(localStorage.getItem("isLogIn")) || false,
      dropdownVisible: false
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
  goTohome =() => {
    this.props.history.push('./');
  }

  handleLogout = () => {
    localStorage.removeItem("isLogIn");
    this.setState({ isLoggedIn: false }); 
  };

  handleMouseOver = () => {
    this.setState({ dropdownVisible: true });
  };

  handleMouseOut = () => {
    this.setState({ dropdownVisible: false });
  };

  render() {
    // const {cartCount} = this.props;
    const{dropdownVisible} = this.state;
    return (
      // <div style={{width:"100vw",display:"flex",overflow:"hidden"}}>
        <div className="headerNav" style={{top:0,position:"sticky",width:"100%",overflow:"hidden",backgroundColor:"black",height:"90px",color:"white",display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
           <div style={{width:"100%",height:"20px",justifyContent:"center",alignItems:"center",textAlign:"center",display:"flex",backgroundColor:"rgb(138 115 80)"}}>
            <Typography>FREE SHIPPING ON ALL ONLINE PAYMENTS. FREE RETURNS.</Typography>
           </div>
           <div style={{width:"100%",overflow:"hidden",backgroundColor:"black",height:"100px",color:"white",display:"flex",justifyContent:"space-between"}}>
             <a style={{width:"120px",fontSize:"24px",padding:"10px"}}><img style={{height:"50px",width:"50px",marginLeft:"20px"}} src="RAKHI SHARMA.png" onClick={this.goTohome}/></a>
             <nav>
              <ul>
                <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} style={{width:"120px",fontSize:"24px",padding:"20px",whiteSpace:"nowrap",listStyleType: "none"}}>Smart TV
                {dropdownVisible && 
                  <div style={{width:"90%",height:"200px",color:"white"}}>
                    <ul>
                      <li>MI TV</li>
                      <li>MI TV</li>
                      <li>MI TV</li>
                      <li>MI TV</li>
                    </ul>
                  </div>
                }
                </li>
              </ul>
             </nav>
             {/* <a style={{width:"120px",fontSize:"24px",padding:"20px",whiteSpace:"nowrap"}}>Smart TV</a>
             <a style={{width:"120px",fontSize:"24px",padding:"20px"}}>Phone</a>
             <a style={{width:"120px",fontSize:"24px",padding:"20px"}}>Tablet</a>
             <a style={{width:"120px",fontSize:"24px",padding:"20px"}}>Community</a>
             <a style={{width:"120px",fontSize:"24px",padding:"20px"}}>Support</a> */}


             <div style={{display:'flex',marginLeft:'25%',padding:"17px"}}>
               <AccountCircleIcon fontSize="large" style={{fontSize:"40px"}} onClick={this.goToProfile}/>
             </div>

              <div style={{padding:"17px"}}>
                <StyledBadge sx={{fontSize:"20px",fontWeight:600}} badgeContent={this.props.cartCount} color="primary">
                  <ShoppingCartIcon fontSize="large" style={{fontSize:"40px"}} onClick={this.handleClick}/>
                </StyledBadge>
              </div>
              <div>
               <Button variant="text" className="button" style={{ color: "white", marginTop: "10px",width:"130px",fontSize:"5px" }}>
                 {this.state.isLoggedIn ? (
               <Link to="/" className="button" style={{textDecoration:"none",padding:"5px",backgroundColor:"darkblue",color:"white",borderRadius:"5px"}} onClick={this.handleLogout}>Log Out</Link>

                ) : (
                 <Link to="/login" className="button" style={{textDecoration:"none",padding:"5px",margin:"5px",backgroundColor:"darkblue",color:"white",borderRadius:"5px"}} onClick={this.handleLogin}>Log In</Link>
                )}
               </Button>
    
              </div>
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

