import React, {Component, useState} from 'react';
import './paymentForm.css';
import {Link} from 'react-router-dom';
function PaymentForm(props){
    const [massage,setMassage]=useState("")
    const [firstName,setfirstName]=useState("")
    const [lastName,setlastName]=useState("")
    const [cardNumber,setCardNumber]=useState("")
    const [ccv,setCCV]=useState("")
    const [date,setDate]=useState("")
 function next() {
     var tDate = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();
        if (firstName==""||lastName==""||cardNumber==""||ccv==""||date=="")
        {
            setMassage("All fields required ")
            return
        }
        if (cardNumber.toString().length != 16)
        {
            setMassage("Invalid credit card number")
            return
        }
     if(tDate >= date) {
         setMassage("expired credit card ")
         return
     }
     if (ccv.length!=3)
     {
         setMassage("Invalid CCV")
         return
     }
         props.history.push({
             pathname: '/PhoneVerification',
             user: props.location.user,
             plan: props.location.plan
         })}
         function onchange(e){
        setMassage("")
        if (e.target.id=="fn")
            setfirstName(e.target.value)
        else if (e.target.id=="ln")
            setlastName(e.target.value)
        else if (e.target.id=="cn")
            setCardNumber(e.target.value)
        else if (e.target.id=="date")
            setDate(e.target.value)
        else if (e.target.id=="ccv")
            setCCV(e.target.value)
         }
     return (
                <div className="container" style={{marginRight:"auto"}}>
                    <div className="paymentform">
                        <span className="step">STEP 3 OF 3</span>
                        <h3>Set Up Your Credit Or Debit Card.</h3>
                        <div className="icon-container">
                            <i className="fa fa-cc-visa fa-2x"></i>
                            <i className="fa fa-cc-mastercard fa-2x"></i>
                        </div>
                        <div className="form2">
                            <input type="text" placeholder="First Name" className="form-control" id="fn" onChange={onchange}/>
                            <input type="text" placeholder="Last Name" className="form-control" id="ln" onChange={onchange} />
                            <input type="number" placeholder="Card Number" className="form-control" id="cn" onChange={onchange} />
                            <input type="date" placeholder="Expiration Date (MM/YY)" className="form-control" id="date" onChange={onchange} />
                            <input type="text" placeholder="Security Code (CVV)" maxLength="50" className="form-control"  id="ccv"onChange={onchange} />
                        </div>
                        <div className="premium" style={{backgroundColor:"#DF3B45",paddingTop:"2.5%",paddingLeft:"1%"}}>
                            <span style={{color:"white",fontWeight:"bold"}}>{props.location.plan.Name} Plan</span>
                        </div>
                        <p className="lead">By checking the checkbox below, you agree to our 
                        <Link to="#"> Terms of Use,</Link>
                        <Link to="#"> Privacy Statement, </Link>
                        and that you are over 18. Netflix will automatically continue your membership
                        and charge the monthly membership free <span style={{color:"red"}}>(currently EGP{props.location.plan.Cost})</span> to your payment method until you cancel.
                        </p>
                        <span style={{color:"red"}} className="center-container">{massage}</span>
                        <div className="premium mg" style={{backgroundColor:"#DF3B45",paddingTop:"2.5%",paddingLeft:"1%",textAlign:"center",cursor:"pointer"}} onClick={next}>
                            <span style={{color:"white",fontWeight:"bold"}}>Continue</span>
                        </div>
                    </div>
                </div>
         );

}
 
export default PaymentForm;
