import { useLazyQuery, useQuery } from '@apollo/client'
import Contact from '../../components/Contact'
import { getById, getDataAll } from '../../graphql/Query'




const PhoneBook = () =>
{
    const {
        data: allData,
        loading: loadingAllData,
        error: errorAllData,
    } = useQuery( getDataAll );
    const [ getData, { data: dataId, loading: loadId, errorId } ] =
        useLazyQuery( getById );

    if ( errorId )
    {
        console.log( errorId );
        return null;
    }

    if ( loadId )
    {
        return "wait";
    }

    return (
        <div>
            <div className='container vh-100 p-3'>
                {/* { console.log( id ) } */ }
                <div className="card shadow-lg text-black">
                    <div className="card-body">
                        { console.log( allData ) }
                        { errorAllData && <p>Something Went Wrong...</p> }
                        { ( loadingAllData || loadId ) && <div className='center'>"wait"</div> }
                        { !errorAllData && !loadingAllData && !loadId && (
                            <Contact
                                data={ dataId ? dataId?.phonebook : allData?.phonebook }
                            />
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PhoneBook
