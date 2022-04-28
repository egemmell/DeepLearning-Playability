import React from 'react'
import "../css/modal.css"

const ModalTwo = props => {

if (!props.show) {
    return null
}

    return (
        <div className='modal'>
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className='modal-title'>Survey Agreement Form 2</h4>
                </div>
                <div className='modal-body'>
                    This part will be the contents.
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose} className='button'>Back</button>
                    <button onSubmit={props.onSubmit} className="button">Parent Survey Submit Link</button>
                    <button onSubmit={props.onSubmit} className="button">Child Assent Submit Link</button>
                </div>
            </div>
        </div>
    )
}

export default ModalTwo