import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import CartContextProvider from './context/CartContextProvider.tsx';
import ProductContextProvider from './context/ProductContextProvider.tsx';
import ShopProvider from './context/ShopProvider.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
  
    <ShopProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <ToastContainer />
          <App />
        </CartContextProvider>
      </ProductContextProvider>
      </ShopProvider>
    
  </StrictMode>
);
