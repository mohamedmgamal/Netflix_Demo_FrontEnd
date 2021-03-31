import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import {Icon} from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
class Footer extends React.Component{
    
    render(){
        return(
            <React.Fragment>
            <div className="footer col-md-12">
                
                <div className="footer-container">
                <div className="row line col-md-12 col-sm-8 col-xs-6">
                    <div><h6>Questions? Contact us.</h6></div>
                </div>
                <div className="row links col-md-9  ">
                        <div class="col-md-3 col-sm-6">FAQ</div>
                        <div class="col-md-3 col-sm-6">Help Center</div>
                        <div class="col-md-2 col-sm-6">Terms of Use</div>
                        <div class="col-md-1 col-sm-6">Privacy</div>
                    </div>
                    <div class="row links2 col-md-9 col-xs-12 ">
                        <div class="col-md-3 col-xs-6">Cookie Preferences</div>
                        <div class="col-md-6 col-xs-6">Corporate Information</div>
                    </div>
                    <div class="row links3 col-md-9 ">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            English
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">العربية</a></li>
                            
                        </ul>
                        </div>
                    </div>
                    </div>
                
            </div>
            </React.Fragment>
            )
    }
}
export default Footer;