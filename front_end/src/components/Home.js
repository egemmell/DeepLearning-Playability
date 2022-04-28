import YouTube from 'react-youtube';
import {useState} from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import ModalOne from "./ModalOne";
import ModalTwo from './ModalTwo';
import ModalManager from "./ModalManager";

function Home() {

  //Modals style one
  //const [show, setShow] = useState(false)

  //Modals style two
  const [modalOpen, setModal] = useState(false)

  const openModal = event => {
    event.preventDefault() 
    const { target: { dataset: { modal }}} = event
    if (modal) setModal (modal)
  }

  const closeModal = () => {
    setModal('')
  }

  //Youtube Video API rendering
  // const opts = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  //};

  // const _onReady = (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.playVideo();
  // }

  return (
    <div className="home--shell" onClick={openModal}> 

    {/* Modals style one */}
    {/* <div className="modals">
      <div className="ChildSection">
        <button onClick={() => setShow(true) }>Show Modal Parent</button>
      </div>
      <div className="ParentSection">
      <button onClick={() => setShow(true) }>Show Modal Child</button>
      </div>
      <ModalOne onClose= {() => setShow(false)} show={show} />
    </div> */}

    {/* Youtube video API render */}
    {/* <div>
    <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
    <Button onClick={() => props.setView(1)}>start</Button>
    </div> */}

    {/* Modal style two */}
    {/* <ModalOne
      closeFn={closeModal}
      open={modalOpen === 'modal-one'} />
    <ModalTwo
      closeFn={closeModal}
      open={modalOpen === 'modal-two'} /> */}
    {/* Simplying with modal manager */}
    <main className="app--screen screen--one">

      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-one">
          Open Modal One
        </button>
        <button type="button" data-modal="modal-two">
          Open Modal Two
        </button>
        <button type="button" data-modal="modal-three">
          Open Modal Three
        </button>
      </div>
    </main>
    <ModalManager closeFn={closeModal} modal={modalOpen}/>
    </div>

  );
}

export default Home;