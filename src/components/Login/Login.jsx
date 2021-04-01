import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./netflix_movies_cover.jpg"
import './Login.css';
class Login extends Component {
    state = {  }
    render() { 
        return (
                <div className="background">
                        <img id="netflixlogo" src="./logo.png" alt="netflix logo" className="img-fluid"/>
                        <form action="" method="POST"  onsubmit="return validation()">
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
                                <font color="white">Remember me</font><input type="checkbox" name="checkbox" id="checkbox"/>
                            </div>
                            <a id="helplink" href="">?Need help</a>  
                            <div className="face">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                            <a href="www.facebook.com">Login with Facebook</a>
                                <i className="bi bi-facebook"></i>
                            </div> 
                            <div className="log">
                                New to Netflix? <a href="">Sign in now</a>
                            </div>
                            <div className="more">
                                This page is protected by Google reCAPTCHA to <br/> ensure you're not a bot.
                                <a href="">Learn more</a>
                            </div>
                        </form>
                    </div>
         );
    }
}
 
export default Login;
