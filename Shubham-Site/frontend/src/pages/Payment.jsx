import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./payment.css";


const Payment = () => {
  const [paymentData, setPaymentData] = useState({ name: "", email: "", amount: "" });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    alert(`Processing payment of ₹${paymentData.amount} for ${paymentData.name}`);
  };

  return (
    <Container className="payment-container">
      <h1 className="text-center">Event Payment</h1>
      <Form onSubmit={handlePayment}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" name="amount" onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="success">Pay Now</Button>
      </Form>
    </Container>
  );
};

export default Payment;
