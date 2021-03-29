import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import './phone.css';
require('firebase/auth');



class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            form: true,
            alert: false,
            verify:""
            
         }
    }
    onChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
         [name]: value,
    });
      };
    setupRecaptcha=()=>{
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'normal',
            'callback': function (response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
              this.onSignInSubmit();
            }
           
          });
    }
    onSignInSubmit=(event)=>{
        event.preventDefault();
        this.setupRecaptcha();
        const phoneNumber ="+2"+this.state.mobile;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // console.log(confirmationResult);
            console.log("OTP is sent");
          })
          .catch(function (error) {
            console.log(error);
          });
            }
            onSubmitOtp = (event) => {
                event.preventDefault();
                let otpInput = this.state.otp;
                let optConfirm = window.confirmationResult;
                // console.log(codee);
                optConfirm
                  .confirm(otpInput)
                  .then(function (result) {
                    // User signed in successfully.
                     console.log("Number is Verified");
                      // this.props.history.push( {pathname: '/',
                      //     data : "this is data from Phone Auth to Home component " })
                    let user = result.user;
                  })
                  .catch(function (error) {
                    console.log(error);
                    alert("Incorrect OTP");
                  });
              };
    render() { 
        return ( 
           
             <div className="container main">
                 <div className="row justify-content-center align-items-center ">
                     <div className="col-sm-6 text-left ">
                     
                          <h1 >Welcom to Netflix!</h1>
                            <p>You've started your membership and we emaild the details to you</p>
                            {/* <p>Remember you can cansel online anytime in the Accout section.</p> */}
                        <div className="sec">
                            <h6 className="text-center hed" >SETUP PASSWORD RECOVERY</h6>
                          <p>Your phone number will be used if you forget your password and for important account message</p>
                          <p></p>
                          <form  onSubmit={this.onSignInSubmit}>
                             
                              <div className="form-group">
                                  <label>Phone Number</label>
                                  <input type="number" className="form-control in" name="mobile" onChange={this.onChangeHandler}></input>
                              </div>
                              <div id="recaptcha-container">

                              </div>
                              {/* <input type="checkbox"/> Yes, I would like to receive text message  */}
                              
                              
                              <input type="submit" className="btn btn-danger btn-lg btn-block" value="Send code"/>
                                    
                                
                          </form>   
                          
                          <form  onSubmit={this.onSubmitOtp}>
                             
                              <div className="form-group">
                                  <label>Please Enter OTP</label>
                                  <input type="number" className="form-control in " name="otp" onChange={this.onChangeHandler}></input>
                              </div>
                              
                              <input type="submit" className="btn btn-danger btn-lg btn-block" value="Verifiy"/>
                                    
                                
                          </form>   
                          </div>
                     </div> 
                        
                 </div>    
             </div>
         
         );
    }
}
 
export default Phone;
