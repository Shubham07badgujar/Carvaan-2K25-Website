import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './home.css';

const Home = () => {
  return (
    <Container>
      <h1 className="text-center mt-4">Welcome to CARVAAN 2K25</h1>
      <Row className="mt-5">
        <Col md={6}>
          <Card className="event-card">
            <Card.Body>
              <Card.Title>Explore Events</Card.Title>
              <Card.Text>Check out all the exciting events happening at CARVAAN 2K25!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="event-card">
            <Card.Body>
              <Card.Title>Register Now</Card.Title>
              <Card.Text>Sign up for your favorite events and get started!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
