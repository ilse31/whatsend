import React from 'react'

const Contact = ( { id, nama, phone, deleteItem, editItem } ) =>
{
    return (
        <div>
            <div className="card shadow mb-3">
                <div className="card-body" key={ id }>
                    <div className="row justify-content-between">
                        <div className="col-sm-7">
                            <p>{ nama }</p>
                            <p>{ phone }</p>
                        </div>
                        <div className="col-sm-3">
                            <i className="bi bi-pencil-square" onClick={ deleteItem }></i>
                            <i className="bi bi-trash ms-3" onClick={ editItem }></i>
                            <button className='btn btn-success ms-3'><i className="bi bi-chat-left-text-fill"></i> Send Messages</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
