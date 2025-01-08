import '../styles/components/Checkout.css';
import Minicart from './cart/Minicart';
import { X } from 'react-bootstrap-icons';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import Data from '../data';
import ProductContext from '../context/ProductContext';


function Checkout() {
  const { cartState, openCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const handleClose = () => {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflowX = 'auto';
    body.style.overflowY = 'auto';

    body.style.backgroundColor = '';
    body.style.pointerEvents = 'auto';
    const side = document.querySelector('.checkoutsidebar-open') as HTMLElement;
    side.style.overflowY = 'scroll';
    side.style.pointerEvents = 'auto';
    console.log(products);
    Data.forEach((data) => {
      console.log(data.id);
    });
    openCart(false);
  };
  return (
    <div className={cartState ? 'checkoutsidebar-open' : 'checkoutsidebar'}>
      <div id="checkout-content">
        <div className='checkout-header'>
          <h3> Your Cart </h3>
          <button onClick={() => handleClose()}>
            <X />
          </button>
        </div>
        {
        <div className='checkout-product'>
          {products?.length === 0 ? <h3 className='text-white m-5'>No Product in Cart</h3> : null}
            {products?.map((product) => {
              const foundProduct = Data.find((data) => data.id === product.id);
              return foundProduct ? <Minicart key={foundProduct.id} product={foundProduct} /> : null;
            })}
          </div>
        }
        
      </div>
    </div>
  );
}

export default Checkout;
