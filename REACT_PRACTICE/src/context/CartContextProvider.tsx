import { useState, ReactNode } from "react";
import CartContext from './CartContext.ts';


const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cartState, openCart] = useState<boolean>(true);
    function setOverflow() {
        const body = document.querySelector('body') as HTMLElement;
        body.style.pointerEvents = 'none';
        const side = document.querySelector('.checkoutsidebar-open') as HTMLElement;
        side.style.overflowY = 'scroll';
        side.style.pointerEvents = 'auto';
    }
    return (
        <CartContext.Provider value={{ cartState, openCart, setOverflow }}>
            {children}
        </CartContext.Provider>
    );
};


export default CartContextProvider
