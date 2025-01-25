import { ReactNode } from 'react';

export type ShopProviderProps = {
  children: ReactNode;
};

export type ShopContextType = {
  cartegorie: string;
  setCartegorie: (cartegorie: string) => void;
  getCartProductsbyCategory: () => void;
  setProductbyCategory: (data: DbProducts[]) => void;
  productbyCategory: DbProducts[];
  allProducts: DbProducts[];
  setAllProducts: (products: DbProducts[]) => void;

}

export type ProductProviderProps = {
  children: ReactNode;
};

export type ProductContexType = {
  getTotalProducts: () => number;
  addOneProduct: (id: number) => void;
  removeOneProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
  getTotalCost: () => void;
  getProductQuantity: (id: number) => number;
  products: Product[];
  getCartProductsFromLocalstorage: () => DbProducts[] | null;
};

export type Product = {
id: number;
  quantity: number;
};

export type CartContextType = {
    openCart: boolean
    setOpenCart: (openCart: boolean) => void
}

export type DbProducts= {
  _id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  countInStock: number;
  rating: number;
  outofStock: boolean;
  category: string;
  
};
