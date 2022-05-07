import YouTube from 'react-youtube';
import {useState} from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import ModalOne from "./ModalOne";
import ModalTwo from './ModalTwo';
import ModalManager from "./ModalManager";
import {Link} from 'react-router-dom';
import About from "./About";
import "../css/home.css"


function Home() {

  //Operate Modals fucntions
  const [modalOpen, setModal] = useState(false)

  const openModal = event => {
    event.preventDefault() 
    const { target: { dataset: { modal }}} = event
    if (modal) setModal (modal)
  }

  const closeModal = () => {
    setModal('')
  }

  return (
    <div className="home--shell">
      <form className='consent-form' id='consent-form'>
        <div className='form-info'>
          <h2>Assessing child and parent perceptions of neighbourhoods for children’s outdoor play</h2>
          <p>Thank you for visiting our survey!</p>
            <p>If you are a parent or guardian of a 0-12 year old child living in Canada, we want to understand how you view neighbourhood environments for children’s outdoor play! </p>
            <p>We would also love to hear from your 5-12 year old child about what kinds of neighbourhoods they consider to be playable. </p>
            <p>We hope that this research can help cities understand the types of neighbourhoods parents and children consider to be supportive of children’s outdoor play. </p>
            <p>Before consenting to either your or your child’s participation, please review the participant information <Link to="/About">sheet</Link> for more details about this study. </p>
            <h4>By clicking the link below, you confirm the following statements and consent to participate in this research.</h4>
            <p>I am a parent or guardian of a 0-12 year old child and live in Canada.</p>
            <p>I have reviewed the participant information sheet.</p>
        </div>

        <div className='link-to-surveys'>
          <div className='parent-survey'>
            <p className='survey'>Yes, I would like to participate in this survey!</p>
            <button type='submit' className="survey-button">Survey</button>
          </div>

          {/* Simplying with modal manager */}
          <div className='child-assent' onClick={openModal}>
            <main className="app--screen screen--one">
                <p>Yes, I consent to my 5-12 year old child participating in this survey!</p>
                <button type="button" data-modal="modal-one">
                Open Popup!
                </button>
            </main>
            <ModalManager closeFn={closeModal} modal={modalOpen}/>
          </div>
        </div>
      </form>
      
    {/* Youtube video API render */}
    {/* <div>
    <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
    <Button onClick={() => props.setView(1)}>start</Button>
    </div> */}
    </div>
  );
}

export default Home;

    // {/* Modals style one */}
    // {/* <div className="modals">
    //   <div className="ChildSection">
    //     <button onClick={() => setShow(true) }>Show Modal Parent</button>
    //   </div>
    //   <div className="ParentSection">
    //   <button onClick={() => setShow(true) }>Show Modal Child</button>
    //   </div>
    //   <ModalOne onClose= {() => setShow(false)} show={show} />
    // </div> */}

    //Youtube Video API rendering inside the function
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