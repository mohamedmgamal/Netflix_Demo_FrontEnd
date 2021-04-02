import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [show, handleShow] = useState(false);

	return (
		<nav className={`nav ${show && 'navblack'}`}>
			<ul className='navlist'>
				<li>
					<img className='navlogo'
						src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
						alt='Netflix-Logo'
					/>
				</li>
				<li className="home">
                    <a aria-current="page" to="/home">Home</a>
                </li>
                <li className="show">
                    <a to="/show">TV Shows</a>
                </li>   
                <li className="movies">
                    <a to="/movies">Movies</a>
                </li> 
				<li className="new">
                    <a to="/new">New & Popular</a>
                </li>
				<li className="list">
                    <a to="/list">My List</a>
                </li>
				<li className="search">
					<input type="text" placeholder="Search.." name="search" />
					<i class="fa fa-search"></i>
				</li>
				<li className="kids">
					<span>KIDS</span>
				</li>
				<li>
					<i class="fa fa-gift"></i>
				</li>
				<li>
					<i class="fa fa-bell fa-lg"></i>
				</li>
				<li>
					<img className='navuser'
						src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
						alt='Netlix-User'
					/>
					<i class="fa fa-caret-down"></i>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
