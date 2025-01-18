import React from 'react';
type CartContextType = {
    openCart: boolean
    setOpenCart: (openCart: boolean) => void
}
const CartContext = React.createContext({} as CartContextType);

export default CartContext;
