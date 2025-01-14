import React from 'react';

interface Product {
 id: number;
 quantity: number;
}

type Productcontex = {
  getTotalProducts: () => number;
  addOneProduct: (id: number) => void;
  removeOneProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
  getTotalCost: () => void;
  getProductQuantity: (id: number) => number
  products: Product[];
};
const ProductContext = React.createContext({} as Productcontex);

export default ProductContext;
