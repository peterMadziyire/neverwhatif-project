
import './App.css';
import Container from 'react-bootstrap/Container';

import neverWhatIf from '../src/neverWhatif.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEnvelope, faMinus, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="MyHeader">
        <img src={neverWhatIf}  alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     


      </header>

      <div className="container">
      <div className="row border border-1 mx-auto">
        <div className="row mx-auto">
          
          <div className="col-10  p-2 name text-primary text-start"><a>Peter Madziyire  </a><FontAwesomeIcon icon={faEnvelope} /></div>
          <div className="col-2 p-2 delete text-end"><FontAwesomeIcon icon={faTrashCan} /></div>
          
        </div> 
      <div className="row mx-auto">
        <div className="d-flex text-start align-items-center justify-content-start subject col-xs-12 col-sm-12 col-m-9 col-lg-9 col-xl-9 p-2"> 
            <div className="fs-4 fw-light text-nowrap overflow-hidden text-secondary">Subject. yubhkj jhjhhjkhd hjkh jhkhj hkjhkhj </div>
            
            <div className='ms-2'><OpenModal/></div>
            
          
        </div> 
        <div className="d-flex justify-content-end p-2 align-items-center time col-xs-12 col-sm-12 col-m-3 col-lg-3 col-xl-3"><div className="span-time"> {moment(new Date()-21).calendar() } </div></div>
      </div>
      </div>


      </div>
    </div>
  );
}

export default App;
