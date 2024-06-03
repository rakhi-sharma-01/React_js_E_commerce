import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from './components/SignUp.jsx'
import LogIn from './components/LogIn.jsx';
import Home from './components/Home.jsx';
import CartDetails from './components/CartDetails.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';
import Payments from './components/Payments.jsx';
import RefundPolicy from './components/footer/RefundPolicy.jsx';
import ShippingPolicy from './components/footer/ShippingPolicy.jsx';
import PrivacyPolicy from './components/footer/PrivacyPolicy.jsx';
import TermsOfService from './components/footer/TermsOfService.jsx';
import Help from './components/footer/Help.jsx';
import ProductPage from './components/product/ProductPage.jsx';
import AddressForm from './components/address/AddressForm.jsx';

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
        <Route exact path="/payments"> <Payments/> </Route>
        <Route exact path="/refundPolicy"> <RefundPolicy/> </Route>
        <Route exact path="/shippingPolicy"> <ShippingPolicy/> </Route>
        <Route exact path="/privacyPolicy"> <PrivacyPolicy/> </Route>
        <Route exact path="/termsOfService"> <TermsOfService/> </Route>
        <Route exact path="/help"> <Help/> </Route>
        <Route exact path="/productPage"> <ProductPage/> </Route>
        <Route exact path="/address"> <AddressForm/> </Route>

      </Switch>
     </BrowserRouter>
    </>
  )
}
export default App;
