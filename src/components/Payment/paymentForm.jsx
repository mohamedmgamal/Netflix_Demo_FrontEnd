import React, {Component, useState} from 'react';
import './paymentForm.css';
import {Link} from 'react-router-dom';
import "../../staticUrls"
import {urls} from "../../staticUrls";
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
     if( date >=tDate ) {
         setMassage("expired credit card ")
         return
     }
     if (ccv.length!=3)
     {
         setMassage("Invalid CCV")
         return
     }
     // props.location.user.ccName=firstName+" "+lastName
     // props.location.user.ccNumber=cardNumber
     // props.location.user.date=date
     //     props.history.push({
     //         pathname: '/Categories',
     //         user: props.location.user,
     //         plan: props.location.plan
     //     })
     let myDate=new Date(date)
     let datee=myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate();
     console.log(datee)
     let phone=props.location.user.phoneNumber;
     const data = { username: props.location.user.username,
         password:props.location.user.password,
     email:props.location.user.email,
     first_name:firstName,
         PhoneNumber:"01212374338",
         last_name:lastName,
         cdNumber:cardNumber,
         cdDate:datee,
         cdName:firstName+" "+lastName
     };
     setMassage("Signing up")
     fetch(urls.HomeUrl+"/signUp/", {
         method: 'POST', // or 'PUT'
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
     })
         .then(response => response.json())
         .then(data => {
             if (data.success)
                 login()
             else if (data.errors)
             setMassage(data.errors)
         })
         .catch((error) => {
             console.log(error)
         });

    }
 function getid(){
        setMassage("Welcome to Netflix")
     fetch(urls.HomeUrl+"/getId/"+props.location.user.username)
         .then(response => response.json())
         .then(data =>{
             localStorage.userId=data.id
                doPayment(data.id)
         }).catch((error) => {
         setMassage(error)
     });

 }
 function doPayment(id){
     console.log(id)
        setMassage("Do Payment")
        let list=["Visa","Master Card"]
        let type = list[Math.floor(Math.random() * list.length)];
        let price=props.location.plan.Cost;
        var year =new Date().getFullYear()
         var month =new Date().getMonth()
         var day =new Date().getDate()
         var exDate=year+"-"+(month+2)+"-"+day

     const data = {
            method: "Credit card",
         type:type,
         amount:price,
         expired_date:exDate,
         user:id
     };

     fetch(urls.HomeUrl+"/addBill/", {
         method: 'POST', // or 'PUT'
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
     })
         .then(response => response.json())
         .then(data => {
                 props.history.push({
                     pathname: '/Categories',
                     user: props.location.user,
                 })
         })
         .catch((error) => {
            setMassage(error)
         });
 }
 function login(){
        console.log("login Func")
     const data = { username:props.location.user.username,
         password:props.location.user.password};
     fetch(urls.HomeUrl+"/login/", {
         method: 'POST', // or 'PUT'
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
     })
         .then(response => response.json())
         .then(data => {
            if (data.token)
            {
                localStorage.token=data.token
                getid()
            }
         })
         .catch((error) => {
             setMassage(error);
         });
 }
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
                <div className="container pf" >
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
