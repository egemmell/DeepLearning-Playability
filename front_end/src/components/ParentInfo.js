import React, { useState} from 'react';
require('dotenv').config({path: '../../.env'});

function ParentInfo(props) {
    const host = process.env.REACT_APP_BACK_END_HOST;

    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [postalcode, setPC] = useState('')
    const [childage, setChildAge] = useState('')

    const InsertArticle = (body) => {
        return fetch('http://localhost:5000/post_credential', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
    
    const insertArticle = () => {
        InsertArticle({gender,age,postalcode,childage})
        .then((response) => props.insertedArticle(response))
        .catch(error => console.log('error',error))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handlesumit")
        insertArticle()
        setGender('')
        setAge('')
        setPC('')
        setChildAge('')
    }

return (
    <div className='demographic'>
        <form onSubmit={handleSubmit}>
            <h2>Please fillout the demographics before you proceed to the survey</h2>
            <label className="demo-label" for="gender">Gender:</label>
            <input type="text" className='form-control' 
            value={gender} onChange={(e)=>setGender(e.target.value)}/><br></br>

            <label className="demo-label" for="age">Age:</label>
            <input type="text" className='form-control'
            value={age} onChange={(e)=>setAge(e.target.value)}/><br></br>

            <label className="demo-label" for="ps">Postal Code:</label>
            <input type="text" className='form-control'
            value={postalcode} onChange={(e)=>setPC(e.target.value)}/><br></br>

            <label className="demo-label" for="childage">If your child is participating, how old is your child?</label>
            <input type="text" className='form-control'
            value={childage} onChange={(e)=>setChildAge(e.target.value)}/>

            <a href="/survey">Next</a>
        </form>
    </div>

);



};

export default ParentInfo;
