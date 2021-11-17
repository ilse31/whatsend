import React from 'react'
import phonebook from '../assets/icons/whh_phonebook.png'
const Modals = () =>
{
    return (
        <div>
            {/* Button trigger modal */ }
            <button type="button" className="btn mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={ phonebook } style={ { width: '25px' } } alt="" /> Add Contact
            </button>
            {/* Modal */ }
            <div className="modal fade" id="exampleModal" tabIndex={ -1 } aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modals
