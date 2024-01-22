import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.css';
import logo from '../../../logo.svg';

import Axios from 'axios';

const navbar = (props) => {
    const logOut = () => {
        Axios.get('http://localhost:5001/api/v1/auth/logout').then(res => {
            console.log(res);
            window.localStorage.removeItem("token");
        }).catch(err => { console.log(err); });
    }

    return (
        <nav className={classes.Navbar}>
            <div >
            <img rel="icon" style={{maxHeight: "50px"}} src={logo} alt="Logo"></img>
            </div>
            <div style={{float: "left"}}>
                <Link to="/home/project-list" style={{ marginLeft: "40px" }}>Projects</Link>
            </div>

            <div style={{float: "right"}}>
                {/* <Link to="/home/review/review-projects" style={{ marginLeft: "40px" }}>Review</Link> */}
                <Link to="/" onClick={logOut} style={{ marginLeft: "20px", marginRight: "30px" }}>Log Out</Link>
            </div>
        </nav>
    );
}

export default navbar;