import { Cart } from 'react-bootstrap-icons';
import '../styles/components/Account.css';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import ProductContext from '../context/ProductContext';


import { Link } from 'react-router-dom';

function Account() {
  const { setOpenCart } = useContext(CartContext);
  const { getTotalProducts } = useContext(ProductContext);
  const totalProducts = getTotalProducts();
  const handleOpenCart = () => {
    setOpenCart(true);
  }

  return (
    <div id="account" className='d-flex m-2 justify-content-between'>
      <Link to="/signin" className="p-2">
        Sign In
      </Link>
      <Link to="/signup" className="p-2">
        Sign Up
      </Link>
      <Button className="account-cart ms-5 rounded-circle" variant="Outline-primary" onClick={() => handleOpenCart()}>
        
        <Cart className='account-cart-icon'/>
        <div className="account-cart-button rounded-circle bg-warning d-flex justify-content-center align-items-center">{ totalProducts }</div>
      </Button>
    </div>
  );
}

export default Account;
