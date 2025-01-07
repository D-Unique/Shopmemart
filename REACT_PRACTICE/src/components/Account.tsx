import { Cart } from 'react-bootstrap-icons';
import '../styles/components/Account.css';
import { Link } from 'react-router-dom';

function Account() {
  return (
    <div id="account" className='d-flex m-2 justify-content-between'>
      <Link to="/signin" className="p-2">
        Sign In
      </Link>
      <Link to="/signup" className="p-2">
        Sign Up
      </Link>
      <span className="cart ms-5 p-2">
        <Cart className='cart-icon'/> Cart
      </span>
    </div>
  );
}

export default Account;