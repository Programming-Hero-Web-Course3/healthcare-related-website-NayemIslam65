import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
<div className="container-fluid custom_top px-0">
        <div className="row cover_img m-0">
            <div className="col-xs-3 col-sm-3 col-md-3">
                <div className="pro_icon">
                    <h1>SEBA<small style={{fontSize: 12, fontStyle: 'italic'}}>HOSPITAL</small></h1>
                </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3">
                    <p>You will get all Information of our hospital</p>
            </div>

            </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light custom_menu">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse custom_navbar" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item custom_nav active">
                        <NavLink className="nav-link " to="/">Home </NavLink>
                    </li>

                    <li className="nav-item custom_nav">
                        <NavLink className="nav-link " to="/notice/">Notice</NavLink>
                    </li>

                    <li className="nav-item custom_nav">
                        <NavLink className="nav-link " to="/aboutus/">About</NavLink>
                    </li>
                    <li className="nav-item custom_nav">
                        <NavLink className="nav-link " to="/login/">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
    );
};

export default Header;