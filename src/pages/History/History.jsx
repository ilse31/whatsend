import React, { useEffect, useState } from 'react'

const History = () =>
{
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

    return (
        <div className='container p-3'>
            <div className="row vh-100">
                <div className="col">
                    <p>Chat History</p>
                    <p>List your recent chat history</p>
                    { histories.map( items => (
                        <div className="card shadow text-black mb-2">
                            <div className="card-body">
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
