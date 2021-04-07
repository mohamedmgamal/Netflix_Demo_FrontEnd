import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Phone from "./components/phone_varification/phone";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    Redirect,
} from "react-router-dom";
import Choose from "./components/choose category/choose";
import Payment from "./components/Payment/payment";
import PaymentForm from "./components/Payment/paymentForm";
import Devices from "./components/Payment/devices";
import NavBar from "./components/Navbar/navbar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Step1Of3 from "./components/step1of3/step1of3";
import Step2Of3 from "./components/step2of3/step2of3";
import Plans from "./components/plans/plans";
import Login from "./components/Login/Login";
import Landing from './components/Landing/Landing';
import Home from "./components/Home/home";
import Account from './components/Account/account';

function App() {
  if (localStorage.token)
    return <Home/>
  else
    return <NoAuth/>


}
export default App
export function NoAuth(){
      return (
      <Router>
         <Redirect from={"/"} to={"/landing"}/>
        <Switch>
          <Route path={"/login"} component={Login}/>
         <Route path={"/landing"} component={Landing}/>
          <Route path={"/signUp"} component={signUpPath}/>
        </Switch>
      </Router>
  );
}
export function signUpPath(props){
  return(
     <div>
       <Header/>
  <Router>
    <Redirect from={"/signUp"} to={"/step1"}/>
  <Switch>
    <Route path={"/step1"}   exact component={Step1Of3}/>
    <Route path={"/step2"} exact component={Step2Of3}/>
    <Route path={"/Plans"}exact component={Plans}/>
    <Route path={"/Payment-method"}exact component={Payment}/>
    <Route path={"/paymentform"} exact component={PaymentForm}/>
    <Route path={"/PhoneVerification"}  exact component={Phone}/>
    <Route path={"/Categories"} exact component={Choose}/>
    <Route path={"/Home"} exact>
      <Redirect to={"/login"}/>
    </Route>
  </Switch>
  </Router>
  <Footer/></div>
  )
}
