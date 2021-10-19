import React from 'react';
import AboutImg from '../../assets/img/about.jpg'
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className="container-fluid p-5">
             <div class="row">
                 <div class="col-md-6">
                     <div class="about_content">
                         <h2 className="mb-3">ABOUT SEBA HOSPITAL</h2>
                            <p>We are the first hospital, who started take bookings through online. It is a full-service medical and dental practice consulting firm. We work with large and small healthcare organizations to increase business performance, mitigate compliance risk, reduce stress for physicians and staff, and improve the patient experience.This section includes the list of the doctors and their schedules3. It also includes doctors’ emergency numbers. The doctor can check his schedule and that of other doctors too. This helps a doctor to edit his schedule accordingly. It includes list of the available medicines for specific diseases so that the doctor can easily look for an alternative when in need. The patient can be given an appointment referring to the doctors’ schedule. The use of HMS makes the co-ordination between a doctor and patient easy and hassle free.</p>
                     </div>
                 </div>
                 <div class="col-md-6">
                     <div class="about_img">
                         <img src={AboutImg} class="img-fluid" alt="helping_hand" />

                     </div>
                 </div>
             </div>
             <div className="row mt-5">
                 <h1 className="fs-1 text-center fw-bold my-5">Frequently Asked Questions</h1>
                 <div className="col-md-8 mx-auto">
                 <div class="accordion" id="accordionExample">
                    <div class="accordion-item accordion_item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button accordion_btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How to make an appointment?
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body accordion_bdy">
                        To book appointments they need to need to sign up first or if they are already registered, then they can simply log in. The users would be allowed to book appointments only after they have done half of the payment through online banking.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordion_item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button accordion_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Do you have consultants available 24 hours?
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body accordion_bdy">
                        The visiting hours of all the consultants are given. Of course the time varies from consultant to consultant. Some of them are not available on Friday and on government holidays but the emergency doctors will be available 24 hours.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item accordion_item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button accordion_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Where can I make my enquiries?
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body accordion_bdy">
                        To make enquiries, please call our hotline number from any phone anywhere in the country. You can also send mail to our mail address.
                        </div>
                        </div>
                    </div>
                    </div>
                 </div>
             </div>
            </div>
    );
};

export default AboutUs;