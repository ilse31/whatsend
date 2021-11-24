import React from 'react'
import ListContact from './ListContact'

const Contact = ( props ) =>
{

    return (
        <div>
            { props.data?.map( ( item ) => (
                <ListContact
                    data={ item }
                />
            ) ) }
            {/* modal */ }
            <div className="modal fade" id="exampleModal1" tabIndex={ -1 } aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered text-black">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="pb-3">
                                <label className="form-label" id='fname' htmlFor="fullname">
                                    Name<span className="text-danger"></span>
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Your Full Name Here..."
                                />
                            </div>
                            <div className="pb-3">
                                <label className="form-label" htmlFor="phone">
                                    Phone Number <span className="text-danger"></span>
                                </label>
                                <input
                                    className="form-control"
                                    type="tel"
                                    name="number"
                                    placeholder="08573890xxxxx"
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn text-white px-4 mt-2 btn-success">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* endModal */ }
        </div >
    )
}

export default Contact
