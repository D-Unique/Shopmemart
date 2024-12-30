//styles
import '../styles/components/Header.css';
//conponent
import Nav from './Nav';
//bootstrap

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Searchbar from './Searchbar';
import Account from './Account';
import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar sticky='top'>
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
      </Navbar>
  );
}

export default Header;
