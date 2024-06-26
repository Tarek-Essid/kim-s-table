import React from 'react';
import Form from 'react-bootstrap/Form';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact us</h1>
      <br />
      <div className="inputs">
        <div className="input1">
          <Form.Label className="names">Name :</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
          <br />
          <Form.Label className="names">Last name :</Form.Label>
          <Form.Control type="text" placeholder="last Name" />
        </div>
        <div className="input2">
          <Form.Label className="names">Email :</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <br />
          <Form.Label className="names"> Phone :</Form.Label>
          <Form.Control type="tel" placeholder="Phone" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
