import { useState } from "react";
import Images from "../Images";
require('dotenv').config({path: '../.env'});


function SurveyPage() {

    const [view, setView] = useState(2);
    const [meta, setMeta] = useState({meta: 'aaa'});
    const host = process.env.REACT_APP_BACK_END_HOST;

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
        <div>
            <p>This is the survey page</p>

            <button onClick={() => { setView(1); fetchImage() }}>Start Survey</button>
            { view === 1 ? <Images setView={setView} fetchImage={fetchImage} meta={meta} /> : null}

        </div>
    );
}

export default SurveyPage;