import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import CartContextProvider from './context/CartContextProvider.tsx';
import ProductContextProvider from './context/ProductContextProvider.tsx';
import ShopProvider from './context/ShopProvider.tsx';
// import SignIn from './pages/SignInPage';
// import SignUp from './pages/SignUpPage';
// import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/signin",
//     element: <SignIn />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
// ]);

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
