import Banner from '../components/Banner';
import { Footer } from '../components/Footer';
import Topcartegories from '../components/cart/Topcartegories';
import Bestdeal from '../components/cart/Bestdeal';
import BestSellers from '../components/cart/BestSellers';


function LandPage() {
  return (
    <>
    <div id='landingpage'>
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
