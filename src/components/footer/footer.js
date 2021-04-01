import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
class Footer extends React.Component{
    
    render(){
        return(
            <React.Fragment>
            <div className="footer col-md-12">
                
                <div className="footer-container">
                <div className="row line col-md-12 col-sm-8 col-xs-6">
                    <div><h6><a href="#" >Questions? Contact us.</a></h6></div>
                </div>
                <div className="row links col-md-9 col-sm-6">
                        <div class="col-md-3 col-6 "><a href="#">FAQ</a></div>
                        <div class="col-md-3 col-6"><a href="#">Help Center</a></div>
                        <div class="col-md-2 col-6 "><a href="#">Terms of Use</a></div>
                        <div class="col-md-1 col-6 "><a href="#">Privacy</a></div>
                    </div>
                    <div class="row links2 col-md-9 col-xs-6 ">
                        <div class="col-md-3 col-xs-3"><a href="#">Cookie Preferences</a></div>
                        <div class="col-md-6 col-xs-"><a href="#">Corporate Information</a></div>
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
