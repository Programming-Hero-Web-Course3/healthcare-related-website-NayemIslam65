import React from 'react';
import { useHistory } from 'react-router';
import AboutImg from '../../assets/img/about.jpg'

const ServiceDetails = () => {
    const history = useHistory()
    const handleBackHome = () => {
        history.push('/')
    }
    return (
        <div className="container-fluid">
             <div class="row">
                 <div class="col-md-6">
                     <div class="about_content">
                         <h1>Service Name</h1>
                            <p>Srvice Short Description</p>
                     </div>
                 </div>
                 <div class="col-md-6">
                     <div class="about_img">
                         <img src={AboutImg} class="img-fluid" alt="helping_hand" />

                     </div>
                 </div>
             </div>
             <div class="row">
                 <div class="col-md-6">
                <button onClick={handleBackHome} className="btn">
                    Back to Home
                </button>
                 </div>
             </div>
            </div>
    );
};

export default ServiceDetails;