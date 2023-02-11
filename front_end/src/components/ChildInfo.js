import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/parentinfo.css'
require('dotenv').config({path: '../../.env'});


function ChildInfo(props) {
    const host = process.env.REACT_APP_BACK_END_HOST;
    const port = process.env.REACT_APP_BACK_END_PORT;
    // const host = '127.0.0.1';
    // const port = '5000';
    // const host = process.env.REACT_APP_BACK_END_HOST;
    // const port = process.env.REACT_APP_BACK_END_PORT;

    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [fsa, setFSA] = useState('')
    const [childAge, setChildAge] = useState('')

    const navigate = useNavigate();

    const postDemographics = async (user_id, age, parent_child, gender, fsa) => {
        try {
            const response = await fetch('https://flask.pulsecanada.ca:' + port + '/post_credential', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "user_id": user_id,
                        "age": age,
                        "parent_child": childAge,
                        "gender": gender,
                        "fsa": fsa
                    }
                )
            });
            if (response.status === 200) {
                console.log("res:200 THIS IS NAVIGATION", response.status);
                navigate("/images");
            }
            return;
        } catch (error) {
            return console.log(error);
        }
    }
    
    const insertDemographics = () => {
        postDemographics(props.userId , age, childAge, gender, fsa)
        .then((response) => {})
        .catch(error => console.log('error',error))
    }

    const handleSubmit = (e) => {  
        e.preventDefault()
        // insertDemographics()
        postDemographics(props.userId , age, childAge, gender, fsa)
        .then((response) => {})
        .catch(error => console.log('error',error))
        
        setAge('')
        setChildAge('')
        setGender('')
        setFSA('')   
    }

return (
    <div className='demographics'>
        <form className="parentInfo-form" onSubmit={handleSubmit}>
            <h2>Please answer the following questions before you proceed to the survey: </h2>

            Child age: 
            <select className="demo-label" for="age" onChange={(e)=>setAge(e.target.value)}>
                <option className='form-control'
                value="">age</option> 
                <option className='form-control'
                value="18-50">18-50</option> 
                <option className='form-control'
                value="50+">50+</option> 
                <option className='form-control'
                value="Prefer not to answer">Prefer not to answer</option> 
            </select>
            
            Child gender: 
            <select className="demo-label" for="gender" onChange={(e)=>setGender(e.target.value)}> 
                <option className='form-control'
                value="">gender</option> 
                <option className='form-control'
                value="Woman">Woman</option> 
                <option className='form-control'
                value="Man">Man</option> 
                <option className='form-control'
                value="Non-binary">Non-binary</option>
                <option className='form-control'
                value="Prefer not to answer">Prefer not to answer</option> 
            </select>
            
            <label className="demo-label-fsa" for="ps">First 3 digits of postal code:
                <input type="text" className='form-control-fsa'
                value={fsa} onChange={(e)=>setFSA(e.target.value)}/>
            </label>

            {/* <label className="demo-label" for="childage">Age of youngest child
            <input type="text" className='form-control'
            value={childAge} onChange={(e)=>setChildAge(e.target.value)}/> </label> */}

            <button className='next-button'> Start Survey </button>
        </form>
    </div>

);

};

export default ChildInfo;
