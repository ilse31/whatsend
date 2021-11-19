import React from 'react'
import { NavLink } from 'react-router-dom'
import phoneBook from '../../assets/icons/whh_phonebook.png'
import './pm.css'
const PersonalMessage = () =>
{
    return (
        <div className='container p-4'>
            <div className="row">
                <form action="">
                    <div className="col-4">
                        <label htmlFor="telp" className="form-label">No Telp</label>
                        <br />
                        <input
                            className='input-telp'
                            name='telp'
                            id='telp'
                            type="tel"
                            minLength='12'
                            maxLength='13'
                            placeholder="6212345.."
                        />
                        <br />
                        <div className='phone pb-3'>
                            <NavLink className='phonebook' to='/phonebook'><img src={ phoneBook } className='phone-book' alt="" /> Phonebook</NavLink>
                        </div>
                    </div>
                    <p>Using Personal Messages you can send message to unsaved number.</p>
                    <textarea name="personal" className='form-control' id="" cols="100" rows="15" />
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-success" type="button">Button</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default PersonalMessage
