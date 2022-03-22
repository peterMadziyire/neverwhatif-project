import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { Form, Col, Row, InputGroup, Button } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEnvelope, faMinus, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';




const ContactForm=()=>{
  const [validated, setValidated] = useState(false);

  const [name, setName]=useState("");
  const [lastName, setLastName]=useState("");
  const [email, setEmail]=useState("");
  const [subject, setSubject]=useState("");
  const [message, setMessage]=useState("");
  const [time, setTime]=useState(new Date());
  const [success, setSuccess]= useState("")
  

  const addMessage=()=>{
    axios.post("/sendmail", {
      name:name,
      lastname:lastName,
      email:email,
      subject:subject,
      message:message,
      time:time}).then((response)=>{console.log(response)
        ;}).then(()=>{sendEmail()}).catch((error) => {
        // here you will have access to error.response
        console.log(error.response)
    });
   
  }

  const sendEmail=()=>{
    axios.post("/nodemailer", {
      name:name,
      lastname:lastName,
      email:email,
      subject:subject,
      message:message,
      time:time})
    };

  

  const handleReset=()=>{
    setName("");
    setLastName("");
    setEmail("");
   setSubject("");
    setMessage("");
    setTime(new Date())

  }

  const handleName=(e)=>{

    setName(e.target.value);
    console.log(name)
  }

  const handleLastName=(e)=>{

    setLastName(e.target.value);
    console.log(lastName)
  }

  const handleEmail=(e)=>{

    setEmail(e.target.value);
    console.log(email)
  }

  const handleSubject=(e)=>{

    setSubject(e.target.value);
    console.log(subject)
  }

  const handleMessage=(e)=>{

    setMessage(e.target.value);
    console.log(message)
  }


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();
    setValidated(true);
    addMessage();

    handleReset();
    setSuccess("Message successfully sent");
    
    console.log(time)
  };

  return (
    <div className="container col-lg-8 col-m-8 col-xl-6 text-start">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            value={name}
            placeholder="First name"
            onChange={handleName}
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            value={lastName}
            placeholder="Last name"
            onChange={handleLastName}
           
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Form.Group>
     
      </Row>
     
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Subject</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Subject" 
          value={subject}
          onChange={handleSubject}
          required />
          {/* <Form.Control.Feedback type="invalid">
            Please Insert Subject
          </Form.Control.Feedback> */}
        </Form.Group>
        </Row>


      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    placeholder="name@example.com" 
    value={email} 
    required
    onChange={handleEmail}/>
    {/* <Form.Control.Feedback type="invalid">
            Please enter your email address
          </Form.Control.Feedback> */}
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control 
    as="textarea" 
    rows={3} 
    value={message}
    required 
    onChange={handleMessage}/>
    {/* <Form.Control.Feedback type="invalid">
            Please write your message
          </Form.Control.Feedback> */}
  </Form.Group>

      </Row>
      <Form.Group className="mb-3">
      {success}
      </Form.Group>
      {!name||!lastName||!email||!message||!subject?<Button type="submit" disabled>Submit form</Button>:<Button type="submit">Submit form</Button>}
      
    </Form></div>
  );
}




export default ContactForm;
