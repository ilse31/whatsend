
import React from 'react'
import Modals from '../../components/Modals'

const PhoneBook = () =>
{
    return (
        <div className='container p-3'>
            <Modals />
            <div className="card shadow-lg">
                <div className="card-body">
                    <div className="card shadow mb-3">
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-sm-7">
                                    <p>Nama</p>
                                    <p>0898983904832482</p>
                                </div>
                                <div className="col-sm-3">
                                    <i class="bi bi-pencil-square"></i>
                                    <i class="bi bi-trash ms-3"></i>
                                    <button className='btn btn-success ms-3'><i class="bi bi-chat-left-text-fill"></i> Send Messages</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-sm-7">
                                    <p>Nama</p>
                                    <p>0898983904832482</p>
                                </div>
                                <div className="col-sm-3">
                                    <i class="bi bi-pencil-square"></i>
                                    <i class="bi bi-trash ms-3"></i>
                                    <button className='btn btn-success ms-3'><i class="bi bi-chat-left-text-fill"></i> Send Messages</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneBook
