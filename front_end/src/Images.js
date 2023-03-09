import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Container, Row, Col, Button, CardColumns } from 'react-bootstrap';
import "./css/images.css";
import env from "react-dotenv";
require('dotenv').config({path: '../.env'});


function Images(props) {
  const host = process.env.REACT_APP_BACK_END_HOST;
  const port = process.env.REACT_APP_BACK_END_PORT;
  // console.log('HOST from /images:', host)
  
  const [api, setApi] = useState(env.REACT_APP_API_KEY);
  const [cache, setCache] = useState(0);
  const [meta, setMeta] = useState({ meta: 'aaa' });

  const date = () => {
    return String(Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Date.now()))
  }

  const submit = (img_1, img_2, perception, choice, user_id) => {
    const requestOptions = {
      method: 'POST',
      //header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://' + host + ':' + port + '/post_data', 'Accept': 'application/json' },
      header: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(
        {
          "img_1": img_1,
          "img_2": img_2,
          "perception": perception,
          "choice": choice,
          "user_id": user_id,
          "time": date()
        }
      )
    };
    fetch('https://flask.pulsecanada.ca:' + port + '/post_data', requestOptions)
      .then(response => response.json())
  };

  // render image using API
  const img_html = (panoid, head) => {
    var heady = Math.round(head);
    console.log(panoid)
    return `https://maps.googleapis.com/maps/api/streetview?size=640x640&pano=${panoid}&fov=120&heading=${heady}&pitch=0&key=${api}`
  };

  const updates = () => {
    // count the image pairs to refresh data bindings
    setCache(cache + 2);
    if ((cache + 2) % 10 === 0) {
        props.fetchImage();
        //props.fetchImage();
        setCache(0);
    }
};

  return (
    <div className="imagesbody">
    <div className="perception-test">
      {/* {console.log("If props works", props.meta)} */}
      {console.log("Just meta", meta, props.meta.meta[cache].panoid)}
      <h3 id = "over10" style={{textAlign: 'center'}}>Click on the picture of the neighbourhood you think looks more playable for children.</h3>
      
      <div className='page'>
        {/* <div class="col-lg-4 offset-lg-1 col-md-4 offset-md-1 p-1"> */}
        <div class="img1" id="img1">
            <img className='images' onClick={() => { submit(props.meta.meta[cache].idx, props.meta.meta[cache + 1].idx, 'choice', props.meta.meta[cache].idx, props.userId); updates() }} src={img_html(props.meta.meta[cache].panoid, props.meta.meta[cache].head)} alt='image not loaded' />
        </div>
        
        <div class="img2" id="img2">
            <img className='images' onClick={() => { submit(props.meta.meta[cache].idx, props.meta.meta[cache + 1].idx, 'choice', props.meta.meta[cache + 1].idx, props.userId); updates() }} src={img_html(props.meta.meta[cache + 1].panoid, props.meta.meta[cache + 1].head)} alt='image not loaded' />
        </div>
      </div>
      <p className="ptag">If a picture is missing, please select the button below to continue.</p>
      <div class="actions">
        {/* <button variant="outline-secondary" className='button' size='lg' block onClick={() => { submit(props.meta.meta[cache][2], props.meta.meta[cache + 1][2], 'choice', '1', props.userId); updates() }}>About the same</button> */}
        {/* <button variant="outline-secondary" className='button' size='lg' block onClick={() => { submit(props.meta.meta[cache][2], props.meta.meta[cache + 1][2], 'choice', '0', props.userId); updates() }}>I can't decide</button> */}
        <button variant="outline-secondary" className='button' size='lg' block onClick={() => { submit(props.meta.meta[cache][2], props.meta.meta[cache + 1][2], 'choice', '0', props.userId); updates() }}>Picture missing</button>
      </div>
      <div style={{textAlign: "right", marginRight: "20px", marginBottom:"20px", marginTop:"40px"}}>
          <a href="/exit" className="exit-button">Exit</a>
      </div>
      <footer style={{ paddingTop: "10px", paddingLeft: "20px", paddingBottom: "10px", fontSize: "10px" }}>
        Ethics ID # H22-00267
      </footer>
    </div>
    </div>
  );
}
export default Images;

// docker run -it --network="host" --env db_host='127.0.0.1' --env db_port=5432 --env db_root_password='postgres' -p 5000:80 back-end:latest /bin/bash            
