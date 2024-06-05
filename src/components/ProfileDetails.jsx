import { Typography } from '@mui/material';
import React, {Component} from 'react';

export default class ProfileDetails extends Component{
    constructor(){
        super();
        this.state ={
            userData:{}
        }
    }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem("user"));
        this.setState({ userData });
      }

    render(){
        return(
            <div style={{width:"100vw",height:"100vh",backgroundColor:"lavenderblush"}}>
                <div style={{width:"100%", height:"300px"}}>
                    <img  style={{width:"100%", height:"300px",overflow:"hidden",position:"absolute"}} src = "nature_background.jpg" />
                    <img src="profile_icon.png" style={{borderRadius:"50%",zIndex:1,height:"100px",width:"100px",position:"absolute",marginTop:"250px"}}/>
                    <Typography style={{zIndex: 4,position: "absolute",display: "flex",marginLeft: "120px",top: "300px",fontWeight: 700,fontSize: "30px",alignItems: "flex-end",color:"blue"}}>hello, {this.state.userData.name}</Typography>
                </div>
                <div>
                    <p style={{margin:"auto",marginTop:"50px", textAlign:"center",testAlign:"center",backgroundColor:"coral",color:"white",fontSize:"25px",fontWeight:700,width:"400px",justifyContent:"center",alignContent:"center",borderRadius:"5px",marginBottom:"20px"}}>Profile Details
                    </p>
                </div>
                <div style={{backgroundColor:"white",width:"70%",display:"flex",flexDirection:"row",margin:"auto",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                    <div style={{width:"50%",color:"black",gap:"10px",padding:"30px",display:"flex",flexDirection:"column",marginLeft:"20px"}}>

                      <Typography style={{fontWeight:600}}>Name:</Typography>
                      <Typography variant="h6" style={{borderBottom:"1px solid grey"}}>{this.state.userData.name}</Typography>

                      <Typography style={{fontWeight:600}}>Email:</Typography>
                      <Typography variant="subtitle1" style={{borderBottom:"1px solid grey"}} >
                             {this.state.userData.email}
                      </Typography>

                      <Typography style={{fontWeight:600}}>Mobile No:</Typography>
                      <Typography variant="subtitle1" style={{borderBottom:"1px solid grey"}}>
                               {this.state.userData.mobNo}
                      </Typography>
                      
                      <Typography style={{fontWeight:600}}>Gender:</Typography>
                      <Typography variant="subtitle1" style={{borderBottom:"1px solid grey"}}>
                               {this.state.userData.gender}
                      </Typography>
                    </div>
                    <div style={{width:"50%",color:"black",gap:"10px",padding:"30px",display:"flex",flexDirection:"column"}}>
                      <Typography style={{fontWeight:600}}>City:</Typography>
                      <Typography variant="subtitle1" style={{borderBottom:"1px solid grey"}}>{this.state.userData.city}</Typography>

                      <Typography style={{fontWeight:600}}>State:</Typography>
                      <Typography variant="subtitle1" style={{borderBottom:"1px solid grey"}} >
                             {this.state.userData.state}
                      </Typography>

                      <Typography style={{fontWeight:600}}>Country:</Typography>
                      <Typography variant="subtitle1" style={{borderBottom:"1px solid grey"}}>
                               {this.state.userData.country}
                      </Typography>
                      
                      <Typography style={{fontWeight:600}}>Address:</Typography>
                      <Typography variant="subtitle1" style={{borderBottom:"1px solid grey"}}>
                               {this.state.userData.address}
                      </Typography>
                    </div>  
                </div>
            </div>
        )
    }
}


