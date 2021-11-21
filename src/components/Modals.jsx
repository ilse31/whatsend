import React, { useState } from 'react'
import { useHistory } from 'react-router'
import phonebook from '../assets/icons/whh_phonebook.png'
const Modals = () =>
{
    const history = useHistory()
    const baseData = {
        nama: "",
        phone: "",
    };
    const baseError = {
        nama: "",
        phone: "",
    };
    const [ data, setData ] = useState( baseData );
    const [ errorMessage, setErrorMessage ] = useState( baseError );
    const regexNama = /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/;
    const regexPhone = /^[0-9]{10,15}$/;

    const validateOnChange = ( name, value ) =>
    {
        if ( name === "nama" && !regexNama.test( value ) )
        {
            setErrorMessage( {
                ...errorMessage,
                nama: "Full name must be alphabet",
            } );
        } else if ( regexNama.test( value ) )
        {
            setErrorMessage( { ...errorMessage, nama: "" } );
        }

        if ( name === "phone" && !regexPhone.test( value ) )
        {
            setErrorMessage( {
                ...errorMessage,
                phone: "Phone number is invalid",
            } );
        } else if ( regexPhone.test( value ) )
        {
            setErrorMessage( {
                ...errorMessage,
                phone: "",
            } );
        }

        if ( name === "nationality" && value !== "" )
        {
            setErrorMessage( {
                ...errorMessage,
                nationality: "",
            } );
        }
    };

    const validateOnSubmit = () =>
    {
        setErrorMessage( () =>
        {
            const errorMessageArr = Object.keys( errorMessage ).map( ( key ) =>
            {
                if ( data[ key ] === "" )
                {
                    const err = `${ key.charAt( 0 ).toUpperCase() + key.slice( 1 )
                        } cannot be empty`;

                    return { [ key ]: err };
                }
                return { [ key ]: "" };
            } );
            const updatedErrorMessage = errorMessageArr.reduce(
                ( previousValue, currentValue ) =>
                {
                    return { ...previousValue, ...currentValue };
                },
                {}
            );
            return updatedErrorMessage;
        } );
    };

    const onChange = ( e ) =>
    {
        const name = e.target.name;
        const value = e.target.value;
        validateOnChange( name, value );
        setData( {
            ...data,
            [ name ]: value,
        } );
    };

    const onSubmited = ( e ) =>
    {
        e.preventDefault();
        const validField = Object.keys( data ).filter(
            ( key ) => key !== "message" && data[ key ] !== ""
        );

        if ( validField.length < 4 )
        {
            validateOnSubmit();
        } else
        {
            const newData = {
                nama: baseData.nama,
                phone: baseData.phone,
            }
        }
    };
    return (
        <div>
            <button type="button" className="btn mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={ phonebook } style={ { width: '25px' } } alt="" /> Add Contact
            </button>
            <div className="modal fade" id="exampleModal" tabIndex={ -1 } aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={ onSubmited } >
                                <div className="pb-3">
                                    <label className="form-label" id='fname' htmlFor="fullname">
                                        Name<span className="text-danger"></span>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="nama"
                                        value={ data.nama }
                                        onChange={ onChange }
                                        placeholder="Your Full Name Here..."
                                    />
                                    <span className='error'>{ errorMessage.nama }</span>
                                </div>
                                <div className="pb-3">
                                    <label className="form-label" htmlFor="phone">
                                        Phone Number <span className="text-danger"></span>
                                    </label>
                                    <input
                                        className="form-control"
                                        type="tel"
                                        name="phone"
                                        value={ data.phone }
                                        onChange={ onChange }
                                        placeholder="08573890xxxxx"
                                    />
                                    <span className='error'>{ errorMessage.phone }</span>
                                </div>
                                { console.log( data ) }
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
