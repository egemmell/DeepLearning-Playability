import React, { useState } from 'react'
import video from '../videos/child-video2.mp4'
import "../css/childassent.css"
function ChildAssent() {

    const [isVisible, setIsVisible] = useState(false)

    const myCallback = () => {
        (console.log("Video ended"));
        setIsVisible(true)

    } 

    return (
    <div className="ChildVideo">
        <h2>Thank you for visiting our survey!</h2>
        <h4 className='h4-tag'>Please follow along the video below. This will help you understand the survey requirements.</h4>
        <div className='video-file'>
            <video onEnded={() => myCallback()} width="750" height="500" controls >
            <source src={video} type="video/mp4"/>
            </video>
        </div>
        <div className="child-survey-button" style={{ display: isVisible ? "block" : "none" }}>
            <h4 className='h4-tag'>Do you want to complete the survey?</h4>
            <a href="/images" className="button-yes"> 
                <i class="fas fa-thumbs-up fa-3x"></i>
            </a>
            <a href="/" className="button-no">
                 <i class="fa-solid fa-xmark fa-3x"></i>
            </a> 
        </div>
    </div>
    );
}

export default ChildAssent;