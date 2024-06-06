// RegistrationForm.js
import React, { useEffect, useState } from "react";
import styles from "./FormComponent.module.css";
import axios from "axios";

const FormComponent = () => {
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [time, setTime] = useState("");
  const [platForm, setPlatForm] = useState("");
  const [activeuser, setActiveUser] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Name : ", fullName, number, platForm, time);
      const response = await axios.post("/api/users/register", {
        fullName,
        number,
        time,
        platForm,
      });
    } catch (error) {
      console.log("Error In a handleSubmit :", error);
    }
  };

  const timeChange = async (event) => {
    try {
      const time = event.target.value;
      setTime(time);
      console.log("Time : ", time);
      const response = await axios.get(`/api/users/timechange?time=${time}`);
      const users = response.data.activeuserlist;
      const user1 = users[0] ??{};
      console.log("user1 : ",user1);
      console.log("users : ", users);
      setActiveUser([user1]);

      console.log("response : ", response.data);
      console.log("response > activeuserlist  : ", response.data.activeuserlist);
      console.log("---------------------");

      console.log("activeuserlist :---  ", activeuser);
    } catch (error) {
      console.log("Error In a UseEffect :", Error);
    }
  };
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
                <form onSubmit={handleSubmit}>
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
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
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
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
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
                          value={time}
                          onChange={timeChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className={`form-label ${styles.selectLabel}`}>
                        Choose option
                      </label>
                      <select
                        className={`select bg-light form-control-lg  ${styles.select}`}
                        onChange={(e) => setPlatForm(e.target.value)}
                        value={platForm}
                      >
                        <option value="1" disabled>
                          Choose Platform
                        </option>
                        <option value="Netflix">Netflix</option>
                        <option value="Amazon Prime">Amazon Prime</option>
                        <option value="Hotstar">Hotstar</option>
                      </select>
                    </div>
                  </div>
                  `
                  <div className="mt-4 pt-2 d-flex align-items-center justify-content-center ">
                    <input
                      className={`btn btn-primary btn-lg ${styles.submitBtn}`}
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
