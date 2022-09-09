import React, { useState } from 'react'
import video from '../videos/Child_Assent_Video.mp4'
import "../css/childassent.css"
function ChildAssent() {

    const [isVisible, setIsVisible] = useState(false)

    const myCallback = () => {
        (console.log("Video ended"));
        setIsVisible(true)

    } 

    return (
        <div className="ChildVideo">
            <h3 className='h4-tag'>Please follow along with the video below to help you understand more about the survey and how to participate.</h3>
            <div className='video-file'>
                <video className='vid' onEnded={() => myCallback()}  controls >
                <source src={video} type="video/mp4"/>
                </video>
            </div>
            <div className="child-survey-button" style={{ display: isVisible ? "block" : "none" }}>
                <h4 className='h4-tag'>Do you want to complete the survey?</h4>
                <a href="/imagesChild" className="button-yes"> 
                    <i class="fas fa-thumbs-up fa-2x"></i>
                </a>
                <a href="/" className="button-no">
                    <i class="fa-solid fa-xmark fa-2x"></i>
                </a> 
            </div>
        </div>
    );
}

export default ChildAssent;