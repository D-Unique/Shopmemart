import "../styles/components/footer.css";
import RotatingCircles from "../components/RotatingCircles";

export function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footer-head"> 
        </div>
        <div>
          <div className="footer-grid">
            <div className="shopmemart-experience">
              <h1>Transform Your Shopping Experience!</h1>
              <p>
                At Shopmemart, we bring you the best in convenience, quality,
                and affordability. Discover a wide range of products that suitg
                your lifestyle, and enjoy seamless shopping from the comfort
                of your home.
              </p>
              <RotatingCircles />
              <p>
                Your satisfaction is our priority, and we're here to make your
                life simpler, smarter, and better.
              </p>
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
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-grid1">
            <div className="class-head-item-div">
              <div className="class-head">About Us</div>
              <div>Mission</div>
              <div>Team</div>
              <div>Latest News</div>
            </div>
            <div className="class-head-item-div">
              <div className="class-head">Support</div>
              <div>Contact</div>
              <div>Refund Policy</div>
              <div>FAQ's</div>
            </div>
            <div className="class-head-item-div">
              <div className="class-head">Social</div>
              <div>X</div>
              <div>Instagram</div>
              <div>LinkedIn</div>
            </div>
          </div>
          <div className="footer-grid2">
            <div>copyright &copy; Shopmemart</div>
            <div>Terms of Service</div>
            <div className="back-to-top">
              <a
                href="#"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Back to Top
                <img
                  className="back-to-top-image"
                  src="/back-to-top.png"
                  alt="Back To Top"
                />
              </a>
            </div>
          </div>
        </div>
      </div> 
    </footer>
  );
}
