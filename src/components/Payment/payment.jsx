import React, { Component } from 'react';
import './payment.css';
import { Link } from 'react-router-dom';

class Payment extends Component {

    next=()=>{
        this.props.history.push( {pathname: '/paymentform',
            user :this.props.location.user,
            plan:this.props.location.plan})
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="payment">
                    <span className="lock">
                        <i class="fa fa-lock"></i>
                    </span>
                    <span className="step">STEP 3 OF 3</span>
                    <h3>Set Up Your Payment.</h3>
                    <p className="lead">Your membership starts as soon as you set up payment.</p>
                    <p className="lead num2">No commitments. Cancel online anytime.</p>
                    <span className="secure">
                        Secure Server <i class="fa fa-lock"></i>
                    </span>
                    <div className="form1">
                        <div onClick={this.next}>
                        <input  placeholder="Credit or Debit Card" className="form-control" disabled  style={{ cursor: "pointer"}}/>
                     <i className="fa fa-cc-visa fa-2x"></i>
                        <i className="fa fa-cc-mastercard fa-2x"></i>
                        <a className="fa fa-chevron-right fa-lg"></a></div>
                        <input type="text" placeholder="Pay Cash" className="form-control" disabled /> 
                        <i class="fa fa-cc-paypal fa-2x"></i>
                        <Link   className="fa fa-chevron-right fa-lg"></Link>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Payment;
