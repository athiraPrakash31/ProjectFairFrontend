import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddProject() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className='btn btn-dark m-5' onClick={handleShow}>Add</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 mt-4 p-5">
            <label>
          <input type="file" style={{display:'none'}} />
          <img width={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHh4Nu4IGjp6Pd5FQMBiLiUatyZyUyvNu8_3OBHUYlQ&s" alt="" />
        </label>
            </div>
            <div className="col-6">
              <input type="text" placeholder='Project title' className='form-control mb-3' />
              <input type="text" placeholder='Languages Used' className='form-control mb-3' />
              <input type="text" placeholder='Gt hub link' className='form-control mb-3' />
              <input type="text" placeholder='Live link' className='form-control mb-3' />
              <input type="text" placeholder='Overview' className='form-control mb-3' />

            </div>
          </div>


        


        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button size='sm' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button size='sm' variant="light">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject