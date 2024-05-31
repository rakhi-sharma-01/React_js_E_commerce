import { TextField, Typography } from "@mui/material";
import React,{Component} from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, withRouter } from "react-router-dom";

class Footer extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div style={{width:"100%",height:"400px",display:"flex",flexDirection:"column",backgroundColor:"black"}}>
                    <div style={{width:"80%",Height:"200px",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",justifyItems:"center",padding:"40px 5px",borderBottom:"1px solid darkgrey",margin:"5px 10%"}}>
                        <div style={{height:"90px",width:"90px"}}><img style={{height:"100%",width:"100%"}} src="RAKHI SHARMA.png"/></div>
                        <div style={{display:"flex",flexDirection:"column"}}>
                             <Typography style={{color:"white",fontFamily:"Libre Caslon Text",fontWeight:700,fontStyle:"normal",lineHeight:"1.2em",fontSize:"25px",letterSpacing:"0px"}}>Relentless innovation defines who we are.</Typography>
                             <Typography style={{color:"white",fontFamily:"Libre Caslon Text",fontWeight:700,fontStyle:"normal",lineHeight:"1.2em",fontSize:"25px",letterSpacing:"0px"}}>One community, limitless passion</Typography>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",color:"white"}}>
                            <Typography style={{fontFamily:"Font-1712198785575",fontSize:"18px",lineHeight:"1.2em",textAlign:"left",letterSpacing:"0px"}}>Subscribe to our Newsletter</Typography>
                            <TextField style={{color:"white",backgroundColor:"white",marginTop:"15px"}} label="Email" variant="filled"></TextField>
                        </div>
                    </div>
                    <div style={{width:"80%",Height:"200px",display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"20px 5px",margin:"15px 10%"}}>
                        <div style={{color:"white"}}>
                        <Typography style={{color:"#ae9eec",fontFamily:"Libre Caslon Text",fontWeight:700,fontStyle:"normal",lineHeight:"1.2em",fontSize:"20px",letterSpacing:"0px"}}>Helpful Links</Typography>
                            <ul>
                                {/* <li>Our Story</li>
                                <li>Blog</li>
                                <li>Blog</li>
                                <li>All Products</li> */}
                                <Link to="/termsOfService" style={{textDecoration:"none",color:"white",}}  onMouseOver={(e) => e.target.style.color = "#2196f3"} onMouseOut={(e) => e.target.style.color = "white"}><li>Terms of Service</li></Link>
                            </ul>
                        </div>
                        <div style={{color:"white"}}>
                        <Typography style={{color:"#ae9eec",fontFamily:"Libre Caslon Text",fontWeight:700,fontStyle:"normal",lineHeight:"1.2em",fontSize:"20px",letterSpacing:"0px"}}>Policies</Typography>
                        <ul>
                            <Link to="/refundPolicy" style={{textDecoration:"none",color:"white"}}  onMouseOver={(e) => e.target.style.color = "#2196f3"} onMouseOut={(e) => e.target.style.color = "white"}><li>Refund Policy</li></Link>
                            <Link to="/shippingPolicy" style={{textDecoration:"none",color:"white"}}  onMouseOver={(e) => e.target.style.color = "#2196f3"} onMouseOut={(e) => e.target.style.color = "white"}><li>Shipping Policy</li></Link>
                            <Link to="/privacyPolicy" style={{textDecoration:"none",color:"white"}}  onMouseOver={(e) => e.target.style.color = "#2196f3"} onMouseOut={(e) => e.target.style.color = "white"}><li>Privacy Policy</li></Link>
                        </ul>
                        </div>
                        <div style={{color:"white"}}>
                        <Typography style={{color:"#ae9eec",fontFamily:"Libre Caslon Text",fontWeight:700,fontStyle:"normal",lineHeight:"1.2em",fontSize:"20px",letterSpacing:"0px"}}>Contact Us </Typography>
                        <ul>
                           <Link to="/help" style={{textDecoration:"none",color:"white"}}  onMouseOver={(e) => e.target.style.color = "#2196f3"} onMouseOut={(e) => e.target.style.color = "white"}><li>Help</li></Link>
                            {/* <li>Career</li> */}
                        </ul>
                        </div>
                        <div style={{color:"white"}}>
                         <Typography style={{color:"#ae9eec",fontFamily:"Libre Caslon Text",fontWeight:700,fontStyle:"normal",lineHeight:"1.2em",fontSize:"20px",letterSpacing:"0px"}}>Follow Us</Typography>
                         <FacebookRoundedIcon fontSize="large" style={{fontSize:"40px",color:"white",margin:"5px"}}/>
                         <InstagramIcon fontSize="large" style={{fontSize:"40px",color:"white",margin:"5px"}}/>
                         <YouTubeIcon fontSize="large" style={{fontSize:"40px",color:"white",margin:"5px"}}/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer);