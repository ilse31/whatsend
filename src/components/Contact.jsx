import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = ( { data, handleRemove, handleInit, editItem } ) =>
{

    //tes
    const [ name, setName ] = useState( '' )
    const [ number, setNumber ] = useState( '' )
    const [ phoneValidation, setPhoneValidation ] = useState( {
        isValid: true,
        text: ''
    } )

    useEffect( () =>
    {
        if ( Object.keys( data ).length > 0 )
        {
            setName( data.name )
            setNumber( data.number )
        }
    }, [ data ] )
    const handleClose = () =>
    {
        setName( '' )
        setNumber( '' )
    }
    const handleNumberChange = ( e ) =>
    {
        let value = e.target.value;
        setPhoneValidation( { isValid: true, text: '' } );
        setNumber( value );
        if ( isNaN( Number( value ) ) )
        {
            setPhoneValidation( { isValid: false, text: 'Phone number is invalid' } );
        }
    }
    const handleNameChange = e =>
    {
        let value = e.target.value;
        setName( value )
    }

    const save = () =>
    {
        setPhoneValidation( { isValid: true, text: '' } );
        let initial = []
        let result = localStorage.getItem( 'phonebook' )
        if ( Object.keys( data ).length > 0 )
        {
            if ( result )
            {
                let idx = JSON.parse( result ).findIndex( el => el.number === Number( number ) )
                if ( idx !== -1 )
                {
                    initial = JSON.parse( result )
                    initial[ idx ].name = name
                    initial[ idx ].number = number
                }
            }
        } else
        {
            if ( result )
            {
                let checkNumber = JSON.parse( result ).find( el => el.number === Number( number ) )
                if ( checkNumber )
                {
                    setPhoneValidation( { isValid: false, text: 'Phone number already exists' } )
                    return false
                }
                initial = JSON.parse( result )
            }
            let params = {
                name,
                number
            }
            initial.push( params )
        }
        localStorage.setItem( 'phonebook', JSON.stringify( initial ) )
        handleInit()
        setName( '' )
        setNumber( '' )
    }

    //tes modal
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
                            <button type="button" className="btn mb-3 bg-white" onClick={ () => editItem( { number: data.number } ) } data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                <i className="bi bi-pencil-square" ></i>
                            </button>
                            <i className="bi bi-trash ms-3" onClick={ () => remove( data.number ) }></i>
                            <Link className='btn btn-success ms-3' to={ { pathname: '/personal-message', state: data } }><i className="bi bi-chat-left-text-fill"></i>{ isTextShowed ? ' Send Message' : '' }</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */ }
            <div className="modal fade" id="exampleModal1" tabIndex={ -1 } aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered text-black">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Contact</h5>
                            <button type="button" className="btn-close" onClick={ handleClose } data-bs-dismiss="modal" aria-label="Close" />
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
                                    value={ name }
                                    onChange={ handleNameChange }
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
                                    value={ number }
                                    onChange={ handleNumberChange }
                                    placeholder="08573890xxxxx"
                                />
                                { phoneValidation.isValid ? '' : ( <span className='error'>{ phoneValidation.text }</span> ) }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={ handleClose } data-bs-dismiss="modal">Close</button>
                                <button type="submit" onClick={ save } className="btn text-white px-4 mt-2 btn-success">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact
