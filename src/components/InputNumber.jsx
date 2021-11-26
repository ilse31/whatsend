import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import phoneBook from '../assets/icons/whh_phonebook.png'
const InputNumber = ( { onNumberChange, id } ) =>
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
                value={ id }
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

export default InputNumber
