import React from 'react'

const ListContact = ( props ) =>
{
    const { id, name, number } = props.data;
    return (
        <div>
            <div className="card shadow mb-3">
                <div className="card-body">
                    <div className="row justify-content-between">
                        <div className="col-sm-7">
                            <p>😊 { name }</p>
                            <p>📲{ number }</p>
                        </div>
                        <div className="col-sm-3">
                            <button type="button" className="btn mb-3 bg-white" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                <i className="bi bi-pencil-square" ></i>
                            </button>
                            <button type="button" className="btn mb-3 ms-3 bg-white" name='delete'>
                                <i className="bi bi-trash" onClick={ () => props.handleRemove( id ) }></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListContact
