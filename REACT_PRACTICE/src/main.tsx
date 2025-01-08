import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CartContextProvider from './context/CartContextProvider.tsx'
import ProductContextProvider from './context/ProductContextProvider.tsx'
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductContextProvider>
    <CartContextProvider>
    <RouterProvider router={router}>
      
      </RouterProvider>
  </CartContextProvider>
  </ProductContextProvider>
  </StrictMode>,
)
