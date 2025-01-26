import Banner from '../components/Banner';
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
      </div>
    </>
  );
}
export default LandPage;
