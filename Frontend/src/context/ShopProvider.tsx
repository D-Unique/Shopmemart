import { ReactNode, useState } from 'react';
import ShopContext from './ShopContext';

type ShopProviderProps = {
  children: ReactNode;
};

export function ShopProvider({ children }: ShopProviderProps) {
  const [cartegorie, setCartegorie] = useState<string>('');
  const [data, setData] = useState({});
  const getCartProducts = () => {
    const baseurl = 'http://localhost:3000/api/v1/product';
    console.log(`x ${cartegorie}`);
    if (cartegorie) {
      fetch(`${baseurl}?category=${cartegorie}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.message);
        });
    } else {
      fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
          setData(data.message);
        });
    }
  };

  return (
    <ShopContext.Provider
      value={{ cartegorie, setCartegorie, getCartProducts, setData, data }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export default ShopProvider;
