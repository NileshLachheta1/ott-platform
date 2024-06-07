import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FormComponent.css";
import Swal from "sweetalert2";
import {
  checkUsername,
  checkContactNumber,
  checkStartTime,
  checkPlatform,
  checkFormData,
} from "../../validation/validation.js";

const FormComponent = () => {
  const [data, setData] = useState({});
  const [activeuser, setActiveUser] = useState([]);
  const [netflixActiveStatus, setNetflixActiveStatus] = useState(false);
  const [amazonPrimeActiveStatus, setAmazonPrimeActiveStatus] = useState(false);
  const [hotstarActiveStatus, setHotstarActiveStatus] = useState(false);

  const getData = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
    console.log("name : ", event.target.name);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = checkFormData();
      if (!res) {
        return false;
      }
      const { fullName, number, time, platForm } = data;
      const response = await axios.post("/api/users/register", data);
      await Swal.fire({
        title: "Congratulations",
        text: response.data.message,
        icon: "success"
        });
        setData({});
        event.target.reset();
        window.open('https://rzp.io/l/ZhVuJ42iZW', '_blank');
        window.location.reload();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
      // console.log("Error In handleSubmit :", error);
    }
  };

  const timeChange = async (event) => {
    try {
      const time = event.target.value;
      const response = await axios.get(`/api/users/timechange?time=${time}`);
      const users = response.data.activeUserList;
      setActiveUser(users);
    } catch (error) {
    }
  };

  useEffect(() => {
    activeuser.map((item, index) => {
      if (item.ottPlatform === "Netflix" && item.count >= 2) {
        setNetflixActiveStatus(!netflixActiveStatus);
      }
      if (item.ottPlatform === "Amazon Prime" && item.count >= 2) {
        setAmazonPrimeActiveStatus(!amazonPrimeActiveStatus);
      }
      if (item.ottPlatform === "Hotstar" && item.count >= 2) {
        setHotstarActiveStatus(!hotstarActiveStatus);
      }
    });
  }, [activeuser]);

  return (
    <section className={`gradientCustom vh-100`}>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className={`card cardRegistration shadow-2-strong`}
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
                      <div className={`formfield form-outline formOutline`}>
                        <label
                          className={`form-label formLabel`}
                          htmlFor="firstName"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Name"
                          id="firstName"
                          name="fullName"
                          className={`form-control form-control-lg formControl`}

                          onChange={(event) => {getData(event); checkUsername();}}
                        />
                        <small className="text-danger"></small>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className={`formfield form-outline formOutline`}>
                        <label
                          className={`form-label formLabel`}
                          htmlFor="phoneNumber"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="text"
                          placeholder="Enter phone number"
                          id="phoneNumber"
                          name="number"
                          className={`form-control form-control-lg formControl`}
                          // onKeyUp={checkContactNumber}
                          onChange={(event) => {getData(event); checkContactNumber();}}
                        />
                        <small className="ms-3 text-danger"></small>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div
                        className={`formfield form-outline datepicker w-100 timePicker`}
                      >
                        <label
                          htmlFor="starttime"
                          className={`form-label timePickerlabel`}
                        >
                          Start Time *
                        </label>
                        <input
                          type="time"
                          className={`form-control form-control-lg formControl`}
                          id="startdate"
                          name="time"
                          onChange={(event) => {
                            getData(event);
                            timeChange(event);
                            checkStartTime(event);
                          }}
                        />
                        <small></small>
                      </div>
                    </div>
                    <div className="formfield col-md-6 mb-4">
                      <label className={`form-label selectLabel`}>
                        Choose option *
                      </label>
                      <select
                        className={`select bg-light form-control-lg select`}
                        onChange={(event) => {
                          getData(event);
                          checkPlatform();
                        }}
                        id="platform"
                        name="platForm"
                      >
                        <option value="">Select Platform</option>
                        <option value="Netflix" disabled={netflixActiveStatus}>
                          Netflix
                        </option>
                        <option
                          value="Amazon Prime"
                          disabled={amazonPrimeActiveStatus}
                        >
                          Amazon Prime
                        </option>
                        <option value="Hotstar" disabled={hotstarActiveStatus}>
                          Hotstar
                        </option>
                      </select>
                      <small></small>
                    </div>
                  </div>
                  <div className="mt-4 pt-2 d-flex align-items-center justify-content-center">
                    <input
                      className={`btn btn-primary btn-lg submitBtn`}
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
