import React, { Component } from "react";
import Header from "../Header";
import { Typography } from "@mui/material";
import { withRouter } from "react-router-dom";
import Footer from "../Footer";

class Community extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            width: "100%",
            backgroundColor: "lavenderblush",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection:"column"

          }}
        >
            <div style={{width:"90%",height:"250px",margin:"5%"}}>
                <Typography style={{fontWeight:600,fontSize:"40px",textAlign:"center"}}>Our culture</Typography>
                <Typography style={{fontSize:"20px",textAlign:"center"}}>"Just for fans" – that's our belief. Our hardcore Mi fans lead every step of the way. In fact, many Xiaomi employees were first Mi fans before joining the team. As a team, we share the same relentless pursuit of perfection, constantly refining and enhancing our products to create the best user experience possible. We are also fearless in testing new ideas and pushing our own boundaries. Our dedication and belief in innovation, together with the support of Mi fans, are the driving forces behind our unique Mi products.</Typography>
            </div>
            <div style={{display:"flex",flexDirection:"row",width:"90%",height:"400px",margin:"20px",justifyContent:"space-between"}}>
                <div style={{width:"45%"}}>
                    <Typography style={{fontWeight:600,fontSize:"40px",textAlign:"center"}}>Office environment</Typography>
                    <Typography style={{fontSize:"20px",textAlign:"center"}}>We are incredibly flat, open, and innovative. No never-ending meetings. No lengthy processes. We provide a friendly and collaborative environment where creativity is encouraged to flourish.</Typography>
                </div>
                <div style={{width:"45%"}}>
                    <img style={{width:"100%",height:"400px"}} src="https://i05.appmifile.com/753_operator_cn/03/11/2022/db4b41d344e5eb90e5adda3f61d278a3!620x400.png"/>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"row",width:"90%",height:"400px",margin:"20px",justifyContent:"space-between"}}>
                <div style={{width:"45%"}}>
                    <img style={{width:"100%",height:"400px"}} src="https://i05.appmifile.com/913_operator_cn/03/11/2022/0618c2fc4c6d6b438f2fc25341216e1f!620x400.png"/>
                </div>
                <div style={{width:"45%"}}>
                    <Typography style={{fontWeight:600,fontSize:"40px",textAlign:"center"}}>Events</Typography>
                    <Typography style={{fontSize:"20px",textAlign:"center"}}>Xiaomi’s got talent! Friendly competitions let the Mi team show off their athletic prowess in bask- etball, swimming, badminton and more. Our annual "Mi Idol" has also uncovered plenty of star potential.</Typography>
                </div>
            </div>

 
        </div>

        <Footer />
      </div>
    );
  }
}
export default withRouter(Community);