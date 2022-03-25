
import './App.css';
import Container from 'react-bootstrap/Container';
import OpenModal from './components/modal';
import neverWhatIf from '../src/neverWhatif.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEnvelope, faMinus, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import {Route, BrowserRouter as Router, Routes, Link, Outlet} from "react-router-dom";
import Messages from './pages/Messages';
import ContactForm from './pages/ContactForm';

function App() {
  return (
      <Router>
    <div className="App">
      <header className="MyHeader my-3">
        <img src={neverWhatIf}  alt="logo" />
      </header>
      {/* <nav class="nav">
      <ul class="nav justify-content-center">
  <li class="nav-item">
  <Link to="/">Home</Link>
  </li>
  <li class="nav-item">
  <Link to="/form">Form</Link>
  </li>
 
</ul>
</nav> */}

<div className="btn-group mb-2" role="group" aria-label="Basic outlined example">
  <Link className="text-decoration-none btn btn-outline-secondary" to="/">Form</Link>
  <Link className="text-decoration-none text-decoration-none btn btn-outline-secondary" to="/Messages">Messages</Link>
</div>

      <Outlet />
      <Routes>
      <Route path="/" element={<ContactForm/>}></Route>
      <Route path="/messages" element={<Messages/>}></Route>
      </Routes>
      
    </div></Router>
  );
}

export default App;