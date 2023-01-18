import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import JoinBanner from '@/Components/JoinBanner';

function Challenge() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <div className="container-fluid">
        <div>
            </div>
            </div>
       <JoinBanner/>
       <Button id="learn-more" variant="primary" className='mx-auto' onClick={handleShow}>
        Learn More <span id="learn-arrow">&#8674;</span>
      </Button> 

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