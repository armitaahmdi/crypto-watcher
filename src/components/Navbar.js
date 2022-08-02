import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import '../styles/scss/navbar.scss';

const Navbar = () => {

    return (
        <div className='navbar'>
            <ul>
                <li className='listItem'><Link to='/Developer'> Developer</Link></li>
                <li className='listItem'><Link to='/Spot-Market'>Spot Market</Link></li>
                <li className='listItem'><Link to='/WatchList'>WatchList</Link></li>
                <li className='listItem'><Link to='/About-Project'>About Project</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;