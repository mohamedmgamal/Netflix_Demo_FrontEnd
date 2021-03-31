import React, { Component } from 'react';
import './payment.css';
import { Link } from 'react-router-dom';

class Payment extends Component {
    state = {  }
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
                        <input type="text" placeholder="Credit or Debit Card" className="form-control" disabled />
                        <Link to="/paymentform"> <i className="fa fa-cc-visa fa-2x"></i></Link>
                        <Link to="/paymentform"> <i className="fa fa-cc-mastercard fa-2x"></i></Link>
                        <Link  to="/paymentform" className="fa fa-chevron-right fa-lg"></Link>
                        <input type="text" placeholder="Pay Cash" className="form-control" disabled /> 
                        <Link  to="/paymentform" className="fa fa-cc-amazon-pay fa-2x"></Link>
                        <a  id="bottomright" className="fa fa-chevron-right fa-lg "></a>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Payment;
