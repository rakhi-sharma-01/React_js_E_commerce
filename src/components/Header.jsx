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
      dropdownVisible:{
        smartTv: false,
        phone: false,
        tablet: false,
        community: false,
        support: false
      }
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

  handleMouseOver = (key) => {
    this.setState((prevState)=>({
      dropdownVisible: {...prevState.dropdownVisible , [key]:true}
    }));
  };

  handleMouseOut = (key) => {
    this.setState((prevState)=>({
      dropdownVisible: {...prevState.dropdownVisible , [key]:false}
    }));  };

  render() {
    // const {cartCount} = this.props;
    const{dropdownVisible} = this.state;
    return (
      // <div style={{width:"100vw",display:"flex",overflow:"hidden"}}>
        <div className="headerNav" style={{top:0,position:"sticky",width:"100%",overflow:"hidden",backgroundColor:"black",height:"90px",color:"white",display:"flex",justifyContent:"space-between",flexDirection:"column",zIndex:2}}>
           <div style={{width:"100%",height:"20px",justifyContent:"center",alignItems:"center",textAlign:"center",display:"flex",backgroundColor:"rgb(138 115 80)"}}>
            <Typography>FREE SHIPPING ON ALL ONLINE PAYMENTS. FREE RETURNS.</Typography>
           </div>
           <div style={{width:"100%",overflow:"hidden",backgroundColor:"black",height:"100px",color:"white",display:"flex",justifyContent:"space-between"}}>
             <a style={{width:"120px",fontSize:"24px",padding:"10px"}}><img style={{height:"50px",width:"50px",marginLeft:"20px"}} src="RAKHI SHARMA.png" onClick={this.goTohome}/></a>
             <div style={{position:"relative"}}>
             <a style={{width:"120px",fontSize:"24px",padding:"20px",whiteSpace:"nowrap",position:"relative"}} onMouseOver={()=>this.handleMouseOver('smartTv')} onMouseOut={()=>this.handleMouseOut('smartTv')}>
                 Smart TV 
                  {dropdownVisible.smartTv && 
                  <div style={{color: "white", backgroundColor: "black", position: "absolute", left: 0 }}>
                    <ul style={{ fontFamily:"'Camphor Pro', sans-serif",fontSize:"20px", listStyleType: "none", padding: "20px", margin: 0,position:"fixed",zIndex:9999 ,backgroundColor:"black",width:"max-content"}}>
                      <li>QLED TV</li>
                      <li>Alexa TV</li>
                    </ul>
                  </div>}
               </a>
             </div> 
             <div style={{position:"relative"}}>
                <a style={{width:"120px",fontSize:"24px",padding:"20px",whiteSpace:"nowrap",position:"relative"}} onMouseOver={()=>this.handleMouseOver('phone')} onMouseOut={()=>this.handleMouseOut('phone')}>
                 Phone 
                  {dropdownVisible.phone && 
                  <div style={{color: "white", backgroundColor: "black", position: "absolute", left: 0 }}>
                    <ul style={{ fontFamily:"'Camphor Pro', sans-serif",fontSize:"20px", listStyleType: "none", padding: "20px", margin: 0,position:"fixed",zIndex:9999 ,backgroundColor:"black",width:"max-content"}}>
                      <li>Xiomi Series</li>
                      <li>Redmi Series</li>
                    </ul>
                  </div>}
               </a>
             </div>
             <div style={{position:"relative"}}>
                <a style={{width:"120px",fontSize:"24px",padding:"20px",whiteSpace:"nowrap",position:"relative"}} onMouseOver={()=>this.handleMouseOver('tablet')} onMouseOut={()=>this.handleMouseOut('tablet')}>
                 Tablet 
                  {dropdownVisible.tablet && 
                  <div style={{color: "white", backgroundColor: "black", position: "absolute", left: 0 }}>
                    <ul style={{fontFamily:"'Camphor Pro', sans-serif",fontSize:"20px", listStyleType: "none", padding: "20px", margin: 0,position:"fixed",zIndex:9999 ,backgroundColor:"black",width:"max-content"}}>
                      <li>Xiomi Pad</li>
                      <li>Redmi Pad</li>
                      <li>Tablet Accessories</li>
                    </ul>
                  </div>}
               </a>
             </div>
             <div style={{position:"relative"}}>
                <a style={{width:"120px",fontSize:"24px",padding:"20px",whiteSpace:"nowrap",position:"relative"}} onMouseOver={()=>this.handleMouseOver('community')} onMouseOut={()=>this.handleMouseOut('community')}>
                 Community 
                  {dropdownVisible.community && 
                  <div style={{color: "white", backgroundColor: "black", position: "absolute", left: 0 }}>
                    <ul style={{ fontFamily:"'Camphor Pro', sans-serif",fontSize:"20px", listStyleType: "none", padding: "20px", margin: 0,position:"fixed",zIndex:9999 ,backgroundColor:"black",width:"max-content"}}>
                      <li>Our Community</li>
                      <li>Our Team</li>
                      <li>Our Clients</li>
                    </ul>
                  </div>}
               </a>
             </div>
             <div style={{position:"relative"}}>
                <a style={{width:"120px",fontSize:"24px",padding:"20px",whiteSpace:"nowrap",position:"relative"}} onMouseOver={()=>this.handleMouseOver('support')} onMouseOut={()=>this.handleMouseOut('support')}>
                 Support 
                  {dropdownVisible.support && 
                  <div style={{color: "white", backgroundColor: "black", position: "absolute", left: 0 }}>
                    <ul style={{ fontFamily:"'Camphor Pro', sans-serif",fontSize:"20px", listStyleType: "none", padding: "20px", margin: 0,position:"fixed",zIndex:9999 ,backgroundColor:"black",width:"120px"}}>
                      <li>Email Us</li>
                      <li>Chat Now</li>
                    </ul>
                  </div>}
               </a>
             </div>
             {/* <nav>
              <ul>
                <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} style={{width:"120px",fontSize:"24px",padding:"20px",whiteSpace:"nowrap",listStyleType: "none"}}>Smart TV
                {dropdownVisible && 
                  <div style={{width:"90%",height:"300px",color:"white",backgroundColor:"black",zIndex:1}}>
                    <ul>
                      <li>MI TV</li>
                      <li>MI TV</li>
                      <li>MI TV</li>
                      <li>MI TV</li>
                    </ul>
                  </div>
                }
                </li>
              </ul> */}
             {/* </nav> */}
             {/* <a style={{width:"120px",fontSize:"24px",padding:"20px",whiteSpace:"nowrap"}}>Smart TV</a>
             <a style={{width:"120px",fontSize:"24px",padding:"20px"}}>Phone</a>
             <a style={{width:"120px",fontSize:"24px",padding:"20px"}}>Tablet</a>
             <a style={{width:"120px",fontSize:"24px",padding:"20px"}}>Community</a>
             <a style={{width:"120px",fontSize:"24px",padding:"20px"}}>Support</a> */}


             <div style={{display:'flex',marginLeft:'20%',padding:"17px"}}>
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

