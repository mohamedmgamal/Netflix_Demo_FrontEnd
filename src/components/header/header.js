import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/free-solid-svg-icons';
import Logo from './Netflix_Logo_Digital_Video-800x450.png';
import './header.css';


class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-lg navbar-light">
                    <div className="Netflix col-xs-6">
                        <a  className={"Header"} href="#"><img src={Logo} /></a>
                        
                    </div>
                    <div className="Netflix2 col-xs-6">
                    <a className={"Header"} class="navbar-brand" href="#">SignIn</a>
                    </div>
                </nav>
            </React.Fragment>
        ) 
    }
}
export default Header;
