import { createContext } from 'react'


type ShopContextType = {
    cartegorie: string;
    setCartegorie: (cartegorie: string) => void;
    getCartProducts: () => void;
    setData: (data: any) => void;
    data: any;

}
const ShopContext = createContext({} as ShopContextType)


export default ShopContext
