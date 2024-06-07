import React from 'react'
import styles from "./FeedbackComponent.module.css";
import img3 from '../../assets/download.png';
import review from '../../assets/review.png';
export default function FeedbackComponent() {
  return (
    <>

<section>
            <div className="container-md-fluid container-lg  mt-5 mb-5">
                <div className={`row ${styles.aboutSecSection} rounded-4 `}>

                    <div class="col-lg-6 col-md-6 p-4 p-sm-5 p-md-5 p-lg-5 p-xl-5 p-xxl-5 m-0 ">
                        <svg class="mt-4" width="36" height="35" viewBox="0 0 36 35" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.4261 3.18182C21.0585 3.18182 24.542 4.69034 27.1104 7.37552C29.6789 10.0607 31.1218 13.7026 31.1218 17.5C31.1218 21.4025 29.6305 24.9391 27.2064 27.5227C25.933 28.8851 24.4116 29.967 22.7319 30.7047C21.0521 31.4425 19.2481 31.8211 17.4261 31.8182C15.6276 31.8182 13.8467 31.4478 12.185 30.7283C10.5234 30.0087 9.01361 28.954 7.74185 27.6245C6.47009 26.2949 5.46128 24.7165 4.77301 22.9793C4.08474 21.2422 3.73049 19.3803 3.73049 17.5C3.73049 15.6197 4.08474 13.7578 4.77301 12.0207C5.46128 10.2835 6.47009 8.70508 7.74185 7.37552C9.01361 6.04595 10.5234 4.99128 12.185 4.27172C13.8467 3.55217 15.6276 3.18182 17.4261 3.18182ZM27.0527 31.8182C27.8896 31.2025 28.6672 30.5105 29.3809 29.75C32.4523 26.4818 34.1708 22.0817 34.1653 17.5C34.1653 7.83523 26.6707 0 17.4261 0C8.18158 0 0.687012 7.83523 0.687012 17.5C0.687012 27.1648 8.18158 35 17.4261 35H35.687V31.8182H27.0527ZM17.4261 7.95455C17.0226 7.95455 16.6355 8.12216 16.3501 8.42051C16.0647 8.71887 15.9044 9.12352 15.9044 9.54545C15.9044 9.96739 16.0647 10.372 16.3501 10.6704C16.6355 10.9688 17.0226 11.1364 17.4261 11.1364C17.8297 11.1364 18.2168 10.9688 18.5022 10.6704C18.7876 10.372 18.9479 9.96739 18.9479 9.54545C18.9479 9.12352 18.7876 8.71887 18.5022 8.42051C18.2168 8.12216 17.8297 7.95455 17.4261 7.95455ZM12.8609 9.54545C12.8609 8.27965 13.3419 7.06569 14.198 6.17063C15.0542 5.27557 16.2154 4.77273 17.4261 4.77273C18.6369 4.77273 19.7981 5.27557 20.6542 6.17063C21.5104 7.06569 21.9914 8.27965 21.9914 9.54545C21.9914 10.8113 21.5104 12.0252 20.6542 12.9203C19.7981 13.8153 18.6369 14.3182 17.4261 14.3182C16.2154 14.3182 15.0542 13.8153 14.198 12.9203C13.3419 12.0252 12.8609 10.8113 12.8609 9.54545ZM9.81745 15.9091C9.41386 15.9091 9.0268 16.0767 8.74142 16.3751C8.45603 16.6734 8.29571 17.0781 8.29571 17.5C8.29571 17.9219 8.45603 18.3266 8.74142 18.6249C9.0268 18.9233 9.41386 19.0909 9.81745 19.0909C10.221 19.0909 10.6081 18.9233 10.8935 18.6249C11.1789 18.3266 11.3392 17.9219 11.3392 17.5C11.3392 17.0781 11.1789 16.6734 10.8935 16.3751C10.6081 16.0767 10.221 15.9091 9.81745 15.9091ZM5.25223 17.5C5.25223 16.8732 5.37031 16.2526 5.59974 15.6736C5.82916 15.0945 6.16543 14.5684 6.58935 14.1252C7.01327 13.682 7.51654 13.3304 8.07041 13.0906C8.62429 12.8507 9.21793 12.7273 9.81745 12.7273C10.417 12.7273 11.0106 12.8507 11.5645 13.0906C12.1184 13.3304 12.6216 13.682 13.0455 14.1252C13.4695 14.5684 13.8057 15.0945 14.0352 15.6736C14.2646 16.2526 14.3827 16.8732 14.3827 17.5C14.3827 18.7658 13.9017 19.9798 13.0455 20.8748C12.1894 21.7699 11.0282 22.2727 9.81745 22.2727C8.60668 22.2727 7.44549 21.7699 6.58935 20.8748C5.73321 19.9798 5.25223 18.7658 5.25223 17.5ZM25.0348 15.9091C24.6312 15.9091 24.2442 16.0767 23.9588 16.3751C23.6734 16.6734 23.5131 17.0781 23.5131 17.5C23.5131 17.9219 23.6734 18.3266 23.9588 18.6249C24.2442 18.9233 24.6312 19.0909 25.0348 19.0909C25.4384 19.0909 25.8255 18.9233 26.1109 18.6249C26.3963 18.3266 26.5566 17.9219 26.5566 17.5C26.5566 17.0781 26.3963 16.6734 26.1109 16.3751C25.8255 16.0767 25.4384 15.9091 25.0348 15.9091ZM20.4696 17.5C20.4696 16.2342 20.9506 15.0202 21.8067 14.1252C22.6629 13.2301 23.8241 12.7273 25.0348 12.7273C26.2456 12.7273 27.4068 13.2301 28.2629 14.1252C29.1191 15.0202 29.6001 16.2342 29.6001 17.5C29.6001 18.7658 29.1191 19.9798 28.2629 20.8748C27.4068 21.7699 26.2456 22.2727 25.0348 22.2727C23.8241 22.2727 22.6629 21.7699 21.8067 20.8748C20.9506 19.9798 20.4696 18.7658 20.4696 17.5ZM17.4261 23.8636C17.0226 23.8636 16.6355 24.0312 16.3501 24.3296C16.0647 24.628 15.9044 25.0326 15.9044 25.4545C15.9044 25.8765 16.0647 26.2811 16.3501 26.5795C16.6355 26.8778 17.0226 27.0455 17.4261 27.0455C17.8297 27.0455 18.2168 26.8778 18.5022 26.5795C18.7876 26.2811 18.9479 25.8765 18.9479 25.4545C18.9479 25.0326 18.7876 24.628 18.5022 24.3296C18.2168 24.0312 17.8297 23.8636 17.4261 23.8636ZM12.8609 25.4545C12.8609 24.1887 13.3419 22.9748 14.198 22.0797C15.0542 21.1847 16.2154 20.6818 17.4261 20.6818C18.6369 20.6818 19.7981 21.1847 20.6542 22.0797C21.5104 22.9748 21.9914 24.1887 21.9914 25.4545C21.9914 26.7204 21.5104 27.9343 20.6542 28.8294C19.7981 29.7244 18.6369 30.2273 17.4261 30.2273C16.2154 30.2273 15.0542 29.7244 14.198 28.8294C13.3419 27.9343 12.8609 26.7204 12.8609 25.4545Z"
                                fill="#FE0039" />
                        </svg>
                        <p className="mt-2">OUR FEEDBACK</p>
                        <h1 className="fw-bold">What They’re Talking About us?</h1>

                        <div id={styles.carouselExampleSlidesOnly} class="carousel slide  me-0  p-2 p-sm-4 p-md-4 p-lg-4 p-xl-4" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class={`carousel-item active ${styles.vikas}`}>
                                    <img src={img3} width="100px" height="100px" class="rounded-circle m-2" alt=""/>
                                        <span class={styles.nameheading}>Jack Jackson</span>
                                        <span class={styles.stars}>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </span>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem odit iusto modi
                                            provident hic ad tempora animi architecto consectetur iste enim, saepe quaerat
                                            repudiandae incidunt?</p>
                                </div>
                                <div className={`carousel-item ${styles.vikas}`}>
                                    <img src={img3} width="100px" height="100px" className="rounded-circle m-2" alt=""/>
                                    <span className={styles.nameheading}>John Duo</span><br />
                                        <span className={styles.stars}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem odit iusto modi
                                            provident hic ad tempora animi architecto consectetur iste enim, saepe quaerat
                                            repudiandae incidunt?</p>
                                </div>
                                <div className={`carousel-item ${styles.vikas}`}>
                                    <img src={img3} width="100px" height="100px" className="rounded-circle m-2" alt=""/>
                                    <span className={`${styles.nameheading} ${styles.vikas}`}>Smith Thomson</span><br />
                                        <span className={`${styles.stars} ${styles.vikas}`}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem odit iusto modi
                                            provident hic ad tempora animi architecto consectetur iste enim, saepe quaerat
                                            repudiandae incidunt?</p>
                                </div>
                            </div>
                        </div>
                        <svg className="mt-3" width="36" height="36" viewBox="0 0 36 36" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.5912 0.268555L26.8582 1.64595L31.5525 7.89721L34.9276 7.19086L33.5912 0.268555ZM21.8212 2.67017L18.4461 3.35887L23.1576 9.59247L26.5155 8.90377L21.8212 2.67017ZM13.4263 4.36543L10.0512 5.08944L14.7626 11.323L18.1206 10.6343L13.4263 4.36543ZM5.01426 6.13132L3.33528 6.46684C2.89394 6.55654 2.47413 6.73516 2.0999 6.99245C1.72568 7.24974 1.40441 7.58064 1.15452 7.96617C0.904624 8.35171 0.731025 8.7843 0.643673 9.23913C0.556322 9.69397 0.556937 10.1621 0.645482 10.6167L1.31365 14.0778L9.70857 12.3649L5.01426 6.13132ZM32.1521 17.6096V31.7368H4.74014V17.6096H32.1521ZM35.5786 14.0778H1.31365V31.7368C1.31365 32.6735 1.67465 33.5718 2.31725 34.2341C2.95984 34.8965 3.83138 35.2686 4.74014 35.2686H32.1521C34.0538 35.2686 35.5786 33.6969 35.5786 31.7368V14.0778Z"
                                fill="#FE0039" />
                        </svg>
                        <button className="btn d-block mt-5" id={styles.btnColor}>DISCOVER MORE</button>
                    </div>
                    <div className="col-lg-6 col-md-6 pt-5 pb-5 m-0">
                           <img src={review} className='w-100' alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
