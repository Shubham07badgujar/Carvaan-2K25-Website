import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './events.css';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <h1 className="text-center mt-4">All Events</h1>
      {events.map(event => (
        <Card key={event.id} className="event-card">
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Link to={`/events/${event.id}`}><Button variant="primary">View Details</Button></Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Events;
