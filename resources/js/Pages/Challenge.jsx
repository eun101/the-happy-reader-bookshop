import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Challenge() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <div className="container-fluid">
      <div style={{backgroundImage:"url(./reading_challenge.jpg)",backgroundSize:"cover"}}id="banner" className="row vh-100">
      <div className="col">
      <h1 className="promo-title">Join our reading<br/>challenge now</h1>
      
      <Button id="learn-more" variant="primary" onClick={handleShow}>
        Learn More <span id="learn-arrow">&#8674;</span>
      </Button> 
      </div>
      <div className="col"></div>
      </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Join our reading challenge now!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h6>Receive via email how to join the reading challenge</h6>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:"white"}}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
              <Form.Label style={{color:"white"}}>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                autoFocus
              />
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Challenge;