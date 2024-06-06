import { Typography } from '@mui/material';
import React ,{Component} from 'react';
import { withRouter } from "react-router-dom";

class OrderSucess extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div style={{width:"100%",height:"100vh",backgroundColor:"lavenderblush"}}>
                <div style={{width:"100%",height:"99%",backgroundColor:"lavenderblush",backgroundImage:`url(/shopping-sales.jpg)`,overflow:"hidden",backgroundSize:"cover",margin:"auto"}}>
                   <div style={{display:"flex",justifyContent:"center", alignItems:"center",width:"600px",height:"600px",margin:"auto"}}>
                     <div style={{display:"flex",backgroundColor:"blanchedalmond",padding:"30px",gap:"10px",position:"absolute",boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}>
                     <Typography style={{fontSize:"25px",color:"black",fontWeight:600,lineHeight:"60px"}}>Your order has been placed </Typography>
                     <Typography style={{fontSize:"25px",color:"magenta",fontWeight:700,lineHeight:"60px"}}>Sucessfully</Typography>
                     <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/correct-icon.svg" style={{height:"50px",width:"50px",margin:"auto"}}/>
                     </div>
                   </div>
                </div>
            </div>
        )
    }
}
export default withRouter(OrderSucess);