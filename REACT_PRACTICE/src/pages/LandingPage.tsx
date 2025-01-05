import Header from '../components/Header';
import Banner from '../components/Banner';
import { Footer } from '../components/Footer';
import Topcartegories from '../components/cart/Topcartegories';
import Bestdeal from '../components/cart/Bestdeal';
import Todaybest from '../components/cart/Todaybest';

function LandPage() {
  return (
    <>
      <Header />
      <Banner />
      <Bestdeal /> 
      <Topcartegories />
      <Todaybest />
      <Footer />
    </>
  );
}
export default LandPage;
