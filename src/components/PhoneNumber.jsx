import React from 'react'
import InputNumber from './InputNumber'
import PhonebookNumber from './PhonebookNumber'

const PhoneNumber = ( {
    newNumber,
    changeNumberField,
    onNumberChange,
    contactData,
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