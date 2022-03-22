import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import OpenModal from '../components/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEnvelope, faMinus, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";

function Messages() {

  const [messages, setMessages]=useState([]);
  const [Loaded, setLoaded]= useState(false);

  const getMessages=()=>{

    axios.get("/mailbox").
    then((response)=>{console.log(response.data); return response.data}).
    then((data)=>setMessages(data));
  }

      //delete function
      const deleteMessage=(id)=>{

        axios.delete(`/delete/${id}`).then(()=>{
        setMessages(messages.filter((message)=> message.id!==id))

        })

    }


  useEffect(()=>{
getMessages()

  },[])

  return (
   

      <div className="container">{!messages? <div>"Loading"</div>:
     messages.map((message)=>{
       return <div key={message.id} className="row border border-1 mx-auto">
        <div className="row mx-auto">
          
          <div className="col-10  p-2 name text-primary text-start"><a>{message.name} {message.lastname}  </a><FontAwesomeIcon icon={faEnvelope} /></div>
          <div className="col-2 p-2 delete text-end"><FontAwesomeIcon className="pointer" icon={faTrashCan} onClick={()=>{deleteMessage(message.id)}}/></div>
          
        </div> 
      <div className="row mx-auto">
        <div className="d-flex text-start align-items-center justify-content-start subject col-xs-12 col-sm-12 col-m-9 col-lg-9 col-xl-9 p-2"> 
            <div className="fs-4 fw-light text-nowrap overflow-hidden text-secondary">{message.subject} </div>
            
            <div className='ms-2'><OpenModal
            name={message.name}
            lastname= {message.lastname}
            email={message.email}
            subject={message.subject}
            message={message.message}
            time= {message.time}
            setMessages={setMessages}
            messages={messages}
            id={message.id}
            /></div>
            
          
        </div> 
        <div className="d-flex justify-content-end p-2 align-items-center time col-xs-12 col-sm-12 col-m-3 col-lg-3 col-xl-3"><div className="span-time"> {moment(new Date(message.time)).calendar() } </div></div>
      </div>
      </div> }) }
      </div>


      
    
  );
}

export default Messages;
