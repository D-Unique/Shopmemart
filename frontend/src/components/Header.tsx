import React from 'react';
//conponent
import Nav from './Nav';
//bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <Container fluid>
      <Row>
        <Col>sm=true</Col>
        <Col xs={6}>sm=8</Col>
                <Col >{Nav()}</Col>
      </Row>
    </Container>
    );
}

export default Header;
