import React from 'react';
import {Link} from "react-router-dom";


const Services = (props) => {
    const {id, name, short_description, imgUrl} = props.service

    return (
            <div className="col">
                <div className="card">
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text mb-2">{short_description}</p>
                        <Link className="btn" to={`/service_details/${id}`}>
                            See Details
                        </Link>
                    </div>
                    </div>
                </div>
    );
};

export default Services;