import React from 'react';
import DiabeticsImg from '../../assets/img/28998.jpg'
import CovidImg from '../../assets/img/285.jpg'
import VaccineImg from '../../assets/img/vaccine.jpg'
import './Notice.css'

const Notice = () => {
    return (
        <div className="container-fluid mt-5">
            <h1 className="fw-bold fs-1 mb-5">Today's News</h1>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                <div class="card mb-3 custom_notice_card">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={DiabeticsImg}class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8 d-flex align-items-center">
                    <div class="card-body text-start">
                        <h5 class="card-title">World Diabetics Day Celebration Coming Soon</h5>
                        <p class="card-text">World Diabetics Day Celebration will be on 14 November 2020 with various programs </p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                <div class="card mb-3 custom_notice_card">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={VaccineImg}class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8 d-flex align-items-center">
                    <div class="card-body text-start">
                        <h5 class="card-title">Vaccine are giving all over the Country</h5>
                        <p class="card-text">Different vaccine are giving all over the Country like Moderna, pfizer </p>
                        <p class="card-text"><small class="text-muted">Last updated 2hours ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                <div class="card mb-3 custom_notice_card">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={CovidImg}class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8 d-flex align-items-center">
                    <div class="card-body text-start">
                        <h5 class="card-title">Covid News</h5>
                        <p class="card-text">Covid are spreading too much in recent days</p>
                        <p class="card-text"><small class="text-muted">Last updated 5 hours ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Notice;