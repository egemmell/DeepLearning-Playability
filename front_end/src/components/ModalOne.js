import React from 'react'
import "../css/modal.css"

import Modal from './Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {

    return (
        <Modal open={open}>

            <div className='modal'>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className='modal-title'>Survey Agreement Form 1</h4>
                    </div>
                    <div className='modal-body'>
                        This part will be the contents.
                    </div>
                    <div className='modal-footer'>
                        <button type="button" onClick={closeFn} className='back-button'>Back</button>
                        {/* <button onSubmit={props.onSubmit} className="button">Parent Survey Submit Link</button> */}
                        <button className="submit-button">Child Assent Submit Link</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalOne