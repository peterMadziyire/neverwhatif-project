import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import moment from 'moment';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import axios from 'axios';


export default function OpenModal({name,lastname,email,subject,message,time,setMessages, messages, id}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true); console.log("clicked")};
    

     //delete function
     const modalDelete=(id)=>{
      axios.delete(`/delete${id}`).then(()=>{
        setMessages(messages.filter((message)=> message.id!==id))
      handleClose();
      })

  }
  
    return (
      <>
        <Button variant="outline-secondary" onClick={handleShow}>
          Open
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <div className="col-6">Subject</div>
          <Modal.Header closeButton>
             
                  
                  <Modal.Title>{subject}</Modal.Title>
             
            
          </Modal.Header>
          <div>From: {email}</div>
          <Modal.Body>{message}</Modal.Body>
          <div>{moment(new Date(time)).calendar()}</div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={()=>{modalDelete(id)}}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  

 