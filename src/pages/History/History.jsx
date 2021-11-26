import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import useDocumentTitle from '../../store/useDocumentTitle'
import Fade from 'react-reveal/Fade';

const History = () =>
{
    useDocumentTitle( 'Whatshy | History' )
    const [ histories, setHistories ] = useState( [] )
    useEffect( () =>
    {
        let initial = localStorage.getItem( 'history' )
        if ( initial )
        {
            initial = JSON.parse( initial )
            setHistories( [ ...initial ] )
        }
    }, [] )

    const HandleDelete = () =>
    {
        const swalWithBootstrapButtons = Swal.mixin( {
            customClass: {
                confirmButton: 'btn btn-danger ms-2',
                cancelButton: 'btn btn-secondary ms-2'
            },
            buttonsStyling: false
        } )

        swalWithBootstrapButtons.fire( {
            title: 'want to delete all of your history ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        } ).then( ( result ) =>
        {
            if ( result.isConfirmed )
            {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your history has been deleted.',
                    'success',
                )
                localStorage.removeItem( 'history' )
                setHistories( [] )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            )
            {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your history chat is safe :)',
                    'error'
                )
            }
        } )
    }

    return (
        <div className='container p-3'>
            <div className="row vh-100">
                <div className="col">
                    <Fade left cascade>
                        <p>Chat History</p>
                        <p>List your recent chat history</p>
                    </Fade>
                    <button className='rounded-pill btn btn-success mb-3' onClick={ HandleDelete }>Delete All History</button>
                    { histories.map( ( items, index ) => (
                        <div className="card shadow text-black mb-2" key={ index }>
                            <div className="card-body" >
                                <div className="row justify-content-between">
                                    <div className="col-sm-7">
                                        <p>{ items.number }</p>
                                        <p>{ items.text }</p>
                                    </div>
                                    <div className="col-sm-3">
                                        { new Date( items.createdAt ).toDateString() }-{ new Date( items.createdAt ).toTimeString().substr( 0, 5 ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) ) }
                </div>
            </div>
        </div>
    )
}

export default History