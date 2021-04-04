import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./netflix_movies_cover.jpg"
import './Login.css';
import {Link} from "react-router-dom";
class Login extends Component {
    state = {  }
    render() { 
        return (
                <div className="background">
                        <img id="netflixlogo" src="./logo.png" alt="netflix logo" className="img-fluid"/>
                        <form  className="form_x" action="" method="POST"  onsubmit="return validation()">
                            <h1> Sign In </h1>
                            <div id="errmsg" style={{display:" none"}}>
                                
                                Sorry, we cannot find an account for this email address. Please retry <a href=""> or create new account</a>
                            </div>   
                            <input type="text" name="email" id="email" placeholder=" Email or Phone number "/><br/>
                            <h6 id="emailh2"></h6>
                            <input type="password" name="password" id="password" placeholder=" Password"/><br/>
                            <h6 id="passh2" > </h6>
                            <input type="submit" id="submit" name="submit" value="Sign in"/><br/>
                            <div id="check">
                                <font color="white">Remember me</font>	&nbsp;	<input type="checkbox" name="checkbox" id="checkbox"/>
                            </div>
                            <a id="helplink" href="">?Need help</a>
                            <div className="log">
                                New to Netflix	&nbsp;	? <Link to={"/signUp"}>Sign in now</Link>
                            </div>
                            <div className="more"style={{marginLeft:"5%"}}>
                                This page is protected by Google reCAPTCHA to <br/> ensure you're not a bot.
                                <a href="">Learn more</a>
                            </div>
                        </form>
                    </div>
         );
    }
}
 
export default Login;
