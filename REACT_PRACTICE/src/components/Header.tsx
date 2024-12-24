//styles
import '../styles/components/Header.css';
//conponent
import Nav from './Nav';
//bootstrap

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Searchbar from './Searchbar';
import Account from './Account';

function Header() {
  return (
    <div id="header">
      <Row>
        <Col xs={6} className="text-dark">
          <Nav />
        </Col>
        <Col xs={4} className="px-5 text-dark">
          <Searchbar />
        </Col>
        <Col xs={2} className="text-dark">
          <Account />
        </Col>
      </Row>
    </div>
  );
}

export default Header;
