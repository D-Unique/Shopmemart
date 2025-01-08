import { Cart } from 'react-bootstrap-icons';
import '../styles/components/Account.css';
<<<<<<< HEAD
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import ProductContext from '../context/ProductContext';

=======
import { Link } from 'react-router-dom';
>>>>>>> cadfd9a8bdd9aa75696115309fd685fd4908edfd

function Account() {
  const { openCart, setOverflow } = useContext(CartContext);
  const { getTotalProducts } = useContext(ProductContext);
  const totalProducts = getTotalProducts();
  const handleOpenCart = () => {
    openCart(true);
    setOverflow();

  }

  return (
    <div id="account" className='d-flex m-2 justify-content-between'>
<<<<<<< HEAD
      <a href="" className="p-2">Sign In</a>
      <a href="" className="p-2">Sign Up</a>
      <Button className="cart ms-5 p-2 rounded-circle" variant="Outline-primary" onClick={ () => handleOpenCart()}>
      <Cart className='cart-icon'/>
        <div className="cart-button rounded-circle bg-danger d-flex justify-content-center align-items-center">{ totalProducts }</div>
      </Button>
=======
      <Link to="/signin" className="p-2">
        Sign In
      </Link>
      <Link to="/signup" className="p-2">
        Sign Up
      </Link>
      <span className="cart ms-5 p-2">
        <Cart className='cart-icon'/> Cart
      </span>
>>>>>>> cadfd9a8bdd9aa75696115309fd685fd4908edfd
    </div>
  );
}

export default Account;
