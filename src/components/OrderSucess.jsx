import { Typography } from '@mui/material';
import React ,{Component} from 'react';
import { withRouter } from "react-router-dom";

class OrderSucess extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div style={{width:"100%",height:"100%",backgroundColor:"lavenderblush",backgroundImage:`url(/shopping-sales.jpg)`,overflow:"hidden"}}>
                   <div style={{display:"flex",justifyContent:"center", alignItems:"center",width:"500px",height:"600px",margin:"auto"}}>
                     <div style={{display:"flex"}}>
                     <Typography style={{fontSize:"25px",color:"black",fontWeight:600}}>Your order has been placed  '</Typography>
                     <Typography style={{fontSize:"25px",color:"magenta",fontWeight:700}}>Sucessfully</Typography>
                     </div>
                   </div>
                </div>
            </div>
        )
    }
}
export default withRouter(OrderSucess);