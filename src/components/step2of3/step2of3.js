import React,{Component} from 'react'
import {FaCheck} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import './step2of3.css'
import logo from './Capture.JPG'



class Step2Of3 extends React.Component{
   render(){
        return(
            
                <React.Fragment>
                    <div className="row col-md-12">
                    <div className="space col-md-4"></div>
                    <div className='content-container col-md-4'>
                    {/* <FaCheckCircle className="omar"/>  */}
                    <div className="image"><img src={logo}></img></div>
                    <div className="Header-container">
                        <div className="header">
                            <span>
                                STEP <b>1</b> OF <b> 3</b>
                                <h4><b>Choose your plan.</b></h4>
                            </span>
                        </div>
                    </div>
                    <div className="contextBody contextRow">
                        <ul className="plan">
                        <li><FaCheck className="check-group-icon"/> <span className="check-group-text">No commitments, cancel anytime.</span></li>
                        <li><FaCheck className="check-group-icon"/> <span className="check-group-text">Everything on Netflix for one low price..</span></li>
                        <li><FaCheck className="check-group-icon"/> <span className="check-group-text">Unlimited viewing on all your devices.</span></li>
                        </ul>
                    </div>
                    <div className="submitbutton">
                    <input className="btn btn-danger" type="submit" value="See your plans"/>
                    </div>
                    </div>
                    <div className="space2 col-md-4"></div>
               
                    </div>
                
            
            </React.Fragment>

        ) 
    }
}
export default Step2Of3;

