
import './App.css';
import Container from 'react-bootstrap/Container';
import OpenModal from './components/modal';
import neverWhatIf from '../src/neverWhatif.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEnvelope, faMinus, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import {Route, BrowserRouter as Router, Routes, Link, Outlet} from "react-router-dom";
import Messages from './pages/Messages2';
import ContactForm from './pages/ContactForm';

function App() {
  return (
   
    <div className="App">
      <header className="MyHeader my-3">
        <img src={neverWhatIf}  alt="logo" />
      </header>
    

<div className="btn-group mb-2" role="group" aria-label="Basic outlined example">
  <ContactForm/>
  
  {/* <Link className="text-decoration-none text-decoration-none btn btn-outline-secondary" to="/Messages">Messages</Link> */}
</div>

      
      {/* <Route path="/messages" element={<Messages/>}></Route> */}
     
      
    </div>
  );
}

export default App;