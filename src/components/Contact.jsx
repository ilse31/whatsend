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
                    handleRemove={ props.hapusContact }
                    editItem={ props.edit }
                    handleInit={ props.init }
                />
            ) ) }
        </div >
    )
}

export default Contact
