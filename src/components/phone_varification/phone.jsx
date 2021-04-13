import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import './phone.css';
require('firebase/auth');
class Phone extends Component{
    state = {
            form: true,
            alert: false,
            verify:"",
         phoneNumber:""
    }
    next=()=>{
        this.props.location.user.phoneNumber=this.state.phoneNumber
        this.props.history.push( {pathname: '/Payment-method',
            user :this.props.location.user,
            plan:this.props.location.plan})
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
              
              this.onSignInSubmit();
            }
           
          });
    }
    onSignInSubmit=(event)=>{
        event.preventDefault();
        this.setupRecaptcha();
        var phoneNumber ="+2"+this.state.phoneNumber;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
            
            window.confirmationResult = confirmationResult;
            
            console.log("OTP is sent");
          })
          .catch(function (error) {
            console.log(error);
          });
            }
            onSubmitOtp = (event) => {
                let success=true;
                event.preventDefault();
                let otpInput = this.state.otp;
                let optConfirm = window.confirmationResult;
                optConfirm
                  .confirm(otpInput)
                  .then(function (result) {
                      console.log("Number is Verified");
                  })
                  .catch(function (error) {
                    console.log(error);
                    alert("Incorrect OTP");
                    success=false
                  });
            if (success)
            { //this.state.user.phoneNumber=this.state.phoneNumber;
                this.next()}};
    render() {
        return (
           

             <div className=" col-12 col-sm-6 main center-container">
                 <div className="row">
                     <div className="text-left">
                     
                          <h1 style={{color:"#E50913",fontWeight:"bold",textAlign:"center"}} >Welcome to Netflix!</h1>
                            <p style={{color:"black"}}className="text-center">You've started your membership and we emaild the details to you</p>
                            
                        <div className="sec">
                            <h6 className="text-center hed" style={{fontWeight:"bold"}} >SETUP PASSWORD RECOVERY</h6>
                          <p style={{color:"black"}}>Your phone number will be used if you forget your password and for important account message</p>
                          <p></p>
                          <form  onSubmit={this.onSignInSubmit}>
                             
                              <div className="form-group">
                                  <label style={{color:"#E50913",fontWeight:"bold"}}>Phone Number</label>
                                  <input type="number" className="form-control in" name="phoneNumber" onChange={this.onChangeHandler}></input>
                              </div>
                              <div id="recaptcha-container">

                              </div>
                              
                              
                              
                              <input type="submit" className="btn btn-danger btn-lg btn-block btt" value="Send code"/>
                                    
                                
                          </form>   
                          
                          <form  onSubmit={this.next}>
                             
                              <div className="form-group">
                                  <label style={{color:"#E50913",fontWeight:"bold"}}>Please Enter OTP</label>
                                  <input type="number" className="form-control in " name="otp" onChange={this.onChangeHandler}></input>
                              </div>
                              
                              <input type="submit" className="btn btn-danger btn-lg btn-block btt" value="Verifiy"/>
                                    
                                
                          </form>   
                          </div>
                     </div> 
                        
                 </div>    
             </div>
         
         );
    }
}
 
export default Phone;
