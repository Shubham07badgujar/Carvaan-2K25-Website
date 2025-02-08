import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import './registration.css';

const Registration = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering for event:', id, formData);
  };

  return (
    <Container>
      <h1 className="text-center">Register for Event</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="success">Register</Button>
      </Form>
    </Container>
  );
};

export default Registration;
