import { Cart } from 'react-bootstrap-icons';
import '../styles/components/Account.css';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import ProductContext from '../context/ProductContext';


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
      <a href="" className="p-2">Sign In</a>
      <a href="" className="p-2">Sign Up</a>
      <Button className="cart ms-5 p-2 rounded-circle" variant="Outline-primary" onClick={ () => handleOpenCart()}>
      <Cart className='cart-icon'/>
        <div className="cart-button rounded-circle bg-danger d-flex justify-content-center align-items-center">{ totalProducts }</div>
      </Button>
    </div>
  );
}

export default Account;
