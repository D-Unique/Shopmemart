import { Outlet } from 'react-router-dom';
import Checkout from '../components/Checkout';
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
        className={
          openCart ? 'split-left customleft-translate-middle-x' : 'split-left'
        }
      >
        <Outlet />
      </main>
      <div
        className={openCart ? 'customright-translate-middle-x' : 'split-right'}
      >
        <Checkout />
      </div>
    </div>
  );
}

export default TwoPane;
