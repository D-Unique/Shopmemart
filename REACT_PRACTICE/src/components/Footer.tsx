import { NavLink } from 'react-router-dom';
import '../styles/components/footer.css'
export function Footer() {
  return (
    <footer>

        <div className='footer-row'>
          <div className='footer-grid1'>
            <div className='class-head-item-div'>
              <div className='class-head'>About Us</div>
              <div>Mission</div>
              <div>Team</div>
              <div>Latest News</div>
            </div>
            <div className='class-head-item-div'>
                <div className='class-head'>Support</div>
                <div><NavLink to='/contact'> Contact </NavLink></div>
                <div>Refund Policy</div>
                <div>FAQ's</div>
            </div>
            <div className='class-head-item-div'>
              <div className='class-head'>Social</div>
              <div>X</div>
              <div>Instagram</div>
              <div>LinkedIn</div>
            </div>
          </div>
          <div className='footer-grid2'>
            <div>copyright &copy; Shopmemart</div>
            <div>Terms of Service</div>
            <div className='back-to-top'>
              <a href="#" onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }}>Back to Top<img className='back-to-top-image' src="/back-to-top.png" alt="Back To Top" /></a>
            </div>
          </div>
        </div>
  
  </footer>
  );
}
