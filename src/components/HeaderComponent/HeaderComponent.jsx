import React from "react";
import headerImage from '../../assets/headerImage.jpg'
export default function HeaderComponent() {
  return (
    <div className="container-fluid">
      <div
        id="headerbanner"
        className="px-lg-5 row  justify-content-between align-items-center"
      >
        <div className=" col-12 col-lg-6 col-md-6 px-sm-4 ">
          <h1 className="display-5 fw-bold fst-italic ">
            Stay <span className="text-primary">Entertainment</span> at Home
          </h1>
          <p className="fs-6 fw-medium flex" style={{textAlign:"justify"}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
            tempore magni qui necessitatibus quasi eaque error mollitia
            inventore, provident accusamus autem quaerat velit quis?
            <br />Dicta vero excepturi incidunt ipsam modi nisi atque beatae consectetur voluptas
            commodi eaque, quae fugit veniam.
          </p>
          <button className="btn btn-outline-danger rounded-5 fw-medium">Book Now</button>
        </div>
        <div className="col-12 col-lg-6 col-md-6 py-4 p-lg-5">
            <img src={headerImage} className="img-fluid img-responsive rounded-5" alt="" />
        </div>
      </div>
    </div>
  );
}
