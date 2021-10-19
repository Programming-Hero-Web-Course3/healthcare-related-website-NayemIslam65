import React from 'react';
import { useHistory } from 'react-router';

const Services = (props) => {
    const {name, short_description, imgUrl} = props.service
    const history = useHistory()
    const handleServiceDetails = () => {
        history.push('/service_details')
    }
    return (
            <div className="col">
                <div className="card">
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text my-2">{short_description}</p>
                        <button onClick={handleServiceDetails} className="btn">
                            See Details
                        </button>
                    </div>
                    </div>
                </div>
    );
};

export default Services;