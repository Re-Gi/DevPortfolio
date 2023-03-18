import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setShow(true)
  };

  return (
    <Container>
      <h1>Contact Me</h1>
      <Row>
        <Col className="contact-col">
        {show ? (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! This form isn't working!</Alert.Heading>
              <p>
                Please feel free to contact me through the provided email.
              </p>
            </Alert>
        ) : (
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control required placeholder="Jane Doe" />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" required rows={5} />
              <Form.Control.Feedback type="invalid">
                Please inlude a message.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
          )}
        </Col>
        
        <Col className="contact-col">
          <h2>Email Me</h2>
          <p className='contact-email'><a href="mailto:r.l.girndt@gmail.com">r.l.girndt@gmail.com</a></p>
        </Col>
      </Row>
    </Container>
  );
}