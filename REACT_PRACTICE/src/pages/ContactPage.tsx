import { Footer } from '../components/Footer';
import '../styles/page/contactpage.css';
import RotatingCircles from '../components/RotatingCircles';
import Header from '../components/Header';
function ContactPage() {
  return (
      <div>
          <Header />
      <div>
        <div className="image-div">
          <img src="/footer-image.jpg" alt="Footer Image" />
        </div>
        <div className="inner-footer2">
          <div className="footer-grid">
            <div className="shopmemart-experience">
              <h1>Transform Your Shopping Experience!</h1>
              <p>
                At Shopmemart, we bring you the best in convenience, quality,
                and affordability. Discover a wide range of products that suit
                your lifestyle, and enjoy seamless shopping from the comfort of
                your home.
              </p>
              <RotatingCircles />
              <p>
                Your satisfaction is our priority, and we're here to make your
                life simpler, smarter, and better.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form-div">
        <h1>Contact Us</h1>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="e-mail">Email</label>
          <input type="email" id="e-mail" />

          <label htmlFor="textarea">Message</label>
          <textarea id="textarea" />

          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
