
import React, { useEffect, useState } from 'react'
import Contact from '../../components/Contact'
import Modals from '../../components/Modals'


const PhoneBook = () =>
{
    const [ phonebooks, setPhonebooks ] = useState( [] )
    const [ modalProps, setModalProps ] = useState( {} )
    const handleEditModal = ( { number } ) =>
    {
        let initial = localStorage.getItem( 'phonebook' )
        initial = JSON.parse( initial )
        let idx = initial.findIndex( el => el.number === number )
        if ( idx !== -1 )
        {
            setModalProps( initial[ idx ] )
        }
    }
    const getInitialPhonebook = () =>
    {
        let initial = localStorage.getItem( 'phonebook' )
        if ( initial )
        {
            let arrays = JSON.parse( initial )
            setPhonebooks( arrays )
        }
    }
    useEffect( () =>
    {
        getInitialPhonebook()
    }, [] )
    const handleRemove = ( { number } ) =>
    {
        let initial = localStorage.getItem( 'phonebook' )
        initial = JSON.parse( initial )
        let idx = initial.findIndex( el => el.number === number )
        if ( idx !== -1 )
        {
            initial.splice( idx, 1 )
            localStorage.setItem( 'phonebook', JSON.stringify( initial ) )
        }
    }
    return (
        <div>
            <div className='container p-3'>
                <Modals
                    handleInit={ getInitialPhonebook }
                    data={ modalProps }
                />
                <div className="card shadow-lg text-black">
                    <div className="card-body">
                        { phonebooks.map( ( item ) =>
                            <Contact
                                key={ item.number }
                                data={ item }
                                handleRemove={ handleRemove }
                                handleInit={ getInitialPhonebook }
                                editItem={ handleEditModal }
                            />
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PhoneBook
