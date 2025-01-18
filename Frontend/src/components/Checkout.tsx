import '../styles/components/Checkout.css';
import Minicart from './cart/Minicart';
import { X } from 'react-bootstrap-icons';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import Data from '../data';
import ProductContext from '../context/ProductContext';

function Checkout() {
  const { setOpenCart } = useContext(CartContext);
  const { products, getTotalProducts } = useContext(ProductContext);
  const totalProducts = getTotalProducts();
  const handleClose = () => {
    setOpenCart(false);
  };
  return (
    <div id="checkout-content">
      <div className="checkout-header">
        <h3 style={{ color: 'white' }}> Your Cart </h3>
        <button onClick={() => handleClose()}>
          <X />
        </button>
      </div>
      {
        <>
          <div className="checkout-product">
            {products?.length === 0 ? (
              <h3 className="text-white m-5">No Product in Cart</h3>
            ) : null}
            {products?.map((product) => {
              const foundProduct = Data.find((data) => data.id === product.id);
              return foundProduct && totalProducts <= 3 ? (
                <Minicart key={foundProduct.id} product={foundProduct} />
              ) : null;
            })}
          </div>
        </>
      }

      {products?.length < 4 ? null : (
        <button className="checkout-button bg-warning p-2 rounded-pill checkout-footer">
          See products
        </button>
      )}

      {products?.length === 0 || products?.length >= 4 ? null : (
        <button className="checkout-button bg-warning p-2 checkout-footer">
          Checkout
        </button>
      )}
    </div>
  );
}

export default Checkout;
