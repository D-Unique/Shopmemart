import '../styles/pages/Products.css';
import bg from '../assets/img/shomemart-bg-cloth.jpg';
import { useEffect, useContext } from 'react';
import ShopContext from '../context/ShopContext';
// import Data from '../data';
import MacroCart from '../components/cart/Macrocart';

function Products() {
  const { getCartProductsbyCategory, productbyCategory, cartegorie} = useContext(ShopContext);
  useEffect(() => {
    getCartProductsbyCategory();
  }, []);


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
      <h1>{cartegorie}</h1>
      
      { 
        productbyCategory.length > 0 ? (
          <section className="products-list">
            <MacroCart data={productbyCategory} />
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
