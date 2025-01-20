import { ReactNode, useState } from 'react';
import ShopContext from './ShopContext';

type ShopProviderProps = {
  children: ReactNode;
};

export function ShopProvider({ children }: ShopProviderProps) {
  const [cartegorie, setCartegorie] = useState<string>('');
  const [data, setData] = useState<string>();

  const getCartProducts = () => {
    const baseurl = 'http://localhost:3000/api/v1/product';
    if (cartegorie) {
      fetch(`${baseurl}?category=${cartegorie}`)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('cartegory', data.message);
          setData(data.message);
        });
    } else {
      const ldata = localStorage.getItem('cartegory');
      if (ldata) {
        setData(ldata);
      } else {
        fetch(baseurl)
          .then((response) => response.json())
          .then((data) => {
            setData(data.message);
          });
      }
      
    };
  }

    return (
      <ShopContext.Provider
        value={{ cartegorie, setCartegorie, getCartProducts, setData, data }}
      >
        {children}
      </ShopContext.Provider>
    );

}

export default ShopProvider;
