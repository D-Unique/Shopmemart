import { createContext } from 'react'


type ShopContextType = {
    cartegorie: string;
    setCartegorie: (cartegorie: string) => void;
    getCartProducts: () => void;
    setData: (data: string) => void;
    data: string;

}
const ShopContext = createContext({} as ShopContextType)


export default ShopContext
