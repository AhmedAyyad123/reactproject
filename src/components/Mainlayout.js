import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../css/style.css";
import { Link } from 'react-router-dom';
import Header from './components/Header';
export const breakpoints = {
    640: {
        width: 640,
        slidesPerView: 1,
    },
    768: {
        width: 768,
        slidesPerView: 2,
    },
    1000: {
        width: 1000,
        slidesPerView: 3,
    },
    2000: {
        width: 2000,
        slidesPerView: 4,
    },
};
export default function Mainlayout() {
    return (

        <>

            <Header/>


            <br />
            <section>
                <div className="container0">
                    <div className="text0">
                        <h1>Secure <span>IT Solutions </span>For a more <br />secure environment</h1>
                        <h4>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
                            amet sint. Velit officia consequat duis enim velit mollit. Exercitation <br />
                            veniam consequat sunt nostrud amet.
                            get started</h4>
                    </div>
                    <img className="img20" src="../image/222.jpg" alt />
                </div>
            </section>

            <br />
            <div>
                <center>
                    <h1 style={{ color: 'blue' }}>our services</h1>
                    <h4v style={{ color: 'rgb(89, 102, 110)' }}>The service we offer is specifically<br /> designed
                        to meet your needs.
                    </h4v></center>
            </div>


            <section className="s10">
                <div className="container20">
                    <div className="card0">
                        <div className="imgbx0">
                            <img style={{ objectFit: 'contain' }} width={250} height={250} src="../image/666.png" alt />
                            <h2>Digital Marketing</h2>
                            <li>Google Ads</li>
                            <li>Facebook Ads</li>
                            <li>Instagram Ads</li>
                            <li>Search Engine Optimization</li>
                            <li>Influencer Marketing</li>
                            <p className="custom-text0" style={{ display: 'none' }}>This is my additional text.</p>
                            <button className="read-more-button0" onClick="toggleInfo(this)">learn more <span className="arrow-icon0">&gt;</span></button>
                        </div>
                    </div>
                    <div className="card0">
                        <div className="imgbx0">
                            <img style={{ objectFit: 'contain' }} width={250} height={250} src="../image/555.png" alt />
                            <h2>Website Development &amp; Design</h2>
                            <li>Wordpress Development</li>
                            <li>Ecommerce</li>
                            <li>Website Hosting</li>
                            <li>UI Design</li>
                            <li>Copywriting</li>
                            <li>Speed Optimization</li>
                            <p className="custom-text0" style={{ display: 'none' }}>This is my additional text.</p>
                            <button className="read-more-button0" onClick="toggleInfo(this)">learn more <span className="arrow-icon0">&gt;</span></button>
                        </div>
                    </div>
                    <div className="card0">
                        <div className="imgbx0">
                            <img style={{ objectFit: 'contain' }} width={250} height={250} src="../image/444.png" alt />
                            <h2>Software</h2>
                            <li>Setting up CRM</li>
                            <li>Software recommendation for a specific business type </li>
                            <p className="custom-text0" style={{ display: 'none' }}>This is my additional text.</p>
                            <button className="read-more-button0" onClick="toggleInfo(this)">learn more <span className="arrow-icon0">&gt;</span></button>
                        </div>
                    </div>
                    <div className="card0">
                        <div className="imgbx0">
                            <img width={250} height={250} src="../image/333.jpg" alt />
                            <h2>Graphic Design &amp; Branding</h2>
                            <li>Brand Guidelines</li>
                            <li>Brand Identity</li>
                            <li>Color Pallete</li>
                            <li>Social Media Designs</li>
                            <li>Printables</li>
                            <p className="custom-text0" style={{ display: 'none' }}>This is my additional text.</p>
                            <button className="read-more-button0" onClick="toggleInfo(this)">learn more <span className="arrow-icon0">&gt;</span></button>
                        </div>
                    </div>
                </div>
            </section>

            <br />


            <section className="s10">
                <div className="container20">

                <div className="ayyad0">
                        <center>
                            <h1 style={{ color: 'blue' }}>Our Project</h1>
                            <h4 style={{ color: 'rgb(89, 102, 110)' }}>You Can See Our Projects
                            </h4>
                        </center>
                    </div>
                    <ul className="navbar20">
                        <li><a href="#home" className="homa-active">ALL</a></li>
                        <li><a href="#movies">Digital Marketing</a></li>
                        <li><a href="#coming">Website development</a></li>
                        <li><a href="#newsletter">software</a></li>
                    </ul>
                    <div className="card0">
                        <div className="imgbx0">
                            <img width={300} height={300} src="../image/777.png" alt />
                            <h2>Project name</h2>
                            <ul>
                                <li>UI/UX</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card0">
                        <div className="imgbx0">
                            <img width={300} height={300} src="../image/1010.png" alt />
                            <h2>Project name</h2>
                            <ul>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card0">
                        <div className="imgbx0">
                            <img width={300} height={300} src="../image/888.png" alt />
                            <h2>Project name</h2>
                            <ul>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card0">
                        <div className="imgbx0">
                            <img width={300} height={300} src="../image/999.png" alt />
                            <h2>Project name</h2>
                            <ul>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <br />

            <div>
                <center>
                    <h1 style={{ color: 'blue' }}>OUR STRATEGY</h1>
                    <h4 style={{ color: 'rgb(89, 102, 110)' }}>Amet minim mollit non deserunt ullamco est <br />
                        sit aliqua dolor
                    </h4>
                </center>
            </div>

            <section>
                <div className="container20">
                    <div className="card0">
                        <div className="imgbx0">
                            <div className="stratigies10">
                                1
                            </div>
                            <h2>Project name</h2>
                            <br />
                            <hr />
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="card0" id="STRATEGY20">
                        <div className="imgbx0">
                            <div className="stratigies20">
                                2
                            </div>
                            <h2>Project name</h2>
                            <br />
                            <hr />
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="card0">
                        <div className="imgbx0">
                            <div className="stratigies30">
                                3
                            </div>
                            <h2>Project name</h2>
                            <br />
                            <hr />
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="card0" id="STRATEGY20">
                        <div className="imgbx0">
                            <div className="stratigies40">
                                4
                            </div>
                            <h2>Project name</h2>
                            <br />
                            <hr />
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                </div>
            </section>




            <div>
                <center>
                    <h1 style={{ color: 'blue' }}>COMPANY FACTS</h1>
                    <h4 style={{ color: 'rgb(89, 102, 110)' }}>The service we offer is specifically designed <br />
                        We are proud of our design team
                    </h4>
                </center>
            </div>

            <section>
                <div className="container20">
                    <div className="card0" style={{ alignItems: 'center' }}>
                        <div className="imgbx0">
                            <div className="stratigies30">
                                <img width={70} height={70} src="../image/1616.png" alt />
                            </div>
                            <h1 style={{ marginTop: 15, marginLeft: 20 }}>1000 +</h1>
                            <p style={{ color: 'rgb(89, 102, 110)' }}>Completed projects</p>
                        </div>
                    </div>
                    <div className="card0" style={{ alignItems: 'center' }}>
                        <div className="imgbx0">
                            <div className="stratigies20">
                                <img width={70} height={70} src="../image/1515.png" alt />
                            </div>
                            <h1 style={{ marginTop: 15, marginLeft: 20 }}>50K +</h1>
                            <p style={{ color: 'rgb(89, 102, 110)' }}>Happy Customers</p>
                        </div>
                    </div>
                    <div className="card0" style={{ alignItems: 'center' }}>
                        <div>
                            <div className="stratigies10">
                                <img width={70} height={70} src="../image/1414.jpg" alt />
                            </div>
                            <h1 style={{ marginTop: 15, marginLeft: 20 }}>20 +</h1>
                            <p style={{ color: 'rgb(89, 102, 110)' }}>awards won</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <center>
                    <h1 style={{ color: 'blue' }}>COMPANY FACTS</h1>
                    <h4 style={{ color: 'rgb(89, 102, 110)' }}>TWe are proud of our design team
                    </h4>
                </center>
            </div>


            <Swiper
                slidesPerView={3}
                className="swiper"
                breakpoints={breakpoints}
                style={{ padding: " 1rem" }}
                spaceBetween={50}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, A11y, EffectCoverflow]}
            >
                <SwiperSlide><div className="swiper-slide box" >
                    <div className="box-img0">
                        <img src="../image/1111.png" alt />
                        <p style={{ color: 'rgb(89, 102, 110)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="box-img0">
                        <img src="../image/1212.png" alt />
                        <p style={{ color: 'rgb(89, 102, 110)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam</p>
                    </div>
                </SwiperSlide> <SwiperSlide>
                    <div className="box-img0">
                        <img src="../image/1313.png" alt />
                        <p style={{ color: 'rgb(89, 102, 110)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam</p>
                    </div>

                </SwiperSlide> <SwiperSlide>
                    <div className="box-img0">
                    <img src="../image/1111.png" alt />
                    <p style={{ color: 'rgb(89, 102, 110)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam</p>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="box-img0">
                    <img src="../image/1212.png" alt />
                    <p style={{ color: 'rgb(89, 102, 110)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam</p>
                </div>
                </SwiperSlide> <SwiperSlide><div className="box-img0">
                    <img src="../image/1313.png" alt />
                    <p style={{ color: 'rgb(89, 102, 110)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam</p>
                </div>
                </SwiperSlide>

            </Swiper>




            <div>
                <center>
                    <h1 style={{ color: 'blue' }}>Frequently asked questions</h1>
                    <h4 style={{ color: 'rgb(89, 102, 110)' }}>The service we offer is specifically designed <br />
                        We are proud of our design team
                    </h4>
                </center>
            </div>
            <section>
                <div className="container0">
                    <div className="accordions0">
                        <div className="accordion0">
                            <div className="header0">
                                <h5>Amet minim mollit non deserunt ullamco </h5>
                                <p className="showAcc"><i className="fa-regular fa-plus" /></p>
                            </div>
                            <span className="content">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                                aliquip
                                ex
                                ea commodo consequat aute irure dolor</span>
                        </div>
                        <div className="accordion0">
                            <div className="header0">
                                <h5>Amet minim mollit non deserunt ullamco </h5>
                                <p className="showAcc"><i className="fa-regular fa-plus" /></p>
                            </div>
                            <span className="content">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                                aliquip
                                ex
                                ea commodo consequat aute irure dolor</span>
                        </div>
                        <div className="accordion0">
                            <div className="header0">
                                <h5>Amet minim mollit non deserunt ullamco </h5>
                                <p className="showAcc"> <i className="fa-regular fa-plus" /></p>
                            </div>
                            <span className="content">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                                aliquip
                                ex
                                ea commodo consequat aute irure dolor</span>
                        </div>
                        <div className="accordion0">
                            <div className="header0">
                                <h5>Amet minim mollit non deserunt ullamco </h5>
                                <p className="showAcc"> <i className="fa-regular fa-plus" /></p>
                            </div>
                            <span className="content0">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                                aliquip
                                ex
                                ea commodo consequat aute irure dolor</span>
                        </div>
                        <div className="accordion0">
                            <div className="header0">
                                <h5>Amet minim mollit non deserunt ullamco </h5>
                                <p className="showAcc0"><i className="fa-regular fa-plus" /></p>
                            </div>
                            <span className="content0">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                                aliquip
                                ex
                                ea commodo consequat aute irure dolor</span>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <center>
                    <h1 style={{ color: 'blue' }}>This just happened </h1>
                    <h4 style={{ color: 'rgb(89, 102, 110)' }}>Amet minim mollit non deserunt ullamco est <br />
                        sit aliqua dolor do amet sint.
                    </h4>
                </center>
            </div>

            <Swiper
                slidesPerView={3}
                className="swiper"
                breakpoints={breakpoints}
                style={{ padding: " 1rem" }}
                spaceBetween={190}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, A11y, EffectCoverflow]}
            >
                <SwiperSlide><div className="box-img">
                    <img src="../image/2020.png" alt />
                    <h3>Techreif is is transforming and scaling
                        businesses successfully through services</h3>
                    <span>Techreif Oct 20, 2022</span>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="box-img">
                    <img src="../image/2020.png" alt />
                    <h3>Techreif is is transforming and scaling
                        businesses successfully through services</h3>
                    <span>Techreif Oct 20, 2022</span>
                </div>
                </SwiperSlide> <SwiperSlide><div className="box-img">
                    <img src="../image/2020.png" alt />
                    <h3>Techreif is is transforming and scaling
                        businesses successfully through services</h3>
                    <span>Techreif Oct 20, 2022</span>
                </div>
                </SwiperSlide> <SwiperSlide><div className="box-img">
                    <img src="../image/2020.png" alt />
                    <h3>Techreif is is transforming and scaling
                        businesses successfully through services</h3>
                    <span>Techreif Oct 20, 2022</span>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="box-img">
                    <img src="../image/2020.png" alt />
                    <h3>Techreif is is transforming and scaling
                        businesses successfully through services</h3>
                    <span>Techreif Oct 20, 2022</span>
                </div>
                </SwiperSlide> <SwiperSlide><div className="box-img">
                    <img src="../image/2020.png" alt />
                    <h3>Techreif is is transforming and scaling
                        businesses successfully through services</h3>
                    <span>Techreif Oct 20, 2022</span>
                </div>
                </SwiperSlide> <SwiperSlide><div className="box-img">
                    <img src="../image/2020.png" alt />
                    <h3>Techreif is is transforming and scaling
                        businesses successfully through services</h3>
                    <span>Techreif Oct 20, 2022</span>
                </div>
                </SwiperSlide> <SwiperSlide><div className="box-img">
                    <img src="../image/2020.png" alt />
                    <h3>Techreif is is transforming and scaling
                        businesses successfully through services</h3>
                    <span>Techreif Oct 20, 2022</span>
                </div>
                </SwiperSlide>

            </Swiper>

            <footer className="footer">
                <div className="footer-container">
                    <section className="top-part">
                        <p className="ready-started">Ready to get started?</p>
                        <button className="footer-btn">Get Started</button>
                    </section>
                    <div className="middle-part">
                        <div className="middle-flex">
                            <p>
                                Subscribe to our newsletter
                            </p>
                            <div className="footer-input">
                                <input type="text" name="email" id="footer-input" placeholder="Email address" />
                                <div className="footer-input-icon"> <i className="fa-solid fa-angle-right" /></div>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>About US</li>
                                <li>Services</li>
                                <li>Latest News</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Help</li>
                                <li>FAQs</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <div className="contact-widgett">
                                <img src="../image/footer/i1.png" alt="phone" />
                                <h5>Address:</h5>
                                <p>28 Division St, New York, NY 10002, USA</p>
                            </div>
                            <div className="contact-widgett">
                                <img src="../image/footer/i2.png" alt="phone" />
                                <h5>Email:</h5>
                                <p>Startnext@Gmail.Com</p>
                            </div>
                            <div className="contact-widgett">
                                <img src="../image/footer/i3.png" alt="phone" />
                                <h5>Phone:</h5>
                                <p>+ (321) 984 75413545</p>
                            </div>
                        </div>
                    </div>
                    <div className="lower-part">
                        <div className="flex-footer">
                            <p>Terms &amp; Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className="footer-icons">
                            <img src="../image/footer/fb.png" alt="facebook" />
                            <img src="../image/footer/is.png" alt="instagram" />
                            <img src="../image/footer/tw.png" alt="twitter" />
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )


}