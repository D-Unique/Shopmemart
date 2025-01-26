import '../../styles/components/cart/topcart.css';
import MacroCart from './Macrocart';
import { useEffect, useState, useContext } from 'react';
import { DbProducts } from '../../Enums';
import ShopContext from '../../context/ShopContext';




const Bestdeal = () => {
  const {setAllProducts, allProducts} = useContext(ShopContext);
  
  const [randomProducts, setRandomProducts] = useState<DbProducts[]>();
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:3000/api/v1/product/getRandomProducts', {
        method: 'GET',
      });
      const data = await response.json();
      setRandomProducts(data);
      setAllProducts(data);
      localStorage.removeItem('allProducts');
      localStorage.setItem('allProducts', JSON.stringify(data));

    };
    getProducts();
  }, []);

   const storedRandomProduct = localStorage.getItem('allProducts');
   const localStorageRandomProduct = storedRandomProduct ? JSON.parse(storedRandomProduct) : null;

  console.log(`allproduct ${allProducts.length}`);
 
  return (
    <>
      <div id="best-deal-div" className='best-deal-div'>
        <h3 className='category-title'>Todays Best Deals for you!</h3>
        <div className='bestdeal'>
          { randomProducts ? <MacroCart data={randomProducts} />: <MacroCart data={localStorageRandomProduct} />}
        </div>
      </div>
    </>
  );
}

export default Bestdeal;
