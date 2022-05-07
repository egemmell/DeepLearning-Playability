import React from 'react'
import "../css/modal.css"

import Modal from './Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {

    return (
        <Modal open={open}>

            <div className='modal'>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className='modal-title'>Child Agreement Form</h4>
                    </div>
                    <div className='modal-body'>
                        <p>Hello!</p>
                        <p>What kind of neighbourhood do you think is best for playing outdoors?</p>
                        <p>If you are between 5 and 12 years old, we would like to invite you to tell us what you think. We hope that understanding what kind of neighbourhood kids think is good for playing in may help cities become better places to grow up.</p>
                        <p>In this survey, we will show you pictures of different neighbourhoods and ask you to click on the picture of the neighbourhood that you think would be best for playing outside.</p>
                        <p>We don’t ask you any personal questions and your choices will be completely confidential. The survey will take from five to ten minutes. </p>
                        <p>Your parent has agreed to your participation but it is up to you to decide if you want to complete this survey. If you decide to participate, you can stop anytime by clicking away from the survey page.</p>
                        <p>Before you decide if you want to take part in this study, discuss it with your parent to make sure you understand what you need to do and that all your questions have been answered.</p>
                        
                        <div className='child-survey'>
                            <p className='child-consent'>Do you agree to take part in this study?</p>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button type="button" onClick={closeFn} className='back-button'>No</button>
                        {/* <button onSubmit={props.onSubmit} className="button">Parent Survey Submit Link</button> */}
                        <button className="yes-button">Yes</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalOne