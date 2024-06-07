import React from 'react';
import workprocess from '../../assets/workprocess.jpg'
import './HowWeWorkComponent.css'
const HowWeWorkComponent = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8  ">
      <div className="container rounded-5 p-2" id='workprocess'>
        <div className="row gy-5 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid rounded-4"
              loading="lazy"
              src={workprocess}
              alt="Design Process"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3">How We Work
                </h2>
                <p className="lead fs-4 text-secondary mb-5">
                  Our design approach is very organized to ensure satisfaction for our esteemed clients.
                </p>
                <div className="d-flex mb-4">
                  <div>
                    <span className="btn button-bullets bsb-btn-circle pe-none me-4">1</span>
                  </div>
                  <div>
                    <h5 className="mb-3">Visit Our Website</h5>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div>
                    <span className="btn button-bullets bsb-btn-circle pe-none me-4">2</span>
                  </div>
                  <div>
                    <h5 className="mb-3">Select Time Slot</h5>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div>
                    <span className="btn button-bullets bsb-btn-circle pe-none me-4">3</span>
                  </div>
                  <div>
                    <h5 className="mb-3">Select OTT Platform</h5>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div>
                    <span className="btn button-bullets bsb-btn-circle pe-none me-4">4</span>
                  </div>
                  <div>
                    <h5 className="mb-3">Complete Payment</h5>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <span className="btn button-bullets bsb-btn-circle pe-none me-4">5</span>
                  </div>
                  <div>
                    <h5 className="mb-3">Receive Credentials</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkComponent;
