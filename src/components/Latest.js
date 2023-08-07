import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../css/pagelatest.css";
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
export default function Latest() {

    return (<>

     <Header />



        <header>
            <div className="container4">
                <div className="super-sec4">
                    <div className="panel4">
                        <div className="item-super4">
                            <h1>Blog Title</h1><br />
                        </div>
                    </div>
                    <img src="../image/2222.png" alt="balls image" className="balls-img4" />
                </div>
            </div>
        </header>



        <div className="container4">
            <div className="super-sec24">
                <div className="panel24">
                </div>
            </div>
            <div className="bt4">
                <input type="submit" defaultValue="submit" className="btn14" />
            </div>
        </div>


        <div className="container4">
            <div className="container34">
                <h1 className="h1">Lorem Ipsum Dolor Sit Amet</h1>
                <p className="p2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorem pariatur accusantium
                    cum
                    illum
                    temporibus tempore eius nihil recusandae illo ducimus vero quia dicta voluptatibus, expedita maiores eos
                    perferendis quos!</p>
                <p className="p2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorem pariatur accusantium
                    cum
                    illum
                    temporibus tempore eius nihil recusandae illo ducimus vero quia dicta voluptatibus, expedita maiores eos
                    perferendis quos!</p>
            </div>
        </div>


                <h2 className="special-heading4">Popular Blogs</h2>
                <div className="portfolio-content4"></div>
       
        <Swiper
            slidesPerView={3}
            className="swiper"
            breakpoints={breakpoints}
            style={{ padding: " 1rem" }}
            spaceBetween={50}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        >
            <SwiperSlide>
                <div className="card24">
                    <a href="latest2.html"><img src="../image/2525.png" alt /></a>
                    <div className="info4">
                        <h4>Blog Title</h4>
                        <li>UI/UX</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                        <li>Techreif Oct 20, 2022 </li>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>

                <div className="card24">
                    <a href="latest2.html"><img src="../image/2626.png" alt /></a>
                    <div className="info4">
                        <h4>Blog Title</h4>
                        <li>Digital Marketing </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                        <li>Techreif Oct 20, 2022 </li>
                    </div>
                </div>

            </SwiperSlide> <SwiperSlide>
                <div className="card24">
                    <a href="latest2.html"><img src="../image/2323.png" alt /></a>
                    <div className="info4">
                        <h4>Blog Title</h4>
                        <li>UI/UX</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                        <li>Techreif Oct 20, 2022 </li>
                    </div>
                </div>

            </SwiperSlide> <SwiperSlide>   <div className="card24">
                <a href="latest2.html"><img src="../image/2424.png" alt /></a>
                <div className="info4">
                    <h4>Blog Title</h4>
                    <li>Digital Marketing </li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                    <li>Techreif Oct 20, 2022 </li>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>                    <div className="card24">
                <a href="latest2.html"><img src="../image/2525.png" alt /></a>
                <div className="info4">
                    <h4>Blog Title</h4>
                    <li>UI/UX</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                    <li>Techreif Oct 20, 2022 </li>
                </div>
            </div>
            </SwiperSlide> <SwiperSlide>   <div className="card24">
                <a href="latest2.html"><img src="../image/2626.png" alt /></a>
                <div className="info4">
                    <h4>Blog Title</h4>
                    <li>Digital Marketing </li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                    <li>Techreif Oct 20, 2022 </li>
                </div>
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


    </>)
}