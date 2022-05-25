import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>welcome to the Header</h2>
            <nav className='nav-area'>
                
                <NavLink to="./">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/friends">Friends</NavLink>
                
                
            </nav>
            {/* <Link></Link> */}
        </div>
    );
};

export default Header;