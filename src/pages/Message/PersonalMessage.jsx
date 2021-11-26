import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PhoneNumber from '../../components/PhoneNumber'
import './pm.css'
import useDocumentTitle from '../../store/useDocumentTitle'

const SubmitButton = ( props ) =>
{
    if ( props.isLoading )
    {
        return (
            <button className="btn btn-success" type="button">{ props.isLoading ? 'Sending . . .' : '' }</button>
        )
    }
    return (
        <button onClick={ props.handleClick } className="btn btn-success" type="submit">Send</button>
    )
}


const PersonalMessage = ( props ) =>
{
    useDocumentTitle( 'Whatshy | Personal Messages' )
    const { id } = useParams()
    const [ phone, setPhone ] = useState( '' );
    const [ messages, setMessages ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ phoneValidation, setPhoneValidation ] = useState( {
        isValid: true,
        text: ''
    } );
    const [ isNewNumber, setIsNewNumber ] = useState( true );
    const [ contact, setContact ] = useState( {} )

    // console.log( props );
    useEffect( () =>
    {
        setPhone( id )
        if ( props.location )
        {
            setIsNewNumber( false )
            setContact( props.location )
            setPhone( props.location.state.number )
        }
    }, [ id, props.location ] )

    const handleChangeMessage = e => setMessages( e.target.value );

    const sending = e =>
    {
        if ( !phoneValidation.isValid )
        {
            return false;
        }
        if ( phone === '' )
        {
            setPhoneValidation( { isValid: false, text: 'Phone number is invalid' } );
            return false;
        }
        setIsLoading( true );
        let msg = messages.split( '\n' ).join( '%0a' );
        let inserted = []
        inserted.push( { number: phone, text: msg, createdAt: new Date() } )
        let history = localStorage.getItem( 'history' )
        if ( history )
        {
            inserted = [ ...JSON.parse( history ) ]
            inserted.splice( 0, 0, { number: phone, text: msg, createdAt: new Date() } )
        }
        localStorage.setItem( 'history', JSON.stringify( inserted ) )
        setTimeout( () =>
        {
            window.open( `https://api.whatsapp.com/send?phone=${ phone }&text=${ msg }&source=&data=`, '_blank' );
            setPhone( '' );
            setMessages( '' );
            setIsLoading( false );
        }, 2000 );
        e.preventDefault();
    }

    const handleChangeNumberField = () =>
    {
        setIsNewNumber( !isNewNumber )
    }

    const handleNumberChange = ( value ) =>
    {
        setPhoneValidation( { isValid: true, text: '' } );
        setPhone( value );
        if ( isNaN( Number( value ) ) )
        {
            setPhoneValidation( { isValid: false, text: 'Phone number is invalid' } );
        }
    }

    return (
        <div className='container p-4'>
            <div className="row vh-100">
                <form action="">
                    <PhoneNumber
                        id={ id }
                        newNumber={ isNewNumber }
                        changeNumberField={ handleChangeNumberField }
                        onNumberChange={ handleNumberChange }
                        contactData={ contact }
                    />
                    {
                        phoneValidation.isValid ? '' : ( <span className='error'>{ phoneValidation.text }</span> )
                    }
                    <p>Using Personal Messages you can send message to unsaved number.</p>
                    <textarea name="personal" value={ messages } onChange={ handleChangeMessage } className='form-control' id="" cols="100" rows="15" />
                    <div className="d-grid gap-2 mt-3">
                        <SubmitButton handleClick={ sending } isLoading={ isLoading } />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default PersonalMessage
