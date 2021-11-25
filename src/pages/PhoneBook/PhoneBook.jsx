import { useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react';
import Contact from '../../components/Contact'
import Modals from '../../components/Modals';
import { DeleteData, insertData } from '../../graphql/Mutation';
import { getDataAll } from '../../graphql/Query'

const PhoneBook = () =>
{
    const {
        data: allData,
        loading: loadingAllData,
        error: errorAllData,
    } = useQuery( getDataAll );
    const [ addData, { loading: addLoading } ] = useMutation( insertData, {
        refetchQueries: [ getDataAll ],
    } );
    const [ deletedata, { loading: loadingDelete } ] = useMutation( DeleteData, {
        refetchQueries: [ getDataAll ],
    } );
    const [ , setPhonebooks ] = useState( [] )
    const [ modalProps, ] = useState( {} )

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

    const DeleteContact = ( id ) =>
    {
        deletedata( {
            variables: {
                id: id,
            },
        } );
        let initial = localStorage.getItem( 'phonebook' )
        initial = JSON.parse( initial )
        let idx = initial.findIndex( el => el.number === id )
        if ( idx === -1 )
        {
            initial.splice( idx, 1 )
            localStorage.setItem( 'phonebook', JSON.stringify( initial ) )
        }
    };



    const tambahPengunjung = ( newUser ) =>
    {
        console.log( 'ini new user', newUser );
        const newData = {
            ...newUser,
        };
        addData( {
            variables: {
                object: {
                    id: newData.id,
                    name: newData.name,
                    number: newData.number,
                },
            },
        } );
    };




    return (
        <div>
            <div className='container vh-100 p-3'>
                <Modals
                    tambahPengunjung={ tambahPengunjung }
                    handleInit={ getInitialPhonebook }
                    data={ modalProps }
                />
                <div className="card shadow-lg text-black">
                    <div className="card-body">
                        { errorAllData && <p>Something Went Wrong...</p> }
                        { ( loadingAllData || addLoading || loadingDelete ) && <div className='center'>Loading data . . .</div> }
                        { !errorAllData && !loadingAllData && (
                            <Contact
                                data={ allData?.phonebook }
                                hapusContact={ DeleteContact }
                            />
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PhoneBook
