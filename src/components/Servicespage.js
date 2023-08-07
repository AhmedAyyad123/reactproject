
import "../css/pageservices.css";
import Header from "./components/Header";

export default function Servicespage() {

    return (<>


<Header />

        <header>
            <div className="container6">
                <div className="super-sec6">
                    <div className="panel6">
                        <div className="item-super6">
                            <h1>our services</h1><br />
                            <p>The service we offer is specifically designed
                                <br />to meet your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>




        <div className="portfolio6" id="portfolio6">
            <div className="container6">
                <div className="portfolio-content6">
                    <div className="card6">
                        <img src="../image/333.jpg" alt />
                        <div className="info6">
                            <h4>Graphic Design &amp; Branding</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <li>Brand Guidelines</li>
                            <li>Brand Identity</li>
                            <li>Color Pallete</li>
                            <li>Social Media Designs</li>
                            <button id="read-more-button">learn more &gt;</button>
                        </div>
                    </div>
                    <div className="card6">
                        <img src="../image/444.png" alt />
                        <div className="info">
                            <h4>Software</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <li>Setting up CRM</li>
                            <li>Software recommendation for a specific business type</li>
                            <button id="read-more-button">learn more &gt;</button>
                        </div>
                    </div>
                    <div className="card6">
                        <img src="../image/555.png" alt />
                        <div className="info">
                            <h4>Website Development &amp; Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <li>Wordpress Development</li>
                            <li>Ecommerce</li>
                            <li>Website Hosting</li>
                            <li>UI Design</li>
                            <li>Copywriting</li>
                            <li> Speed Optimization</li>
                            <button id="read-more-button">learn more &gt;</button>
                        </div>
                    </div>
                    <div className="card6">
                        <img src="../image/666.png" alt />
                        <div className="info6">
                            <h4>Digital Marketing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <li>Google Ads</li>
                            <li>Facebook Ads</li>
                            <li>Search Engine Optimization</li>
                            <li>Influencer Marketing</li>
                            <li>Google Ads</li>
                            <button id="read-more-button">learn more &gt;</button>
                        </div>
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


    </>)
}