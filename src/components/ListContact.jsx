import React from 'react'
import { Link } from 'react-router-dom';

const ListContact = ( props ) =>
{
    const { name, number } = props.data;
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
                            <button type="button" className="btn mb-3 ms-3 bg-white" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                <i className="bi bi-trash"></i>
                            </button>
                            <Link className='btn btn-success ms-3 mb-3' to={ { pathname: '/personal-message/' } }><i className="bi bi-chat-left-text-fill"></i>Send</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListContact
