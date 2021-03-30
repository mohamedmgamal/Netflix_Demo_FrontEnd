import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import {Router} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css'
import header from './Capture.JPG'
import Step1Of3 from '../step1of3/step1of3'

const Content =()=>{
    const [isAuth,Clicked]=useState(true);
    if(!isAuth){
        return(
        <Router> 
            <Redirect to={Step1Of3}/>
        </Router>
        )
    }
        return(
            <div className="step1">
                <img className='image col-xs-6' src={header} width='200 px' height="70 px"></img> 
                <p>STEP 1 OF 3</p>
                <h5>Finish setting up your account</h5>
                <p> Netflix is presonalize for you. create<br/>
                    a password ro watch Netflix on any <br/>
                    device at any time </p>
                <button className="btn btn-danger" onClick={()=>Clicked(false)} >CONTINUE</button>    
                
            </div>
        ) 
    }

export default Content;
