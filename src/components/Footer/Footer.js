import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid footer mt-5 py-3">
            <div className="row">
                <div className="col-md-4 text-center">
                    Privacy &amp; Policy
                </div>
                <div className="col-md-4 text-center">
                    &copy; SEBA HOSPITAL
                </div>
                <div className="col-md-4 text-center">
                    &copy; Terms &amp; Conditions
                </div>
            </div>
        </div>
    );
};

export default Footer;