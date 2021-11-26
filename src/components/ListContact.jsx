import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { updateData } from '../graphql/Mutation';
import { getDataAll } from '../graphql/Query';

const ListContact = ( props ) =>
{
    const { id, name, number } = props.data;
    const [ updatedatas, { loading } ] = useMutation( updateData, {
        refetchQueries: [ getDataAll ],
    } );

    // tesModal
    const [ newNames, setNewNames ] = useState( '' )
    const [ newNumbers, setNewNumbers ] = useState( '' )
    const [ phoneValidation, setPhoneValidation ] = useState( {
        isValid: true,
        text: ''
    } )

    const [ isTextShowed, setIsTextShowed ] = useState( true )
    useEffect( () =>
    {
        let width = window.innerWidth
        if ( width < 500 )
        {
            setIsTextShowed( false )
        }
    }, [] )

    const handleClose = () =>
    {
        setNewNames( '' )
        setNewNumbers( '' )
    }
    const handleNumberChange = ( e ) =>
    {
        let value = e.target.value;
        setPhoneValidation( { isValid: true, text: '' } );
        setNewNumbers( value );
        if ( isNaN( Number( value ) ) )
        {
            setPhoneValidation( { isValid: false, text: 'Phone number is invalid' } );
        }
    }
    const handleNameChange = e =>
    {
        let value = e.target.value;
        setNewNames( value )
    }

    const save = () =>
    {
        console.log( props.data.id );
        setPhoneValidation( { isValid: true, text: '' } );
        let initial = []
        let result = localStorage.getItem( 'phonebook' )
        if ( Object.keys( props.data ).length > 0 )
        {
            if ( result )
            {
                let idx = JSON.parse( result ).findIndex(
                    ( el ) => parseInt( el.number ) === parseInt( props.data.number ) )
                console.log( 'idx', idx );
                if ( idx !== -1 )
                {
                    initial = JSON.parse( result )
                    initial[ idx ].name = newNames
                    initial[ idx ].number = newNumbers
                }
                updatedatas( {
                    variables: {
                        name: newNames,
                        number: newNumbers,
                        id: id,
                    },
                } );
            }
        } else
        {
            if ( result )
            {
                let checkNumber = JSON.parse( result ).find( el => el.number === parseInt( number ) )
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
            updatedatas( {
                variables: {
                    name: newNames,
                    number: newNumbers,
                    id: id,
                },
            } );
        }
        localStorage.setItem( 'phonebook', JSON.stringify( initial ) )
        props.handleInit()
        setNewNames( '' )
        setNewNumbers( '' )
    }
    if ( loading )
    {
        return "Loading Data . . ."
    }
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
                            <button type="button" className="btn mb-3 bg-white" data-bs-toggle="modal" onClick={ () => props.editItem( id ) } data-bs-target={ `#modal${ id }` }>
                                <i className="bi bi-pencil-square" ></i>
                            </button>
                            <button type="button" className="btn mb-3 ms-3 bg-white" name='delete'>
                                <i className="bi bi-trash" onClick={ () => props.handleRemove( id ) }></i>
                            </button>
                            <Link
                                className='btn btn-success ms-3 mb-3'
                                to={ {
                                    pathname: `personal-message/${ props.data.number }/${ props.data.name }`,
                                } }><i className="bi bi-chat-left-text-fill"></i>{ isTextShowed ? ' Send Message' : '' }</Link>
                        </div>
                    </div>
                </div>
            </div>



            {/* modal */ }
            <div className="modal fade" id={ `modal${ id }` } tabIndex={ -1 } aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered text-black">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Contact</h5>
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
                                    placeholder={ name }
                                    onChange={ handleNameChange }
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
                                    placeholder={ number }
                                    onChange={ handleNumberChange }
                                />
                                { phoneValidation.isValid ? '' : ( <span className='error'>{ phoneValidation.text }</span> ) }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={ handleClose } data-bs-dismiss="modal">Close</button>
                                <button type="submit" onClick={ save } data-bs-dismiss="modal" className="btn text-white px-4 mt-2 btn-success">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* endModal */ }

        </div>
    )
}

export default ListContact
