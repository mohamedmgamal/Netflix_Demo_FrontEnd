import React, { useState, useEffect } from 'react';
import '../components/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

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
                    <Link aria-current="page" to="/home">Home</Link>
                </li>
                <li className="show">
                    <Link to="/show">TV Shows</Link>
                </li>   
                <li className="movies">
                    <Link to="/movies">Movies</Link>
                </li> 
				<li className="new">
                    <Link to="/new">New & Popular</Link>
                </li>
				<li className="list">
                    <Link to="/list">My List</Link>
                </li>
				<li className="search">
					<input type="text" placeholder="Search.." name="search" />
					<i class="fa fa-search"></i>
				</li>
				<li className="kids">
					<span>KIDS</span>
				</li>
				<li>
					<i class="fas fa-gift"></i>
				</li>
				<li>
					<i class="fas fa-bell fa-lg"></i>
				</li>
				<li>
					<img className='navuser'
						src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
						alt='Netlix-User'
					/>
					<i class="fas fa-caret-down"></i>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;