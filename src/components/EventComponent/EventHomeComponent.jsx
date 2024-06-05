import styles from './EventHomeComponent.module.css';
import img1 from '../../assets/img1.webp';
import slide1 from '../../assets/fare.jpeg';
import slide2 from '../../assets/circus.webp';
import slide3 from '../../assets/slide4.jpg';


function EventHomeComponent() {



    return (<>
        <div className={`container-fluid ${styles.containerFluid} `}>
            {/* -------------- */}
            <div className={`container-fluid ${styles.eventHomeFrame2}`}>
                <div className="row">
                    <div className="col-md-6 justify-content-center">
                        <div className={styles.eventHomeSideFrame1}>
                            <img src={img1} className="img-responsive w-100 h-100" />
                        </div>
                    </div>
                    <div className="col-md-6 justify-content-center">
                        <div className={`${styles.eventHomeSideFrame2} text-start pt-2`}>
                            <span id={styles.smallheader}>
                                ABOUT CONCERT
                            </span>
                            <h1 className="text-light mt-3">
                                Indore Music <br />Festival
                            </h1>
                            <h5>/ 23 JANUARY 2024</h5>
                            <p>Mauris varius porttitor suscipit. Quisque justo tortor, convallis id elit vitae, posuere
                                ullamcorper ante. Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum
                                vestibulum sem neque.Sed in magna viverra, fermentum arcu sit amet, porttitor nulla. Vestibulum
                                vestibulum sem neque.</p>
                            <input className={`${styles.blackBtn} me-3 mt-3`} type="button" value="View Details" />
                            <input className={`${styles.redBtn} mt-3`} type="button" value="Get Details" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------ */}

            <div className='container-fluid'>
                <div className="row  d-none d-xl-block d-lg-block d-md-block d-sm-block  ">
                    <div id={styles.homepageregisterevent} className="col-lg-12 col-md-12 p-sm-3 p-lg-5 p-md-5">
                        <div className={styles.glasspanel}>
                            <h1>Register Yourself For the Events</h1>
                            <p className="text-light">Every man must decide whether he will walk in the light of creative altruism or in the darkness of eritdestructive selfishness. Ut porttitor et lectus ut tempus. Aliquam lacinia Every man must decide whether he will walk in the light of creative altruism or in the darkness.</p>
                        </div>
                        <div >
                            <button className="btn btn-danger text-light fw-bold w-25">More Info </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------- */}

            {/* -------------- */}
            {/* <div className={`container-fluid ${styles.eventHomeFrame5}`}>
                <div className="">
                    <h1 className="text-center text-light pt-4">Featured Events</h1>
                    <p className="text-center">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem
                        quis bibendum auctor.</p>
                </div>
                <div className="row justify-content-center">
                    <div id={styles.featuredEventIndicators} className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex">
                                    <div className="col-sm-12 col-md-6 justify-content-center">
                                        <div className={`card mt-5 ${styles.cardTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 justify-content-center">
                                        <div className={`card mt-5 ${styles.cardTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex">
                                    <div className="col-sm-12 col-md-6 justify-content-center">
                                        <div className={`card mt-5 ${styles.cardTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 justify-content-center">
                                        <div className={`card mt-5 ${styles.cardTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className="col-sm-12 col-md-6 justify-content-center">
                                        <div className={`card mt-5 ${styles.cardTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 justify-content-center" >
                                        <div className={`card mt-5 ${styles.cardTag}`}>
                                            <span id={styles.cardheader}>
                                                Christmas Party
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#featuredEventIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#featuredEventIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    </>);
}



export default EventHomeComponent;


