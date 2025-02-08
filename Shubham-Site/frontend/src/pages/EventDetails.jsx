import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import './eventDetails.css';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/events/${id}`)
      .then(res => setEvent(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!event) return <h1>Loading...</h1>;

  return (
    <Container>
      <Card className="event-detail-card">
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Button href={`/register/${event.id}`} variant="success">Register Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventDetails;
