import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CheckAuth } from '../../store/users'
import './profile.css'
const Profile = () =>
{
    const auth = useRecoilValue( CheckAuth )
    const [ , setauthUsers ] = useRecoilState( CheckAuth )
    const handleClick = () =>
    {
        setauthUsers( {
            check: false,
            user: '',
            imgUrl: '',
            tokenId: '',
        } )
        localStorage.removeItem( 'recoil-persist' )
    }
    return (
        <div className='container position-relative'>
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col">
                    <div className="profile">
                        <img src={ auth.imgUrl } className='img-profile' alt="" />
                        <h5 className='title-name'>{ auth.user }</h5>
                        <div className="row profile-button justify-content-center">
                            <div className="col">
                                <button className='btn btn-outline-success text-success button-profiles mb-3 rounded-pill' onClick={ handleClick }>Log Out Google</button>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
