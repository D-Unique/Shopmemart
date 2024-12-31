import { Col, Row } from 'react-bootstrap';
import { books, handbags, snicker, tech, top, travel } from '../../assets';
import '../../styles/components/cart/topcart.css';

interface topcart {
  name: string;
  image: string;
}

function Topcartegories(): JSX.Element {
  const topCategories: topcart[] = [
    {
      name: 'Funiture',
      image: top,
    },
    {
      name: 'Hand Bags',
      image: handbags,
    },
    {
      name: 'Books',
      image: books,
    },
    {
      name: 'Tech',
      image: tech,
    },
    {
      name: 'Sneakers',
      image: snicker,
    },
    {
      name: 'Travel',
      image: travel,
    },
  ];
  return (
    <section>
      <h2
        style={{
          lineHeight: '40px',
          fontSize: '28px',
          fontWeight: '700',
          color: '#231f1e',
          margin: '100px 0 10px 40px',
        }}
      >
        Shop Our Top Categories
      </h2>
      <Row
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '9px',
          justifyContent: 'space-between',
          margin: '40px 20px 40px 0',
          padding: '0 40px',
        }}
      >
        {topCategories.map((cartgories: topcart) => (
          <Col
            className="topcart"
            style={{
              backgroundImage: `url(${cartgories.image})`,
              height: '250px',
              maxWidth: '200px',
              minWidth: '200px',
              backgroundSize: 'cover',
              borderRadius: '10px',
            }}
          >
            <h3
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '35px',
                fontWeight: '500',
                marginTop: '25px',
              }}
            >
              {cartgories.name}
            </h3>
          </Col>
        ))}
      </Row>
    </section>
  );
}
export default Topcartegories;
