import React, { Component } from 'react';
import './navbar.css';
// import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar_x fixed navbar-expand-lg">
                    <div className="container-fluid">
                        <img className="navbar-brand"
						src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
						alt='Netflix-Logo'
					    />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a id="home" className="nav-link" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/show">TV Shows</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/movie">Movies</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/new">New & Popular</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/list">My List</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search.." aria-label="Search" />
                            <i class="fa fa-search fa-lg"></i>
                        </div>
                        </div>
                        <div className="navuser">
                            <span>KIDS</span>
                            <i class="fa fa-gift fa-lg"></i>
                            <i class="fa fa-bell fa-lg"></i>
                        </div>
                            <img className="user"
                                 src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                                 alt='Netlix-User'
                            />
                            <i className="fa fa-caret-down"></i>
                    </div>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default Navbar;
