import Header from '../components/Header';
import Banner from '../components/Banner';
import Container from 'react-bootstrap/Container';

function LandPage() {
  return (
    <>
      <Header />
      <Banner />
      <Container id="body" className="my-5">
        Shopmemart
      </Container>
    </>
  );
}
export default LandPage;
