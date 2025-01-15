//styles
import '../styles/components/Header.css';
//conponent
import Nav from './Nav';
import "../styles/components/Nav.css";
//bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Searchbar from './Searchbar';
import Account from './Account';
import { Navbar } from 'react-bootstrap';


function Header() {
  return (
    <Navbar sticky='top' style={{ padding: '0', margin: '0', position: 'sticky', top: '0', zIndex: 1000 }}>
      <div id="header">
        <Row className='no-padding'>
          <Col className="text-dark" xs={6}>
            <Nav />
          </Col>
          <Col xs={3} className="text-dark d-flex justify-content-center align-items-center no-padding">
            <Searchbar />
          </Col>
          <Col xs={3} className="text-dark d-flex justify-content-center align-items-center no-padding">
            <Account />
          </Col>
        </Row>
      </div>
    </Navbar>
  );
}

export default Header;
