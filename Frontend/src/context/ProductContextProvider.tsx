import ProductContext from './ProductContext.ts';
import { useState} from 'react';
import { ProductProviderProps , Product} from '../Enums.ts';


function ProductContextProvider({ children }: ProductProviderProps ) {
  const [products, setproduct] = useState<Product[]>([]);
  

  function getCartProductsFromLocalstorage() {
    const storedProducts = localStorage.getItem('cartproducts');
    const ldata = storedProducts ? JSON.parse(storedProducts) : null;
    if (ldata) {
      setproduct(ldata)
    }
    return
  }

  function getProductQuantity(id: number) {
    const Quantity = products.find((product) => product.id === id)?.quantity;
    if (Quantity === undefined) {
      return 0;
    }
    return Quantity;
  }

  function addOneProduct(id: number) {
    const productquantity = getProductQuantity(id);
    if (productquantity === 0) {
      setproduct([...products, { id: id, quantity: 1 }]);
      localStorage.removeItem('cartproducts');
      localStorage.setItem('cartproducts', JSON.stringify([...products, { id: id, quantity: 1 }]));
    } else {
      setproduct(
        products.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : { ...product }
        )
      );
       localStorage.removeItem('cartproducts');
       localStorage.setItem('cartproducts', JSON.stringify(products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : { ...product }
      )));
    }
  }

  const deleteProduct = (id: number) => {
    setproduct(products.filter((product) => {
      return product.id !== id;
    }));
    localStorage.removeItem('cartproducts');
    localStorage.setItem('cartproducts', JSON.stringify(products.filter((product) => {
      return product.id !== id;
    }))
    );
  };

  const removeOneProduct = (id: number) => {
    const productquantity = getProductQuantity(id);
    if (productquantity === 1) {
      deleteProduct(id);
    } else {
      setproduct(
        products.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : { ...product }
        )
      );
      localStorage.removeItem('cartproducts');
      localStorage.setItem('cartproducts', JSON.stringify(products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : { ...product }
      )));
    }
  };

  const getTotalProducts = () => {
    if (products.length === 0) {
      return 0;
    }
    return products.length;
  };

  const getTotalCost = () => {
    return products.reduce((total) => {
      return total;
    }, 0);
  };



  return (
    <ProductContext.Provider
      value={{
        getTotalProducts,
        addOneProduct,
        removeOneProduct,
        deleteProduct,
        getTotalCost,
        getProductQuantity,
        products,
        getCartProductsFromLocalstorage
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
