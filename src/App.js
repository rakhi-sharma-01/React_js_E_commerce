import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp.jsx'
import LogIn from './components/LogIn.jsx';
import Home from './components/Home.jsx';
import CartDetails from './components/CartDetails.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';

function App(){
  return(
    <>
     <BrowserRouter>
      <Switch>
        <Route exact path= "/signUp"><SignUp/></Route>
        <Route exact path="/cartDetails"> <CartDetails/> </Route>
        <Route exact path= "/login"> <LogIn/></Route>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/profile"> <ProfileDetails/> </Route>

      </Switch>
     </BrowserRouter>
    </>
  )
}
export default App;
