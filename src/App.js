import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Phone from "./components/phone_varification/phone";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    Redirect,
} from "react-router-dom";
import Choose from "./components/choose category/choose";
function App() {
  if (localStorage.token)
    return <h1>logged in</h1>//you are logged in go to main
  else
    return <NoAuth/>


}
export default App
export function NoAuth(){
      return (
      <Router>
        <ul>
          <li>  <Link to={"/PhoneVerification"}>PhoneVerification</Link></li>
        <li> <Link to={"/favorites"}>favorites</Link></li>
      </ul>
        <Switch>
          <Route path="/PhoneVerification" component={Phone}/>
          <Route path="/favorites" component={Choose}/>
        </Switch>
      </Router>
  );

}
