// This context is used to manage the products in the cart.
import React from 'react';
import { ProductContexType } from '../Enums';

const ProductContext = React.createContext({} as ProductContexType);

export default ProductContext;
