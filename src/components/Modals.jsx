import React from 'react'
import phonebook from '../assets/icons/whh_phonebook.png'
const Modals = () =>
{
    return (
        <div>
            <button type="button" className="btn mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={ phonebook } style={ { width: '25px' } } alt="" /> Add Contact
            </button>
            <div className="modal fade" id="exampleModal" tabIndex={ -1 } aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="pb-3">
                                    <label className="form-label" id='fname' htmlFor="fullname">
                                        Name<span className="text-danger"></span>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="nama"
                                        placeholder="Your Full Name Here..."
                                    />
                                    <span className='error'></span>
                                </div>
                                <div className="pb-3">
                                    <label className="form-label" htmlFor="phone">
                                        Phone Number <span className="text-danger"></span>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="tel"
                                        name="phone"
                                        placeholder="08573890xxxxx"
                                    />
                                    <span className='error'></span>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn text-white px-4 mt-2 btn-success">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modals
