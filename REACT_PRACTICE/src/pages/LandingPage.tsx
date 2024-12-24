import Header from '../components/Header';
import Banner from '../components/Banner';
import Container from 'react-bootstrap/Container';
import { Footer } from '../components/Footer';

function LandPage() {
  return (
    <>
      <Header />
      <Banner />
      <Container id="body" className="my-5">
        Shopmemart
      </Container>
      <Footer />
    </>
  );
}
export default LandPage;
