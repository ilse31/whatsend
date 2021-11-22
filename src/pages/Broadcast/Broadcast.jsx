import React from 'react'

const Broadcast = () =>
{
    return (
        <div className='container p-3'>
            <div className="row vh-100">
                <div className="col">
                    <form action="">
                        <p>Using Broadcast Messages you can send message to groups or Whatsapp contacts in bulk.</p>
                        <div className="mb-3">
                            <textarea name="broadcast" className='form-control' id="" cols="100" rows="15" />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-success" type="button">Button</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Broadcast
