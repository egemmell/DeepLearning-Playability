import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Images from "./Images"
import Home from "./components/Home";
import ParentInfo from "./components/ParentInfo";
import About from "./components/About";
import Contact from "./components/Contact";
import ModalManager from "./components/ModalManager";
import Navbar from "./components/Navbar";
import logo from "./posts/ubc_logo.jpg";
import "./css/App.css";
import { v4 as uuidv4 } from 'uuid';
import ChildAssent from "./components/ChildAssent";
require('dotenv').config({path: '../.env'});


function App() {

  const [meta, setMeta] = useState({ meta: 'aaa' });
  const [userId, setUserId] = useState(uuidv4());
  useEffect(() => {
    fetchImage();
  }, [])
  //const [show, setShow] = useState(false)

  //const [modalOpen, setModal] = useState(false);

  // const openModal = event => {
  //   event.preventDefault();
  //   const {
  //     target: {
  //       dataset: { modal }
  //     }
  //   } = event;
  //   if (modal) setModal(modal);
  // };

  // const closeModal = () => {
  //   setModal('');
  // };


  const host = window.REACT_APP_BACK_END_HOST;
  const port = window.REACT_APP_BACK_END_PORT;


  const fetchImage = () => {
    const requestOptions = {
      method: 'GET',
      //header: { 'Content-Type': 'application/json'}
      header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://' + host + ':' + port + '/get_data', 'Accept': 'application/json' }
    };
    fetch('http://' + host + ':' + port + '/get_data', requestOptions)
    //this part was changed
    //fetch('http://127.0.0.1:5000/get_data', requestOptions)
      .then(response => response.json())
      .then(result => {
        setMeta({
          meta: result.map(item => ({
            x: item[0],
            idx: item[1],
            panoid: item[2],
            imguid: item[3],
            month: item[4],
            year: item[5],
            angle: item[6],
            playscore: item[7],
            exist: item[8],
            pp: item[9],
            pp_float: item[10],
            head: item[11],
            clusters: item[12],
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
          <Route exact path='/' element={<Home/>}>
          </Route>
          <Route path='/about' element={<About/>}>
          </Route>
          <Route exact path='/contact' element={<Contact/>}>
          </Route>
          <Route exact path='/images' element={<Images fetchImage={fetchImage} meta={meta} userId={userId}/>}>
          </Route>
          <Route exact path='/ChildAssent' element={<ChildAssent/>}>
          </Route>
          <Route exact path='/demographics' element={<ParentInfo/>}>
          </Route>
        </Routes>
        {/* <Link to="/images">
            <button>Click Me!</button>
        </Link> */}
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
