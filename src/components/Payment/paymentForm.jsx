import React, { Component } from 'react';
import '../components/paymentForm.css';
import {Link} from 'react-router-dom';

class PaymentForm extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="paymentform">
                        <span className="step">STEP 3 OF 3</span>
                        <h3>Set Up Your Credit Or Debit Card.</h3>
                        <div className="icon-container">
                            <i className="fab fa-cc-visa fa-2x"></i> 
                            <i className="fab fa-cc-mastercard fa-2x"></i>
                        </div>
                        <div className="form2">
                            <input type="text" placeholder="First Name" className="form-control" />                                        
                            <input type="text" placeholder="Last Name" className="form-control" />
                            <input type="text" placeholder="Card Number" className="form-control" /> 
                            <input type="text" placeholder="Expiration Date (MM/YY)" className="form-control" /> 
                            <input type="text" placeholder="Security Code (CVV)" maxLength="50" className="form-control" id="cvv" /> 
                            <i class="far fa-question-circle fa-2x"></i> 
                        </div>
                        <div className="premium">
                            <span>Premium Plan</span>
                        </div>
                        <p className="lead">By checking the checkbox below, you agree to our 
                        <Link to="#"> Terms of Use,</Link>
                        <Link to="#"> Privacy Statement, </Link>
                        and that you are over 18. Netflix will automatically continue your membership
                        and charge the monthly membership free (currently EGP200) to your payment method until you cancel.
                        </p>
                    </div>       
                </div>
            </React.Fragment>
         );
    }
}
 
export default PaymentForm;