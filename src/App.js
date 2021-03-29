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
          <Redirect to={'/PhoneVerification'}/>
        <Switch>
          <Route path="/PhoneVerification" component={Phone}/>
        </Switch>
      </Router>
  );

}
