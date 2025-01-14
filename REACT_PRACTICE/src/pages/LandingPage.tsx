import Header from '../components/Header';
import Banner from '../components/Banner';
import { Footer } from '../components/Footer';
import Topcartegories from '../components/cart/Topcartegories';
import Bestdeal from '../components/cart/Bestdeal';
import Checkout from '../components/Checkout';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import BestSellers from '../components/cart/BestSellers';


function LandPage() {
  const { cartState } = useContext(CartContext);
  return (
    <>
    <Header />
    <div className={cartState ? 'landingpage is_open' : 'landingpage'}>
      <Checkout />
      <Banner />
      <Bestdeal /> 
      <Topcartegories />
      <BestSellers />
      <Footer />
      </div>
    </>
  );
}
export default LandPage;
