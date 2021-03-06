import React from 'react'
import profile from '../../assets/img/Rectangle 26.png'
import './profile.css'
const Profile = () =>
{
    return (
        <div className='container position-relative'>
            <div className="row justify-content-center align-items-center">
                <div className="col">
                    <div className="profile">
                        <img src={ profile } alt="" />
                        <h5 className='title-name'>Kristin Watson</h5>
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
