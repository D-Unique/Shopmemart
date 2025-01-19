import { Outlet } from 'react-router-dom';
import Cart from '../components/Cart';
import Header from '../components/Header';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import './2pane.css';
function TwoPane() {
  const { openCart } = useContext(CartContext);
  return (
    <div className="split-container">
      <Header />
      <main
       
      >
        <Outlet />
      </main>
     
        {
        openCart &&
        <div>
            <Cart />
          </div>
      }

    </div>
  );
}

export default TwoPane;
