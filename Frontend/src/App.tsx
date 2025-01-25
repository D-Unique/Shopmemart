import { RouterProvider } from 'react-router-dom';
import './styles/Media.css';
import LandPage from './pages/LandingPage';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TwoPane from './layout/2pane.tsx';
import FullLayout from './layout/FullLayout.tsx';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import Products from './pages/ProductsPage.tsx';
import CheckOutPage from './pages/CheckOutPage.tsx';
import AdminAddProduct from './pages/AdminAddProduct.tsx';
import PaymentVarify from './pages/PaymentVarify.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TwoPane />,
    children: [
      {
        index: true,
        element: <LandPage />
      },
      {
        path: '/products',
        element: <Products />
      }
    ],
  },
  {
    path: '/cart',
    element: <FullLayout />,
    children: [
      {
        path: "checkout",
        element: <CheckOutPage />
      },
      {
        path: "verify",
        element: <PaymentVarify />,
      }
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/admin",
    element: <AdminAddProduct />,
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
