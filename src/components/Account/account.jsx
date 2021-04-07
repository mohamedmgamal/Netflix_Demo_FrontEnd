import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './account.css';
import {Link} from "react-router-dom";

class Account extends Component {
    state = {  }
    render() { 
        return (   
           <React.Fragment>
               <nav className="navbar navbar_x navbar-expand-lg">
                    <div className="container-fluid">
                        <img className="navbar-brand Netflix-Logo"
						src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
						alt='Netflix-Logo'
					    />
                        <div id="user2">
                            <img 
                                src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                                alt='Netlix-User'
                            />
                            <i className="fa fa-caret-down"></i>
                        </div>
                    </div>
                </nav>
                <section className="container" id="first">
                    <div className="row zero">
                        <h1>Account</h1>
                        <link href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css" rel="stylesheet"></link>
                        <i class="fas fa-play playy"></i>&nbsp;&nbsp;
                        <span>MEMBER SINCE APRIL 2021</span>
                    </div>
                    <hr id="outside"/>
                    <div className="row one">
                        <div className="col-sm-4 col-xs-12">
                            <h5>MEMBERSHIP & BILLING</h5>
                            <button type="button" className="btn cancel">Cancel membership</button>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <span className="email">Email:</span>
                            <span>Password:</span>
                            <span>Phone:</span>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <Link to="#">Change Email</Link><br/>
                            <Link to="#">Change Password</Link><br/>
                            <Link to="#">Change Phone Number</Link>
                        </div>
                        <hr id="inside"/>
                    </div>
                     <div className="row two">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-4">
                            <p><i class="fab fa-cc-mastercard fa-lg"></i> •••• •••• •••• ••••</p>
                            <span>Your next billing date is </span>
                        </div>
                        <div className="col-sm-4">
                            <Link to="#">Manage payment info</Link><br/>
                            <Link to="#">Add backup payment method</Link><br/>
                            <Link to="#">Billing details</Link><br/>
                            <Link to="#">Change billing day</Link>
                        </div>
                        <hr id="inside"/>
                    </div>
                    <div className="row three">
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-2">
                        </div>
                        <div className="col-sm-8 giftt">
                            <Link to="#">Redeem gift card or promo code</Link><br/>
                            <Link to="#">Where to buy gift cards</Link>
                        </div>
                    </div>
                    <hr style={{backgroundColor:'rgba(109, 107, 107, 0.295)'}}/>
                    <div className="row four">
                        <div className="col-lg-4">
                            <h5>PLAN DETAILS</h5>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <p>Premium </p>
                                <span id="ultra">ULTRA HD</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <Link to="#">Change plan</Link>
                        </div>
                    </div>
                    <hr id="outside"/>
                    <div className="row five">
                        <div className="col-lg-2">
                            <h5>SETTINGS</h5>
                        </div>
                        <div className="col-lg-10 ">
                            <div className="links">
                            <Link to="#">Test participation</Link><br/>
                            <Link to="#">Manage download devices</Link><br/>
                            <Link to="#">Activate a device</Link><br/>
                            <Link to="#">Recent device streaming activity</Link><br/>
                            <Link to="#">Sign out of all devices</Link><br/>
                            <Link to="#">Download your personal information</Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-4">
                        </div> */}
                    </div>
                    <hr id="outside"/>
                    <div className="row username">
                        <div className="col-lg-4">
                            <h5>PROFILE & PARENTAL<br/> CONTROLS</h5>
                        </div>
                        <div className="col-lg-8 ">  
                            <img className="user3"
                                src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                                alt='Netlix-User'
                            />                          
                            <span className="uname">Username</span>
                            <span>All Maturity Ratings</span>
                            <i className="fa fa-angle-down fa-2x"></i>
                        </div>
                    </div>
                </section>
                <hr style={{marginTop:'5%'}}/>
           </React.Fragment>
         );
    }
}
 
export default Account;