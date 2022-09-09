import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import data from "../sample_config.yaml";
import env from "react-dotenv";
import '../css/parentinfo.css'
require('dotenv').config({path: '../../.env'});


function ParentInfo(props) {
    const host = process.env.REACT_APP_BACK_END_HOST;
    const port = process.env.REACT_APP_BACK_END_PORT;
    // const host = '127.0.0.1';
    // const port = '5000';
    console.log('TRHIS IS THE PORT', port)
    // const host = process.env.REACT_APP_BACK_END_HOST;
    // const port = process.env.REACT_APP_BACK_END_PORT;

    // var readYaml = require('read-yaml');
    // console.log("JJJ")
    // readYaml('../sample_config.yaml', function(err, data) {
    //     if (err) throw err;
    //     console.log("hello", data);
    // });

    //https://github.com/wwilsman/js-yaml-loader/issues/16
    //this above line suggest there is no yaml loader??

    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [fsa, setFSA] = useState('')
    const [parent_child, setChildAge] = useState('')

    const navigate = useNavigate();

    const InsertArticle = (user_id, age, parent_child, gender, fsa) => {
        return fetch('http://' + host + ':' + port + '/post_credential', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(
                {
                    "user_id": user_id,
                    "age": age,
                    "parent_child": parent_child,
                    "gender": gender,
                    "fsa": fsa
                }
            )
        })
        // need to edit this and change the response status: try catch blocks 
        .then(response => {
            if (response.status === 200){
                console.log("res:200 THIS IS NAVIGATION", response.status)
                navigate("/images");
            }

            
            return
        })
           // response.json())
        .catch(error => console.log(error))
    }
    
    const insertArticle = () => {
        InsertArticle(props.userId , age, parent_child, gender, fsa)
        .then((response) => {})
        .catch(error => console.log('error',error))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handlesumit")
        insertArticle()
        setAge('')
        setChildAge('')
        setGender('')
        setFSA('')
        
    }

    //navigate to images page
    const rootNavigateImages = () => {
      navigate('/images');
    };

return (
    <div className='demographic'>
        <form onSubmit={handleSubmit}>
            <h2>Please answer the following questions before you proceed to the survey: </h2>

            <label className="demo-label" for="age">Parent age: 
            <input type="text" className='form-control'
            value={age} onChange={(e)=>setAge(e.target.value)}/> </label>
            
            <label className="demo-label" for="gender">Parent gender: 
            <input type="text" className='form-control' 
            value={gender} onChange={(e)=>setGender(e.target.value)}/> </label>
            
            <label className="demo-label" for="ps">First 3 digits of postal code:
            <input type="text" className='form-control'
            value={fsa} onChange={(e)=>setFSA(e.target.value)}/>  </label>

            <label className="demo-label" for="childage">Age of youngest child
            <input type="text" className='form-control'
            value={parent_child} onChange={(e)=>setChildAge(e.target.value)}/> </label>

            <button className='next-button'> Start Survey </button>
        </form>
    </div>

);

};

export default ParentInfo;
