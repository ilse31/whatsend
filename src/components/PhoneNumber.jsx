import React from 'react'
import InputNumber from './InputNumber'
import PhonebookNumber from './PhonebookNumber'

const PhoneNumber = ( {
    newNumber,
    changeNumberField,
    onNumberChange,
    contactData,
    id
} ) =>
{
    if ( newNumber )
    {
        return <InputNumber id={ id } onNumberChange={ onNumberChange } />
    } else
    {
        return <PhonebookNumber data={ contactData } changeField={ changeNumberField } />
    }
}

export default PhoneNumber;