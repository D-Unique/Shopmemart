import { useState, ReactNode } from "react";
import CartContext from './CartContext.ts';


const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [openCart, setOpenCart] = useState<boolean>(false);
    
    
    return (
        <CartContext.Provider value={{ openCart, setOpenCart}}>
            {children}
        </CartContext.Provider>
    );
};


export default CartContextProvider
