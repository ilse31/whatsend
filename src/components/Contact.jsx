import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = ( { data, handleRemove, handleInit, editItem } ) =>
{
    const [ isTextShowed, setIsTextShowed ] = useState( true )
    const remove = ( id ) =>
    {
        handleRemove( { number: id } )
        handleInit()
    }
    useEffect( () =>
    {
        let width = window.innerWidth
        if ( width < 500 )
        {
            setIsTextShowed( false )
        }
    }, [] )

    return (
        <div>
            <div className="card shadow mb-3">
                <div className="card-body">
                    <div className="row justify-content-between">
                        <div className="col-sm-7">
                            <p>{ data.name }</p>
                            <p>{ data.number }</p>
                        </div>
                        <div className="col-sm-3">
                            <button type="button" className="btn mb-3 bg-white" onClick={ () => editItem( { number: data.number } ) } data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="bi bi-pencil-square" >
                                </i>
                            </button>
                            <i className="bi bi-trash ms-3" onClick={ () => remove( data.number ) }></i>
                            <Link className='btn btn-success ms-3' to={ { pathname: '/personal-message', state: data } }><i className="bi bi-chat-left-text-fill"></i>{ isTextShowed ? ' Send Message' : '' }</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */ }
        </div >
    )
}

export default Contact
