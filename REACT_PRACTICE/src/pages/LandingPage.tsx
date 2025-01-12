import Header from '../components/Header';
import Banner from '../components/Banner';
import { Footer } from '../components/Footer';
import Topcartegories from '../components/cart/Topcartegories';
import Bestdeal from '../components/cart/Bestdeal';
import Todaybest from '../components/cart/Todaybest';
import Checkout from '../components/Checkout';
import { useContext } from 'react';
import CartContext from '../context/CartContext';


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
      <Todaybest />
      <Footer />
      </div>
    </>
  );
}
export default LandPage;
