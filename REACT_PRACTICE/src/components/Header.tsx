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
    <Navbar sticky='top' style={{ padding: '0', margin: '0' }}>
      <div id="header">
        <Row>
          <Col className="text-dark" xs={6}>
            <Nav />
          </Col>
          <Col className="px-5 text-dark">
            <Searchbar />
          </Col>
          <Col className="text-dark">
            <Account />
          </Col>
        </Row>
      </div>
    </Navbar>
  );
}

export default Header;
