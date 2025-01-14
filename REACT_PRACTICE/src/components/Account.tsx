import { Cart } from 'react-bootstrap-icons';
import '../styles/components/Account.css';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import ProductContext from '../context/ProductContext';

import { Link } from 'react-router-dom';

function Account() {
  const { setOpenCart, setOverflow } = useContext(CartContext);
  const { getTotalProducts } = useContext(ProductContext);
  const totalProducts = getTotalProducts();
  const handleOpenCart = () => {
    setOpenCart(true);
    setOverflow();

  }

  return (
    <div id="account" className='d-flex m-2 justify-content-between'>
      <Link to="/signin" className="p-2">
        Sign In
      </Link>
      <Link to="/signup" className="p-2">
        Sign Up
      </Link>
      <Button className="cart ms-5 rounded-circle" variant="Outline-primary" onClick={ () => handleOpenCart()}>
        <Cart className='cart-icon'/>
        <div className="cart-button rounded-circle bg-danger d-flex justify-content-center align-items-center">{ totalProducts }</div>
      </Button>
    </div>
  );
}

export default Account;
