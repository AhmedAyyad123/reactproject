
import { Link } from "react-router-dom";
import "../css/pagelatestnew.css";
import Header from "./components/Header";

export default function Latestnew() {
    return (<>


<Header />


        <header>
            <div className="container">
                <div className="super-sec">
                    <div className="panel">
                        <div className="item-super">
                            <h1>Latest News</h1><br />
                            <p>Follow us for the latest news and articles</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="portfolio" id="portfolio">
            <div className="container">
                {/* Menu  */}
                <ul className="navbar2">
                    <li><a href="#home" className="homa-active">ALL</a></li>
                    <li><a href="#movies">Digital Marketing</a></li>
                    <li><a href="#coming">Website development</a></li>
                    <li><a href="#newsletter">software</a></li>
                </ul>
                <div className="portfolio-content">
                    <div className="card2">
                       <Link to="/Latest"> <img src="../image/2323.png" alt /></Link>
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>UI/UX</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                        <Link to="/Latest"><img src="../image/2424.png" alt /></Link>
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>Digital Marketing </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                        <Link to="/Latest"><img src="../image/2525.png" alt /></Link> 
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>UI/UX</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                        <Link to="/Latest"><img src="../image/2626.png" alt /></Link> 
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>Digital Marketing </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                        <Link to="/Latest"><img src="../image/2323.png" alt /></Link> 
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>UI/UX</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                        <Link to="/Latest"><img src="../image/2424.png" alt /></Link> 
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>Digital Marketing </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                        <Link to="/Latest"><img src="../image/2525.png" alt /></Link> 
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>UI/UX</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                        <Link to="/Latest"><img src="../image/2626.png" alt /></Link> 
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>Digital Marketing </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                        <Link to="/Latest"><img src="../image/2323.png" alt /></Link> 
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>UI/UX</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                    <Link to="/Latest"><img src="../image/2424.png" alt /></Link> 
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>Digital Marketing </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                    <Link to="/Latest"><img src="../image/2525.png" alt /></Link> 
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>UI/UX</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
                        </div>
                    </div>
                    <div className="card2">
                    <Link to="/Latest"><img src="../image/2626.png" alt /></Link> 
                        <div className="info">
                            <h4>Blog Title</h4>
                            <li>Digital Marketing </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
                            <li>Techreif Oct 20, 2022 </li>
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




    </>
    )

}