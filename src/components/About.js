import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../css/About.css";
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

export default function About() {
  return (<>


    <Header />

    <header>
      <div className="container1">
        <div className="super-sec1">
          <div className="panel1">
            <div className="item-super1">
              <h1>About US</h1><br />
              <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>


    <div className="container1">
      <div className="description1">
        <img src="../image/Frame.png" alt="people looking for something!" className="people-svg1" />
        <div className="desc-flex1">
          <h3 className="about-title1">About The Company</h3>
          <div className="descr1">
            <h2 className="hero-heading1">Secure <span className="red-txt1" style={{ color: 'lightgreen' }}>IT
              Solutions</span>for a more secure environment</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
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
      <SwiperSlide>
        <div className="card21">
          <img src="../image/about1.png" alt />
          <div className="info1">
            <h4>Project name</h4>
            <li>UI/UX</li>
            <li style={{ listStyle: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>

        <div className="card21">
          <img src="../image/about2.png" alt />
          <div className="info1">
            <h4>Project name</h4>
            <li>Digital Marketing</li>
            <li style={{ listStyle: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
          </div>
        </div>
      </SwiperSlide> <SwiperSlide>
        <div className="card21">
          <img src="../image/about3.png" alt />
          <div className="info1">
            <h4>Project name</h4>
            <li>Digital Marketing</li>
            <li style={{ listStyle: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
          </div>
        </div>

      </SwiperSlide> <SwiperSlide>
        <div className="card21">
          <img src="../image/about4.png" alt />
          <div className="info1">
            <h4>Project name</h4>
            <li>Digital Marketing</li>
            <li style={{ listStyle: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
          </div>
        </div>


      </SwiperSlide>
      <SwiperSlide>
        <div className="card21">
          <img src="../image/about1.png" alt />
          <div className="info1">
            <h4>Project name</h4>
            <li>UI/UX</li>
            <li style={{ listStyle: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
          </div>
        </div>
      </SwiperSlide> <SwiperSlide>

        <div className="card21">
          <img src="../image/about2.png" alt />
          <div className="info1">
            <h4>Project name</h4>
            <li>Digital Marketing</li>
            <li style={{ listStyle: 'none' }}>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
          </div>
        </div>

      </SwiperSlide>

    </Swiper>

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

        <div className="our-com1">
          <img src="../image/1111.png" alt width="150px" height="150px" className="img1" />
          <p className="p11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

        </div>


      </SwiperSlide>
      <SwiperSlide>


        <div className="our-com1">
          <img src="../image/1212.png" alt width="150px" height="150px" className="img1" />
          <p className="p11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

        </div>


      </SwiperSlide> <SwiperSlide>

        <div className="our-com1">
          <img src="../image/1313.png" alt width="150px" height="150px" className="img1" />
          <p className="p11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

        </div>



      </SwiperSlide> <SwiperSlide>

        <div className="our-com1">
          <img src="../image/1111.png" alt width="150px" height="150px" className="img1" />
          <p className="p11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

        </div>


      </SwiperSlide>
      <SwiperSlide>

        <div className="our-com1">
          <img src="../image/1212.png" alt width="150px" height="150px" className="img1" />
          <p className="p11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

        </div>

      </SwiperSlide> <SwiperSlide>

        <div className="our-com1">
          <img src="../image/1313.png" alt width="150px" height="150px" className="img1" />
          <p className="p11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

        </div>



      </SwiperSlide>

    </Swiper>

    <div className="container1">
      <div className="company-facts grey1">
        <div className="h1-image1">
          <h1>COMPANY FACTS</h1>
          <p>The service we offer is specifically designed <br />
            We are proud of our design team</p>
        </div>
        <div className="widget-cards1">
          <div className="widget-card1">
            <p className="number1">1000+</p>
            <p>Completed Projects</p>
          </div>
          <div className="widget-card1">
            <p className="number1">10k</p>
            <p>Completed Projects</p>
          </div>
          <div className="widget-card1">
            <p className="number1">15k</p>
            <p>Completed Projects</p>
          </div>
        </div>
      </div>
    </div>

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