import '../styles/components/Cart.css';
import Minicart from './cart/Minicart';
import { X } from 'react-bootstrap-icons';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import Data from '../data';
import ProductContext from '../context/ProductContext';

function Cart() {
  const { setOpenCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const handleClose = () => {
    setOpenCart(false);
  };
  return (
    <section className='cart-wrapper'>
    <div id="cart-content">
      <div className="cart-header">
        <h3 style={{ color: 'white' }}> Your Cart </h3>
        <button onClick={() => handleClose()}>
          <X />
        </button>
      </div>
      {
        <section className='cart-c'>
          <div className="cart-product">
            {products?.length === 0 ? (
              <h3 className="text-white m-5">No Product in Cart</h3>
            ) : null}
            {products?.map((product) => {
              const foundProduct = Data.find((data) => data.id === product.id);
              return foundProduct ? (
                <Minicart key={foundProduct.id} product={foundProduct} />
              ) : null;
            })}

        {products?.length < 1 ? null : (
                <div className='cart-footer'>
                  <button className="cart-button bg-warning p-2 rounded-pill ">
                  Checkout
                </button>
                </div>
              )}
          </div>
        </section>
      }
      </div>
      </section>
  );
}

export default Cart;
