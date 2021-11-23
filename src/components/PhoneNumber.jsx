import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import phoneBook from '../assets/icons/whh_phonebook.png'

const InputNumber = ( { onNumberChange } ) =>
{
    const [ number, setNumber ] = useState( '' )
    const handlerNuberChange = ( e ) =>
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
                type="tel"
                minLength='12'
                maxLength='13'
                value={ number }
                onChange={ handlerNuberChange }
                placeholder="6212345.."
            />
            <br />
            <div className='phone pb-3'>
                <NavLink className='phonebook' to='/phonebook'><img src={ phoneBook } className='phone-book' alt="" /> Phonebook</NavLink>
            </div>
        </div>
    )
}

const PhoneBookNumber = ( { data, changeField } ) =>
{
    return (
        <div>
            <p>Send To=</p>
            <p>{ data.name } ({ data.number })</p>
            <Link onClick={ changeField } className='phonebook' to='/phonebook'><img src={ phoneBook } className='phone-book' alt="" /> Phonebook</Link>
        </div>
    )
}



const PhoneNumber = ( { newNumber, changeNumberField, onNumberChange, contactData } ) =>
{
    if ( newNumber )
    {
        return <InputNumber onNumberChange={ onNumberChange } />
    }
    else
    {
        return <PhoneBookNumber data={ contactData } changeField={ changeNumberField } />
    }
}

export default PhoneNumber