import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact.css';
import Card from 'react-bootstrap/Card';
import ContactImage from '../images/alvaro-serrano-hjwKMkehBco-unsplash.jpg';


function Contact() {
    return (
      <Container>
      <div className="contact">
        <Row noGutters>
        <Col  s={{ span: 10, offset: 1}} md={{ span: 8, offset: 2}}>
        {/* <div className="contactPicture">
        </div>
        <div className="contactInfo">
          <h2 className="titleContact">Contact</h2>
          <p className="contactInfoP">Feel free to contact me anytime. If you have questions or feedback or just want to have a nice chat, I'll be happy to respond!</p>
          <p className="contactInfoP">You can always reach out to me on <a href="https://linkedin.com/in/oana-fuia-04741428" target="blank">LinkedIn</a>, <a href="https://github.com/tefiti" target="blank">Github</a>, or send me an email to: <a href="mailto:oanamarinica@yahoo.com" target="blank">oanamarinica@yahoo.com</a></p>
        </div> */}
        <Card>
  <Card.Img variant="top" src={ContactImage} />
  <Card.Body>
    <Card.Title>Contact</Card.Title>
    <Card.Text>
    <p className="contactInfoP">Feel free to contact me anytime. If you have questions or feedback or just want to have a nice chat, I'll be happy to respond!</p>
    <p className="contactInfoP">You can always reach out to me on <a href="https://linkedin.com/in/oana-fuia-04741428" target="blank">LinkedIn</a>, <a href="https://github.com/tefiti" target="blank">Github</a>, or send me an email to: <a href="mailto:oanamarinica@yahoo.com" target="blank">oanamarinica@yahoo.com</a></p>
    </Card.Text>
    
  </Card.Body>
</Card>
        </Col>
        </Row>
      </div>
      </Container>
      
    );
}

export default Contact;