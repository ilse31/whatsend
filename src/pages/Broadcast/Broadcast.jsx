import React, { useState } from 'react'

const Broadcast = () =>
{
    const [ messages, setMessages ] = useState( '' )
    const [ loading, setLoading ] = useState( false )
    const handleChageMessage = ( e ) =>
    {
        setMessages( e.target.value )
    }
    const sending = () =>
    {
        setLoading( true )
        setTimeout( () =>
        {
            let mesage = messages.split( '\n' ).join( '%0a' )
            window.open( `https://api.whatsapp.com/send?text=${ mesage }&source=&data=`, '_blank' )
            setMessages( '' )
            setLoading( false )
        }, 3000 );
    }
    return (
        <div className='container p-3'>
            <div className="row vh-100">
                <div className="col">
                    <form action="">
                        <p>Using Broadcast Messages you can send message to groups or Whatsapp contacts in bulk.</p>
                        <div className="mb-3">
                            <textarea
                                name="broadcast"
                                className='form-control'
                                cols="100"
                                value={ messages }
                                onChange={ handleChageMessage }
                                rows="15" />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-success" onClick={ sending } type="button">{ loading ? ( <div>
                                <span className='spinner-border spinner-border-sm me-3' role='status' aria-hidden='true'></span>
                                <span class="visually-hidden">Loading...</span>Loading . . .
                            </div>
                            ) : 'Send' }</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Broadcast
