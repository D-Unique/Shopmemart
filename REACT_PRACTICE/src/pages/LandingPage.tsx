import Header from '../components/Header';
import Banner from '../components/Banner';
import { Footer } from '../components/Footer';
import Topcartegories from '../components/cart/Topcartegories';

function LandPage() {
  return (
    <>
      <Header />
      <Banner />
      
      <Topcartegories />
      <Footer />
    </>
  );
}
export default LandPage;
