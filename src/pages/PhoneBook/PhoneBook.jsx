
import React from 'react'
import Contact from '../../components/Contact'
import Modals from '../../components/Modals'

const PhoneBook = () =>
{
    const data = [
        {
            nama: 'Yoga',
            phone: 24,

        },
        {
            nama: 'Fahmi',
            phone: 24,

        },
        {
            nama: 'Ivan',
            phone: 24,

        },
        {
            nama: 'Fitri',
            phone: 24,
        }
    ]
    return (
        <div className='container p-3'>
            <Modals />
            <div className="card shadow-lg">
                <div className="card-body">
                    { data.map( ( item, index ) =>
                        <Contact
                            id={ index }
                            nama={ item.nama }
                            phone={ item.phone }
                        />
                    ) }
                </div>
            </div>
        </div>
    )
}

export default PhoneBook
