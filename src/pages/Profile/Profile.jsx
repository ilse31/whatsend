import React from 'react'
import { useRecoilValue } from 'recoil'
import { CheckAuth } from '../../store/users'
import './profile.css'
const Profile = () =>
{
    const auth = useRecoilValue( CheckAuth )
    return (
        <div className='container position-relative'>
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col">
                    <div className="profile">
                        <img src={ auth.imgUrl } className='img-profile' alt="" />
                        <h5 className='title-name'>{ auth.user }</h5>
                        <div className="row profile-button justify-content-center">
                            <div className="col">
                                <button className='btn btn-outline-success button-profiles mb-3 rounded-pill'>Log Out Google</button>
                            </div>
                            <div className="col">
                                <button className='btn btn-outline-success rounded-pill button-profiles'>Sign Up Facebook</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
