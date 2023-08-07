
import "../css/pageconact.css";
import Header from "./components/Header";
export default function Acontact() {
  return (<>


    <Header />
    <header>
      <div className="container">
        <div className="super-sec">
          <div className="panel">
            <div className="item-super">
              <h1>Contact US</h1><br />
              <p>Keep in Touch With us</p>
            </div>
          </div>
        </div>
      </div>
    </header>


    <div className="container">
      <div className="description">
        <img src="../image/2727.png" alt="people looking for something!" className="people-svg" />
        <div className="desc-flex">
          <h3 className="about-title">About The Company</h3>
          <div className="descr">
            <h2 className="hero-heading">Secure <span className="red-txt" style={{ color: 'lightgreen' }}>IT
              Solutions</span>for a more secure environment</h2>
          </div>
          <div className="accordions">
            <div className="accordion">
              <div className="header">
                <a href="#"><span className="material-symbols-outlined">
                  pin_drop
                </span>28 Division St, New York, NY 10002, USA</a>
              </div>
            </div>
            <div className="accordion">
              <div className="header">
                <a href="#"><span className="material-symbols-outlined">call</span>Phone: + (321) 984 754</a>
              </div>
            </div>
            <div className="accordion">
              <div className="header">
                <a href="#"><span className="material-symbols-outlined">
                  mail
                </span>Email:Startnext@Gmail. Com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <h2 className="special-heading">Drop Us a Line</h2>
      <p>Fill out the contact form and we will get back to you shortly.</p>
      <section className="form-sec">
        <form className="form" action="#">
          <div className="inputs">
            <input type="text" className="input" placeholder="First Name" />
            <input type="text" className="input" placeholder="Last Name" />
            <input type="text" className="input" placeholder="Email" />
            <select name="departments" id>
              <option value>Select A Department</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Sport">Sport</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>
          <textarea name="Message" rows={4} placeholder="Message" defaultValue={""} />
          <button className="send-btn">Send Message</button>
        </form>
      </section>
    </div>

    <div className="container">
    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d34.455552!3d31.5088919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

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