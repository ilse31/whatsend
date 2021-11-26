import React from 'react'
import { Link } from 'react-router-dom'
import phoneBook from '../assets/icons/whh_phonebook.png'
const PhonebookNumber = ( { data, changeField } ) =>
{
    return (
        <div>
            <p>Send To:</p>
            <p>{ data.name } ({ data.number })</p>
            <Link onClick={ changeField } className='phonebook' to='/phonebook'><img src={ phoneBook } className='phone-book' alt="" />  Input new number</Link>
        </div>
    )
}



export default PhonebookNumber
