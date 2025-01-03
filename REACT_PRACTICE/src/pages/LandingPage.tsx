import Header from '../components/Header';
import Banner from '../components/Banner';
import { Footer } from '../components/Footer';
import Topcartegories from '../components/cart/Topcartegories';
import Bestdeal from '../components/cart/Bestdeal';

function LandPage() {
  return (
    <>
      <Header />
      <Banner />
      <Bestdeal />
      <Topcartegories />
      <Footer />
    </>
  );
}
export default LandPage;
