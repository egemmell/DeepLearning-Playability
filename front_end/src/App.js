import {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Images from "./Images"
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import ModalManager from "./components/ModalManager";
import Navbar from "./components/Navbar";
import logo from "./images/ubc_logo.jpg";
import "./css/App.css";
require('dotenv').config({path: '../.env'});


function App() {

  // const [view, setView] = useState(2);
  const [meta, setMeta] = useState({ meta: 'aaa' });
  //const [show, setShow] = useState(false)

  const [modalOpen, setModal] = useState(false);

  const openModal = event => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal }
      }
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal('');
  };


  const host = process.env.REACT_APP_BACK_END_HOST;
  const port = process.env.REACT_APP_BACK_END_PORT;


  const fetchImage = () => {
    const requestOptions = {
      method: 'GET',
      //header: { 'Content-Type': 'application/json'}
      header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://' + host + ':5000/get_data', 'Accept': 'application/json' }
    };
    //fetch('http://' + host + ':' + port + '/get_data', requestOptions)
    //this part was changed
    fetch('http://localhost:5000/get_data', requestOptions)
      .then(response => response.json())
      .then(result => {
        setMeta({
          meta: result.map(item => ({
            panoid: item[0],
            month: item[1],
            idx: item[2],
            angle: item[3],
            head: item[4],
            cluster: item[5],
            pp: item[6],
            pp_float: item[8]
          }))
        });
      });
  };

  return (
    <div className="App">
      <div class="UBC">
        <img class= "UBClogo" src = {logo} alt="UBC logo" ></img>
      </div>
      {/* router routing to the DOM components */}
      <Router>
      <Navbar/>
      {/* <ModalManager closeFn={closeModal} modal={modalOpen}/> */}
        <Routes>
          <Route exact path='/home' element={<Home/>}>
          </Route>
          <Route path='/about' element={<About/>}>
          </Route>
          <Route exact path='/contact' element={<Contact/>}>
          </Route>
        </Routes>
        
      </Router>

      {/* with setview. */}
      {/* <p>perceptions</p> */}
      {/* <button onClick={() => setView(0)}>contactInfo</button> */}
      {/* <button onClick={() => { setView(1); fetchImage() }}>images</button> */}
      {/* <button onClick={() => setView(2)}>home</button> */}
      {/* { view === 0 ? <Contact/> : null} */}
      {/* { view === 1 ? <Images setView={setView} fetchImage={fetchImage} meta={meta} /> : null} */}
      {/* { view === 2 ? <Home setView={setView}/> : null} */}

      {/* <div className="ChildSection">
        <button onClick={() => setShow(true) }>Show Modal Parent</button>
      </div>
      <div className="ParentSection">
      <button onClick={() => setShow(true) }>Show Modal Child</button>
      </div>
      <Modal onClose= {() => setShow(false)} show={show} /> */}

    </div>

    
  );
}
export default App;
