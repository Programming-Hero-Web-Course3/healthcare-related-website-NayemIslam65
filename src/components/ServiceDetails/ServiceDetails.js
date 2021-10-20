import React, {useContext, useEffect, useState} from 'react';
import {Link, Redirect, useParams} from "react-router-dom";
import {AuthContext} from "../../context/AuthState";

const ServiceDetails = () => {
    const {currentUser} = useContext(AuthContext)
    const [service, setService] = useState({
        name: '',
        shor_description: '',
        imgUrl: ''
    })
    const {id} = useParams()

    useEffect(() => {
        fetch('/service_details.json')
            .then(res => res.json())
            .then(data => {
                const item = data.find(item => item.id === parseInt(id))
                if (item)
                    setService(item)
            })
    })

    if (!currentUser.isAuthenticated)
        return <Redirect to={`/login/?next=/service_details/${id}/`}/>
    else
        return (
            <div className="container-fluid">
                 <div class="row">
                     <div class="col-md-6 d-flex justify-content-center align-items-center">
                         <div class="about_content">
                             <h1>{service.name}</h1>
                                <p className="mt-2">{service.short_description}</p>
                                <Link to='/' className="btn back_btn mt-4" style={{backgroundColor: '#FC4236', border: 'none', color: 'white'}}>
                                Back to Home
                                </Link>
                         </div>
                     </div>
                     <div class="col-md-6">
                         <div class="about_img">
                             <img src={service.imgUrl} class="img-fluid" alt="helping_hand" />

                         </div>
                     </div>
                 </div>
                 <div class="row">
                     <div class="col-md-6">

                     </div>
                 </div>
                </div>
        );
};

export default ServiceDetails;