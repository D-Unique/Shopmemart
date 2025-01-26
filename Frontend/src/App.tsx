import { RouterProvider } from 'react-router-dom';
import './styles/Media.css';
import LandPage from './pages/LandingPage';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TwoPane from './layout/2pane.tsx';
import FullLayout from './layout/FullLayout.tsx';
import UserDashBoardLayout from './layout/UserDashBoardLayout.tsx';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import Products from './pages/ProductsPage.tsx';
import CheckOutPage from './pages/CheckOutPage.tsx';
import AdminAddProduct from './pages/AdminAddProduct.tsx';
import PaymentVarify from './pages/PaymentVarify.tsx';
import UserProfile from './pages/UserProfile.tsx';
import UserDashBoard from './pages/UserDashBoard.tsx';
import UserOrders from './pages/UserOrders.tsx';
import WhatIsNew from './pages/WhatIsNew.tsx';
import NotFound from './components/ErrorConponent/NotFound.tsx'

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
    path: '/user',
    element: <UserDashBoardLayout />,
    children: [
      {
        index: true,
        element: <UserDashBoard />
      },
      {
        path: "profile",
        element: <UserProfile />
      },
      {
        path: "orders",
        element: <UserOrders />
      },
    ]

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
  {
    path: "/whatisnew",
    element: <WhatIsNew />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
