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
import Navbar from "./components/Navbar/navbar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Step1Of3 from "./components/step1of3/step1of3"
import Step2Of3 from "./components/step2of3/step2of3";
import Plans from "./components/plans/plans";
function App() {
  if (localStorage.token)
    return <h1>logged in</h1>
  else
    return <NoAuth/>


}
export default App
export function NoAuth(){
      return (
      <Router>
        <Switch>
          <Route path="/finish-SignUp" component={signUpPath}/>
        </Switch>
      </Router>
  );
}
export function signUpPath(props){
  return(
     <div>
       <Header/>

  <Router>
  <Switch>
    <Route path={"/"} component={Payment}/>
    <Route path={"/finish-SignUp"} component={Step1Of3}/>
    <Route path={"/step2"} component={Step2Of3}/>
    <Route path={"/Plans"} component={Plans}/>
    <Route path={"/Payment-method"}component={Payment}/>
    <Route path={"/paymentform"} component={PaymentForm}/>
  </Switch>
  </Router>
  <Footer/></div>
  )
}
