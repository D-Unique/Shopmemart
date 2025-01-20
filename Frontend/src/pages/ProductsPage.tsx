import '../styles/pages/Products.css';
import bg from '../assets/img/shomemart-bg-cloth.jpg';
import { useEffect, useContext } from 'react';
import ShopContext from '../context/ShopContext';
import Data from '../data';
import MacroCart from '../components/cart/Macrocart';

function Products() {
  const { getCartProducts, data } = useContext(ShopContext);
  useEffect(() => {
    getCartProducts();
  }, );

  const foundcart = Data.filter((product) => product.category === data);

  return (
    <div
      className="products-body"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >{}
      <h1>{data}</h1>
      
      { 
        foundcart.length > 0 ? (
          <section className="products-list">
            <MacroCart data={foundcart} />
          </section>
        )
      : (
        <p>No product found</p>
      )
      }
    </div>
  );
}

export default Products;
