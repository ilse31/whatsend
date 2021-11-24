import { useQuery } from '@apollo/client'
import Contact from '../../components/Contact'
import { getDataAll } from '../../graphql/Query'




const PhoneBook = () =>
{
    const {
        data: allData,
        loading: loadingAllData,
        error: errorAllData,
    } = useQuery( getDataAll );
    return (
        <div>
            <div className='container vh-100 p-3'>
                {/* { console.log( id ) } */ }
                <div className="card shadow-lg text-black">
                    <div className="card-body">
                        { console.log( allData ) }
                        { errorAllData && <p>Something Went Wrong...</p> }
                        { ( loadingAllData ) && <div className='center'>Loading data . . .</div> }
                        { !errorAllData && !loadingAllData && (
                            <Contact
                                data={ allData?.phonebook }
                            />
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PhoneBook
