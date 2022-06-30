import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
require('dotenv').config({path: '../../.env'});


function ParentInfo(props) {
    const host = window.REACT_APP_BACK_END_HOST;
    const port = window.REACT_APP_BACK_END_PORT;

    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [postalcode, setPC] = useState('')
    const [childage, setChildAge] = useState('')

    const navigate = useNavigate();

    const InsertArticle = (body) => {
        return fetch('http://' + host + ':' + port + '/post_credential', {
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

    const rootNavigateImages = () => {
      // 👇️ navigate to /contacts
      
      navigate('/images');
        // fetchImage: fetchImage(),
        // meta: meta,
    
    //{<Images fetchImage={fetchImage} meta={meta}/>}
    };

return (
    <div className='demographic'>
        <form onSubmit={rootNavigateImages}>
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
            {/* <button onClick={()=> {rootNavigateImages()}}>Next</button> */}
            {/* <a oncl></a> */}
            <button onClick={() => {handleSubmit(); rootNavigateImages()}}> Next </button>
        </form>
    </div>

);

};

export default ParentInfo;
