import '../styles/pages/Products.css';
import bg from '../assets/img/shomemart-bg-cloth.jpg';
import { useEffect, useContext } from 'react';
import ShopContext from '../context/ShopContext';

function Products() {
  const { cartegorie, getCartProducts, data } = useContext(ShopContext);
  useEffect(() => {
    getCartProducts();
  }, [cartegorie, getCartProducts]);

  return (
    <div
      className="products"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <h1>Products</h1>
      {<p>{`${data}`}</p>}
    </div>
  );
}

export default Products;
