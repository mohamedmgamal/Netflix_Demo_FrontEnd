import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./netflix_movies_cover.jpg"
import './Login.css';
import {Link} from "react-router-dom";
import "../../staticUrls"
import {urls} from "../../staticUrls";
class Login extends Component {
    state = {username:"",password:"",message:""}
    onChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };
login=()=>{
    console.log(this.state.password)
    console.log(this.state.username)
    if (this.state.password==""||this.state.username=="")
    {
        this.setState({message:"Empty Field"})
        return false
    }
    const data = { username: this.state.username,password: this.state.password };

    fetch(urls.HomeUrl+"/login/", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
         if (data.token){
             localStorage.token=data.token;
             fetch('https://netflix-clone-iti.herokuapp.com/getId/'+this.state.username)
                 .then(response => response.json())
                 .then(json =>{
                                localStorage.userId=json.id
                     window.open("https://netflix-iti.herokuapp.com/","_self")
                 })
                 .catch(Error=>
                 console.log(Error));

         }
         else {
            this.setState({message:"Wrong password or UserName"})
         }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
    render() { 
        return (
                <div className="background">
                        <img id="netflixlogo" src="./logo.png" alt="netflix logo" className="img-fluid"/>
                        <form  className="form_x">
                            <h1> Sign In </h1>
                            <div id="errmsg" style={{display:" none"}}>
                                
                                Sorry, we cannot find an account for this email address. Please retry <a href=""> or create new account</a>
                            </div>   
                            <input type="text" name="username" onChange={this.onChangeHandler} id="username" placeholder=" User Name " required/><br/>
                            <h6 id="emailh2"></h6>
                            <input type="password" name="password" id="password" onChange={this.onChangeHandler}placeholder=" Password" required/><br/>
                            <br/><span style={{color:"white"}}>{this.state.message}</span>
                            <h6 id="passh2" > </h6>
                            <button type="button" className="btn btn-danger" onClick={this.login} id="submit"  name="submit" >Sign in</button><br/>
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
