import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'aos/dist/aos.js';
import './HowWeWorkComponent.css'
const HowWeWorkComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="our-blog p-0 m-0 bg-silver">
      <div className="container work-process pb-5 pt-5">
        <div className="title mb-5 text-center">
          <h3>
            Our <span className="site-color">Few Process</span>
          </h3>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
              <div className="row">
                <div className="col-md-5">
                  <div className="process-step">
                    <p className="m-0 p-0">Step</p>
                    <h2 className="m-0 p-0">01</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5>What is Lorem Ipsum?</h5>
                  <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p>
                </div>
              </div>
              <div className="process-line-l"></div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div className="process-point-right"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <div className="process-point-left"></div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div className="process-box process-right" data-aos="fade-left" data-aos-duration="1000">
              <div className="row">
                <div className="col-md-5">
                  <div className="process-step">
                    <p className="m-0 p-0">Step</p>
                    <h2 className="m-0 p-0">02</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5>What is Lorem Ipsum?</h5>
                  <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p>
                </div>
              </div>
              <div className="process-line-r"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <div className="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
              <div className="row">
                <div className="col-md-5">
                  <div className="process-step">
                    <p className="m-0 p-0">Step</p>
                    <h2 className="m-0 p-0">03</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5>What is Lorem Ipsum?</h5>
                  <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p>
                </div>
              </div>
              <div className="process-line-l"></div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div className="process-point-right"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <div className="process-point-left"></div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div className="process-box process-right" data-aos="fade-left" data-aos-duration="1000">
              <div className="row">
                <div className="col-md-5">
                  <div className="process-step">
                    <p className="m-0 p-0">Step</p>
                    <h2 className="m-0 p-0">04</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5>What is Lorem Ipsum?</h5>
                  <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p>
                </div>
              </div>
              <div className="process-line-r"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <div className="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
              <div className="row">
                <div className="col-md-5">
                  <div className="process-step">
                    <p className="m-0 p-0">Step</p>
                    <h2 className="m-0 p-0">05</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <h5>What is Lorem Ipsum?</h5>
                  <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p>
                </div>
              </div>
              <div className="process-line-l"></div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div className="process-point-right process-last"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkComponent;
