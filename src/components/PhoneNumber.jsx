import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import phoneBook from '../assets/icons/whh_phonebook.png'

const InputNumber = ( { onNumberChange } ) =>
{
    const [ number, setNumber ] = useState( '' )
    const handleNumberChange = ( e ) =>
    {
        let value = e.target.value
        setNumber( value )
        onNumberChange( value )
    }
    return (
        <div className="col-4">
            <label htmlFor="telp" className="form-label">No Telp</label>
            <br />
            <input
                className='input-telp'
                name='telp'
                id='telp'
                type="telp"
                minLength='12'
                maxLength='13'
                value={ number }
                onChange={ handleNumberChange }
                placeholder="6212345.."
            />
            <br />
            <div className='phone pb-3'>
                <NavLink className='phonebook' to='/phonebook'><img src={ phoneBook } className='phone-book' alt="" /> Phonebook</NavLink>
            </div>
        </div>
    )
}

const PhonebookNumber = ( { data, changeField } ) =>
{
    console.log( 'ini data', data.name );
    return (
        <div>
            <p>Send To:</p>
            <p>{ data.name } ({ data.number })</p>
            <p onClick={ changeField } className='phonebook'><img src={ phoneBook } className='phone-book' alt="" />  Input new number</p>
        </div >
    )
}



const PhoneNumber = ( {
    newNumber,
    changeNumberField,
    onNumberChange,
    contactData
} ) =>
{
    if ( newNumber )
    {
        return <InputNumber onNumberChange={ onNumberChange } />
    } else
    {
        return <PhonebookNumber data={ contactData } changeField={ changeNumberField } />
    }
}

export default PhoneNumber;