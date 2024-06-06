// RegistrationForm.jsx

import React from "react";
import styles from "./FormComponent.module.css";

const FormComponent = () => {
  return (
    <section className={`${styles.gradientCustom} vh-100`}>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className={`card ${styles.cardRegistration} shadow-2-strong`}
              style={{ borderRadius: "15px" }}
            >
              <div
                className="card-body p-4 p-md-5"
                style={{ marginBottom: "" }}
              >
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-light text-center">
                  Registration Form
                </h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className={`form-outline ${styles.formOutline}`}>
                        <label
                          className={`form-label ${styles.formLabel}`}
                          htmlFor="firstName"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Name"
                          id="firstName"
                          className={`form-control form-control-lg ${styles.formControl}`}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className={`form-outline ${styles.formOutline}`}>
                        <label
                          className={`form-label ${styles.formLabel}`}
                          htmlFor="phoneNumber"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Enter phone number"
                          id="phoneNumber"
                          className={`form-control form-control-lg ${styles.formControl}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div
                        className={`form-outline datepicker w-100 ${styles.timePicker}`}
                      >
                        <label
                          htmlFor="starttime"
                          className={`form-label ${styles.timePickerlabel}`}
                        >
                          Start Time
                        </label>
                        <input
                          type="time"
                          className={`form-control form-control-lg ${styles.formControl}`}
                          id="startdate"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className={`form-label ${styles.selectLabel}`}>
                        Choose option
                      </label>
                      <select
                        className={`select bg-light form-control-lg  ${styles.select}`}
                      >
                        <option value="1" disabled>
                          Choose Platform
                        </option>
                        <option value="2">Netflix</option>
                        <option value="3">Amazon Prime</option>
                        <option value="4">Hotstar</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-lg-4 mt-2 pt-md-2 d-flex align-items-center justify-content-center ">
                    <input
                      className={`btn btn-primary ${styles.submitBtn}`}
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
