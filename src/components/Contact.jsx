import React from 'react'
import ListContact from './ListContact'

const Contact = ( props ) =>
{
    return (
        <div>
            { props.data?.map( ( item ) => (
                <ListContact
                    key={ item.id }
                    data={ item }
                />
            ) ) }
        </div >
    )
}

export default Contact
