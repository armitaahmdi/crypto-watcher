import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li className={styles.listItem}><Link to='/Developer'>Developer</Link></li>
                <li className={styles.listItem}><Link to='/Spot-Market'>Spot Market</Link></li>
                <li className={styles.listItem}><Link to='/WatchList'>WatchList</Link></li>
                <li className={styles.listItem}><Link to='/About-Project'>About Project</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;