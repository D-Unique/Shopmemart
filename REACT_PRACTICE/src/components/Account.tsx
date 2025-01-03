import { Cart } from 'react-bootstrap-icons';
import '../styles/components/Account.css';

function Account() {
  return (
    <div id="account" className='d-flex m-2 justify-content-between'>
      <a href="" className="p-2">Sign In</a>
      <a href="" className="p-2">Sign Up</a>
      <span className="cart ms-5 p-2">
        <Cart className='cart-icon'/> Cart
      </span>
    </div>
  );
}

export default Account;