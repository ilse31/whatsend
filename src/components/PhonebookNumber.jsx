import React from 'react'
import phoneBook from '../assets/icons/whh_phonebook.png'
import './module.css'
const PhonebookNumber = ( { changeField, data } ) =>
{
    return (
        <div>
            <p>Send To:</p>
            <p className='borders'>{ data.name } ({ data.number })</p>
            <p onClick={ changeField } className='phonebook' ><img src={ phoneBook } className='phone-book' alt="" />  Input new number</p>
        </div>
    )
}



export default PhonebookNumber
