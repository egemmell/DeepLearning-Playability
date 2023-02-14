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
            const response = await fetch(' http://127.0.0.1:' + port + '/post_credential', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',  "Access-Control-Allow-Origin": "*", 'Accept': 'application/json',
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
                navigate("/imagesChild");
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
                value="">Select option below</option> 
                <option className='form-control'
                value="5">5</option> 
                <option className='form-control'
                value="6">6</option> 
                <option className='form-control'
                value="7">7</option> 
                <option className='form-control'
                value="8">8</option> 
                <option className='form-control'
                value="9">9</option> 
                <option className='form-control'
                value="10">10</option> 
                <option className='form-control'
                value="11">11</option> 
                <option className='form-control'
                value="12">12</option> 
                <option className='form-control'
                value="Prefer not to answer">Prefer not to answer</option> 
            </select>
            
            Child gender: 
            <select className="demo-label" for="gender" onChange={(e)=>setGender(e.target.value)}> 
                <option className='form-control'
                value="">Select option below</option>  
                <option className='form-control'
                value="Girl">Girl</option> 
                <option className='form-control'
                value="Boy">Boy</option> 
                <option className='form-control'
                value="Non-binary person">Non-binary person</option>
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
            <footer style={{ paddingTop: "50px", fontSize: "10px" }}>
            Ethics ID # H22-00267
          </footer>
        </form>
    </div>

);

};

export default ChildInfo;
