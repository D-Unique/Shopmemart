import ProductContext from './ProductContext.ts';
import { useState, useEffect, ReactNode } from 'react';


type ProductContextType = {
  children: ReactNode;
};
type Product = {
  id: number;
  quantity: number;
};

function ProductContextProvider({ children }: ProductContextType) {
  const [products, setproduct] = useState<Product[]>([]);
  

  // function useGetproduct() {
  //   const [change, setchange] = useState(products);
  //   useEffect(() => {
  //     const data = localStorage.getItem('products');
  //     if (data) {
  //       setproduct(JSON.parse(data));
  //       products.map((product) => {
  //         return product;
  //       });
  //     }
  //     return;
  //   }, [change]);

  //   useEffect(() => {
  //     localStorage.setItem('products', JSON.stringify(products));
  //   }, [change]);
  // }

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
    } else {
      setproduct(
        products.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : { ...product }
        )
      );
    }
  }

  const deleteProduct = (id: number) => {
    setproduct(products.filter((product) => {
      return product.id !== id;
    }));
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

  //   const contextValue = {
  //     products,
  //     getProductQuantity,
  //     getTotalProducts,
  //     addOneProduct,
  //     removeOneProduct,
  //     deleteProduct,
  //     getTotalCost,
  //   };

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
