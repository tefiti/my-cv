import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './home.css';

function Home() {
    return (
      <div className="home">
        <Container>
        <Row>
        <Col>
        <div className="myNameTitle">
          <h1 className="myTitle">Hi,I'm Oana</h1>
        </div>
        </Col>
        </Row>
        <div className="quotation">
          <q>Allow passion to become your purpose, and it will one day become your profession.</q>
          <p>Gabrielle Bernstein</p>
        </div>
        </Container>
      </div>
    );
}

export default Home;