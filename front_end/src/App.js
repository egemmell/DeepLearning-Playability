import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Images from "./Images";
import Home from "./components/Home";
import ParentInfo from "./components/ParentInfo";
import Consent from "./components/Consent";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ImagesChild from "./components/ImagesChild";
import ExitResponse from "./components/ExitPage";

import "./css/App.css";
import { v4 as uuidv4 } from "uuid";
import env from "react-dotenv";
import ChildAssent from "./components/ChildAssent";
import ChildInfo from "./components/ChildInfo";
require("dotenv").config({ path: "../.env" });

function App() {
  const [meta, setMeta] = useState({ meta: "aaa" });
  const [userId, setUserId] = useState(uuidv4());
  useEffect(() => {
    fetchImage();
  }, []);
  //const [show, setShow] = useState(false)
  // const host = window.REACT_APP_BACK_END_HOST;
  // const port = window.REACT_APP_BACK_END_PORT;
  const host = process.env.REACT_APP_BACK_END_HOST;
  const port = process.env.REACT_APP_BACK_END_PORT;

  //const host = '127.0.0.1';
  console.log(host, port, "NEW3");
  // const port = '5000';

  const fetchImage = () => {
    const requestOptions = {
      mode: "cors",
      method: "GET",
      header: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };
    fetch("https://flask.pulsecanada.ca:" + port + "/get_data", requestOptions)
      //this part was changed
      .then((response) => response.json())
      .then((result) => {
        setMeta({
          meta: result.map((item) => ({
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
          })),
        });
      });
  };

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route
            exact
            path="/images"
            element={
              <Images fetchImage={fetchImage} meta={meta} userId={userId} />
            }
          ></Route>
          <Route
            exact
            path="/imagesChild"
            element={
              <ImagesChild
                fetchImage={fetchImage}
                meta={meta}
                userId={userId}
              />
            }
          ></Route>
          <Route exact path="/childAssent" element={<ChildAssent />}></Route>
          <Route
            exact
            path="/demographics"
            element={<ParentInfo userId={userId} />}
          ></Route>
          <Route exact path="/consent" element={<Consent />}></Route>
          <Route exact path="/childinfo" element={<ChildInfo />}></Route>
          <Route exact path="/exit" element={<ExitResponse />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
