import React from 'react'
import Card from 'react-bootstrap/Card';
import Coder from '../assets/coder.jpg'
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <Card style={{ width: '22rem' }} onClick={handleShow}>
      <Card.Img variant="top" src={Coder} width={'100%'} height={'300px'} />
      <Card.Body>
        <Card.Title className='text-center'>Project Title</Card.Title>
      </Card.Body>
    </Card>

    {/* modal  */}

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <img src={Coder} alt="" width={'100%'} />
            </div>
            <div className="col-6 text-center">
              <h2>Project Title</h2>
              <p style={{textAlign:'justify'}}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita ab itaque perferendis velit neque at nostrum earum doloremque, architecto ex. Eum dignissimos, modi non saepe pariatur delectus culpa rem.</p>
              <p>Technology Used : <b>React, Node</b></p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-evenly">
          <Nav variant="underline" >
     
      <Nav.Item>
        <Nav.Link eventKey="link-1"><BsGithub size='25px' /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"><FaLink size='25px'/></Nav.Link>
      </Nav.Item>
    </Nav>

          <Button size='sm' variant="secondary" className='ms-2 m-2'style={{height:'30px'}} onClick={handleClose}>
            Close
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard