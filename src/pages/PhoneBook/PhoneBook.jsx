import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import Contact from '../../components/Contact'
import Modals from '../../components/Modals'
import { insertData } from '../../graphql/Mutation'
import { getData } from '../../graphql/Query'




const PhoneBook = () =>
{
    const {
        data: allData,
        loading: loadingAllData,
        error: errorAllData,
        refetch,
    } = useQuery( getData );
    const [ phonebooks, setPhonebooks ] = useState( [] )
    const [ modalProps, setModalProps ] = useState( {} )
    const [ addData, { loading: addLoading } ] = useMutation( insertData, {
        refetchQueries: [ getData ],
    } );
    const tambahPengunjung = ( newUser ) =>
    {
        const newData = {
            ...newUser,
        };
        addData( {
            variables: {
                object: {
                    id: newData.id,
                    name: newData.name,
                    number: newData.number
                },
            },
        } );
    };

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
            <div className='container vh-100 p-3'>
                <Modals
                    handleInit={ getInitialPhonebook }
                    data={ modalProps }
                />
                {/* { console.log( id ) } */ }
                <div className="card shadow-lg text-black">
                    <div className="card-body">
                        { console.log( tambahPengunjung ) }
                        {/* { phonebooks.map( ( item ) =>
                            <Contact
                                key={ item.number }
                                data={ item }
                                handleRemove={ handleRemove }
                                handleInit={ getInitialPhonebook }
                                editItem={ handleEditModal }
                                tambahPengunjung={ tambahPengunjung }
                            />
                        ) } */}
                        {
                            <Contact
                                data={ allData }
                                handleRemove={ handleRemove }
                                handleInit={ getInitialPhonebook }
                                editItem={ handleEditModal }
                                tambahPengunjung={ tambahPengunjung }
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PhoneBook
