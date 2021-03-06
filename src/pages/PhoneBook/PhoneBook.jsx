
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
    // let id = useParams();

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
            <div className='container vh-100 p-3'>
                <Modals
                    handleInit={ getInitialPhonebook }
                    data={ modalProps }
                />
                {/* { console.log( id ) } */ }
                <div className="card shadow-lg text-black">
                    <div className="card-body">
                        {
                            phonebooks.length > 0 ?
                                phonebooks.map( el =>
                                {
                                    return (
                                        <Contact
                                            key={ el.number }
                                            data={ el }
                                            handleRemove={ handleRemove }
                                            handleInit={ getInitialPhonebook }
                                            editModal={ handleEditModal }
                                        />
                                    )
                                } ) : (
                                    'we are sve tour data in localStorage'
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PhoneBook
