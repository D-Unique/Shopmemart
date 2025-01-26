import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ShopProvider from './context/ShopProvider.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContextProvider from './context/CartContextProvider.tsx';
import ProductContextProvider from './context/ProductContextProvider.tsx';
import UserContextProvider from './context/UserContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <UserContextProvider>
    <ShopProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <ToastContainer />
          <App />
        </CartContextProvider>
      </ProductContextProvider>
      </ShopProvider>
    </UserContextProvider>
    
  </StrictMode>
);
