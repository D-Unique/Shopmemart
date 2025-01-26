import { useState } from 'react';
import ShopContext from './ShopContext';
import { DbProducts } from '../Enums';
import { ShopProviderProps } from '../Enums';


export function ShopProvider({ children }: ShopProviderProps) {
  const [allProducts, setAllProduct] = useState<DbProducts[]>([]);
  const [cartegorie, setCartegorie] = useState<string>('');
  const [productbyCategory, setProductbyCategory] = useState<DbProducts[]>([]);


  const setAllProducts = (newproducts: DbProducts[]) => {
    setAllProduct([...allProducts, ...newproducts]);
      }

  const getCartProductsbyCategory = () => {
    const baseurl = 'http://localhost:3000/api/v1/product';
    if (cartegorie) {
      fetch(`${baseurl}?category=${cartegorie}`)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('cartegory', JSON.stringify(data.productList));

          if (data.productList) {
            setAllProducts(data.productList as DbProducts[]);
            setProductbyCategory(data.productList); 
          }
          
        });
    } else {
        const storedCategory = localStorage.getItem('cartegory');
        const ldata = storedCategory ? JSON.parse(storedCategory) : null;

      if (ldata) {
        setProductbyCategory(ldata);
      } else {
        fetch(baseurl)
          .then((response) => response.json())
          .then((data) => {
            setProductbyCategory(data);
          });
      }
      
    };
  }

    return (
      <ShopContext.Provider
        value={{ cartegorie, setCartegorie, getCartProductsbyCategory, setProductbyCategory, productbyCategory, allProducts, setAllProducts }}
      >
        {children}
      </ShopContext.Provider>
    );

}

export default ShopProvider;
