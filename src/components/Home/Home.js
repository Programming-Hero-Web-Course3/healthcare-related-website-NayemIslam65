import React, { useEffect, useState } from 'react';
import './Home.css'
import Services from './Services/Services';
import firstPhoto from '../../assets/img/1.jpg'
import SecondPhoto from '../../assets/img/2.jpg'
import thirdPhoto from '../../assets/img/3.jpg'
import fourthPhoto from '../../assets/img/4.jpg'
import fivethPhoto from '../../assets/img/5.jpg'
import SixthPhoto from '../../assets/img/6.jpg'

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./service_details.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
            <div>
            <div class="container-fluid home_banner mx-0 px-0">
                <div class="wrapper">
                    <div class="home_banner_content">
                        <h1 id="home_banner" class="home_banner_title mb-3">SEBA HOSPITAL</h1>
                        <div class="lead-text home_banner_text mb-2">
                            <p>See All of Our Emergency Doctor</p>
                        </div>
                        <a class="home_banner_btn btn" href="booking.php" target="_top">Contact Now</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-0 my-5">
                {
                services.map(service => <Services  service={service} key={service.id}> </Services>)
                }
                </div>
            </div>
            <div className="container">
                <h1 className="fs-1 fw-bold my-4 text-center">Photo Gallery</h1>
                <div className="row">
                    <div className="col-md-4 my-3">
                        <img src={firstPhoto} alt="" className="w-100" />
                    </div>
                    <div className="col-md-4 my-3">
                        <img src={SecondPhoto} alt="" className="w-100" />
                    </div>
                    <div className="col-md-4 my-3">
                        <img src={thirdPhoto} alt="" className="w-100" />
                    </div>
                    <div className="col-md-4 my-3">
                        <img src={fourthPhoto} alt="" className="w-100" />
                    </div>
                    <div className="col-md-4 my-3">
                        <img src={fivethPhoto} alt="" className="w-100" />
                    </div>
                    <div className="col-md-4 my-3">
                        <img src={SixthPhoto} alt="" className="w-100" />
                    </div>
                </div>
            </div>

            <div className="container">
            <div className="row">
              <div className="col-md-5 mx-auto">
                  <form action="" className="login_form">
                    <h1 className="text-center mb-3">Contact Us </h1>
                    <div className="row mb-3 justify-content-center">
                      <div className="col-sm-10">
                        <input type="email" placeholder="Email" className="form-control" id="inputEmail3"/>
                      </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                      <div className="col-sm-10">
                        <input type="name" placeholder="Name" className="form-control" id="name"/>
                      </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                      <div className="col-sm-10">
                        <textarea placeholder="Message" rows="4" className="form-control" id="name"></textarea>
                      </div>
                    </div>

            <div className="login_btn_div">
            <button type="submit" className="btn btn-primary login_btn">Message</button>
            
            </div>
            <div className="login_btn_div">

            </div>
          </form>
              </div>
            </div>

        </div>
            </div>

            
       
    );
};

export default Home;