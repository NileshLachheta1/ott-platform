import "../FormComponent/FormComponent.css";
import img1 from "../../assets/ContactUsBanner.jpeg";
import img2 from "../../assets/popcorn.png";

function ContactUsComponent() {
  return (
    <div className="bg-dark container-fluid">
      {/* <!-- ================ First Section ===============  --> */}
      <section>
        <div className="position-relative">
          <img src={img1} className="banner" alt="Contact Us Banner" />
          <div className="position-absolute top-50 start-50 translate-middle">
            <div class="banner-text fw-fw-semibold text-white">
              Home &gt; ContactUs
            </div>
            <div class="banner-heading fw-bold text-white">ContactUs</div>
          </div>
        </div>
      </section>

      {/* <!-- ================ Second Section ===============  --> */}
      <section>
        <div className="sec-div position-relative overflow-hidden">
          <img src={img2} className="w-55" alt="Popcorn" />
          <div className="text-div position-absolute top-0 start-0 container-fluid">
            <center>
              <h1 className="text-white mt-5 fw-bolder">
                Feel Free to Write Us Anytime
              </h1>
              <br />
              <br />
              <p className="fs-4 paragraph mb-5 text-light">
                We’d love to talk about how we can work together. Send us a
                message below and we’ll respond as soon as possible.
              </p>

              <div className="contactus-form mt-5">
                <form action="" method="post" enctype="multipart/form-data">
                  <div className="row">
                    <div className="col-12 col-md-6 col-margin mb-4">
                      <input
                        className="form-control p-3"
                        type="text"
                        name="product_name"
                        placeholder="Enter Product Name"
                      />
                    </div>
                    <div className="col-12 col-md-6 col-margin mb-4">
                      <input
                        className="form-control p-3"
                        type="text"
                        name="product_price"
                        placeholder="Enter Product Price"
                      />
                    </div>
                    <div className="col-12 col-md-6 col-margin mb-4">
                      <input
                        className="form-control p-3"
                        type="text"
                        name="actual_price"
                        placeholder="Enter Actual Price"
                      />
                    </div>
                    <div className="col-12 col-md-6 col-margin mb-4">
                      <input
                        className="form-control p-3"
                        type="text"
                        name="quantity"
                        placeholder="Enter Quantity"
                      />
                    </div>
                    <div className="col-12 col-md-12 col-margin mb-4">
                      <textarea
                        className="form-control p-3"
                        rows="4"
                        name="description"
                        placeholder="Description"
                      ></textarea>
                    </div>
                    <div className="col-12 col-md-12 col-margin mb-4">
                      <button
                        type="submit"
                        className="btn btn-danger col-lg-4 text-white p-2 fs-4 fw-bold"
                      >
                        Send a Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </center>
          </div>
        </div>
      </section>

      {/* <!-- ================ Third Section ===============  --> */}
      <section>
        <div className="container">
          <div className="row justify-content-around mt-5 mb-3">
            <div className="col-lg-2 col-md-4 col-sm-8 sec-third mb-4 me-4 ms-4 border border-1 border-white rounded-5 text-center">
              <i className="fa-brands fa-square-facebook fa-2xl mt-5 p-3"></i>
              <h2 className="fw-bolder mt-2">130K</h2>
              <h5>Followers</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-8 sec-third mb-4 me-4 ms-4 border border-1 border-white rounded-5 text-center">
              <i className="fa-solid fa-users fa-2xl mt-5 p-3"></i>
              <h2 className="fw-bolder mt-2">35K</h2>
              <h5>Members</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-8 sec-third mb-4 me-4 ms-4 border border-1 border-white rounded-5 text-center">
              <i className="fa-brands fa-square-twitter fa-2xl mt-5 p-3"></i>
              <h2 className="fw-bolder mt-2">47K</h2>
              <h5>Followers</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-8 sec-third mb-4 me-4 ms-4 border border-1 border-white rounded-5 text-center">
              <i className="fa-solid fa-square-envelope fa-2xl mt-5 p-3"></i>
              <h2 className="fw-bolder mt-2">291K</h2>
              <h5>Subscribers</h5>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ================ Fourth Section ===============  --> */}
      <section className="fourth-sec">
        <div className="container-fluid">
          <center>
            <div className="sub-banner text-white">
              <div className="sub-banner-text w-100 text-center mt-5 fw-bold">
                SUBSCRIBE TO CINEFLEX
              </div>
              <div className="sub-banner-heading w-100 text-center fw-bolder">
                TO GET EXCLUSIVE BENEFITS
              </div>
              <div className="sub-button d-flex align-items-center justify-content-center w-100">
                <div className="subscribe-btn w-100">
                  <input
                    type="text"
                    className="border-1 border-end-0 border-black rounded-start-pill p-lg-3 p-sm-3 p-1"
                    placeholder="Your Email Address"
                  />
                  <button
                    className="rounded-pill p-lg-3 p-sm-3 p-1"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="sub-banner-para w-100 text-center">
                We respect your privacy, so we never share your info
              </div>
            </div>
          </center>
        </div>
      </section>

    </div>
  );
}

export default ContactUsComponent;
