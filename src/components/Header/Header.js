import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css'
import {AuthContext} from "../../context/AuthState";

const Header = () => {
    const {currentUser, logoutUser} = useContext(AuthContext)

    return (
        <div className="container-fluid custom_top px-0">
            <div className="row cover_img m-0">
                <div className="col-xs-12 d-flex justify-content-center align-items-center col-sm-3 col-md-3">
                    <div className="pro_icon text-center">
                        <h1>SEBA<small style={{fontSize: 12, fontStyle: 'italic'}}>HOSPITAL</small></h1>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 text-start">
                    <p className="text-center">{currentUser.isAuthenticated ? (`Thanks For Registration  ${currentUser.username}, You get all Information of our hospital`) : ('You get all Information of our hospital')}</p>
                </div>

            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light custom_menu">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                        {currentUser.isAuthenticated ? (
                            <li className="nav-item custom_nav">
                                <a className="nav-link " onClick={() => logoutUser()}>Logout</a>
                            </li>
                        ) : (
                            <li className="nav-item custom_nav">
                                <NavLink className="nav-link " to="/login/">Register</NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;