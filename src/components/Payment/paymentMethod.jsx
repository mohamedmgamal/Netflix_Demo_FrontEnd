import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaymentForm from './paymentForm';
import Payment from './payment';
import Devices from './devices';
import NavBar from './navbar';

class PaymentMethod extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route path="/payment" > <Payment /> </Route>
                        <Route path="/paymentform"> <PaymentForm /> </Route>   
                        <Route path="/devices"> <Devices /> </Route> 
                        <Route path="/navbar"> <NavBar /> </Route>    
                    </Switch>
                </Router> 
            </React.Fragment>
        );
    }
}
 
export default PaymentMethod;