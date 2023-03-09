import React, { useState } from 'react'
import video from '../videos/ChildAssent.2.10.2023.mp4'
import "../css/childassent.css"
function ChildAssent() {

    const [isVisible, setIsVisible] = useState(false)

    const myCallback = () => {
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
            <footer style={{ paddingTop: "10px", paddingLeft: "20px", paddingBottom: "10px", fontSize: "10px" }}>
            Ethics ID # H22-00267
            </footer>
        </div>
    );
}

export default ChildAssent;