import React from 'react';
type CartContextType = {
    openCart: boolean
    setOpenCart: (openCart: boolean) => void
    setOverflow: () => void
}
const CartContext = React.createContext({} as CartContextType);

export default CartContext;
