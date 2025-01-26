import '../styles/components/Cart.css';
import Minicart from './cart/Minicart';
import { X } from 'react-bootstrap-icons';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
// import Data from '../data';
import ProductContext from '../context/ProductContext';
import ShopContext from '../context/ShopContext';
import { Link } from 'react-router-dom';


function Cart() {

  const { allProducts } = useContext(ShopContext);
  const { setOpenCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const handleClose = () => {
    setOpenCart(false);
  };
  console.log(products);
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
              const foundProduct = allProducts.find((data) => data._id === product.id);
              return foundProduct ? (
                <Minicart key={foundProduct._id} product={foundProduct} />
              ) : null;
            })}

        {products?.length < 1 ? null : (
                <div className='cart-footer'>
                  <Link to={'/cart/checkout'}>
                    <button className="cart-button bg-warning p-2  ">
                      Proceed to checkout
                    </button>
                  </Link>
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
