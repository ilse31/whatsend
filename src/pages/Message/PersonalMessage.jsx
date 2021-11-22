import React, { useEffect, useState } from 'react'
import PhoneNumber from '../../components/PhoneNumber'
import './pm.css'

const SubmitButton = ( props ) =>
{
    if ( props.isLoading )
    {
        return (
            <button isLoading className="btn btn-success" type="button">Sending . . .</button>
        )
    }
    return (
        <button onClick={ props.handleClick } className="btn btn-success" type="button">Send</button>
    )
}


const PersonalMessage = ( props ) =>
{
    const [ phone, setPhone ] = useState( '' )
    const [ messages, setMessages ] = useState( '' )
    const [ isLoading, setIsLoading ] = useState( false )
    const [ phoValidate, setPhoValidate ] = useState( {
        isvalid: true,
        text: ''
    } )
    const [ contact, setContact ] = useState( {} )
    const [ isNewNmber, setisNewNmber ] = useState( '' )
    useEffect( () =>
    {
        if ( props.location )
        {
            setisNewNmber( false )
            setContact( props.location )
            setPhone( props.location.state.number )
        }
    }, [ props.location ] )
    const handleChangeMessage = ( e ) =>
    {
        setMessages( e.target.value )
    }
    const sending = ( e ) =>
    {
        if ( !phoValidate.isvalid )
        {
            return false
        } if ( phone === '' )
        {
            setPhoValidate( { isvalid: false, text: 'Phone Number is invalid' } )
            return false
        }
        setIsLoading( true )
        let message = messages.split( '\n' ).join( '%0a' )
        let inserted = []
        inserted.push( { number: phone, text: message, createdAt: new Date() } )
        let history = localStorage.getItem( 'history' )
        if ( history )
        {
            inserted = [ ...JSON.parse( history ) ]
            inserted.splice( 0, 0, {
                number: phone, text: message, createdAt: new Date()
            } )
        }
        localStorage.setItem( 'history', JSON.stringify( inserted ) )
        setTimeout( () =>
        {
            window.open( `https://api.whatsapp.com/send?phone=${ phone }&text=${ message }&source=&data=`, '_blank' );
            setPhone( '' );
            setMessages( '' );
            setIsLoading( false );
        }, 2000 );
        e.preventDefault();
    }
    const handleChangeNumberField = () =>
    {
        setisNewNmber( !isNewNmber )
    }
    const handlerNuberChange = ( value ) =>
    {
        setPhoValidate( { isvalid: true, text: '' } )
        setPhone( value )
        if ( isNaN( Number( value ) ) )
        {
            setPhoValidate( { isvalid: false, text: 'Phone is inval' } )
        }
    }

    return (
        <div className='container p-4'>
            <div className="row">
                <form action="">
                    <PhoneNumber
                        newNumber={ isNewNmber }
                        changeNumberField={ handleChangeNumberField }
                        onNumberChange={ handlerNuberChange }
                        contactData={ contact }
                    />
                    <p>Using Personal Messages you can send message to unsaved number.</p>
                    <textarea name="personal" value={ messages } onChange={ handleChangeMessage } className='form-control' id="" cols="100" rows="15" />
                    <div className="d-grid gap-2 mt-3">
                        <SubmitButton isLoading={ isLoading } handleClick={ sending } />
                    </div>
                </form>
            </div>
        </div >
    )
}
export default PersonalMessage
