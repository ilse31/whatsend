import React from 'react'
import './login.css'
import sideBannerLogin from '../../assets/img/amico.png'
import googleIcons from '../../assets/icons/flat-color-icons_google.png'
import FacebookIcons from '../../assets/icons/fb.png'

const Login = () =>
{
    return (
        <div className='login-page'>
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col">
                        <h2 className='title-apps'>Whats'Send</h2>
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-success login-button text-success" type="button"><img src={ googleIcons } className='icon-login' alt="" /> Login With Google</button>
                            <button class="btn btn-outline-success login-button text-success" type="button"><img src={ FacebookIcons } className='icon-login' alt="" /> Login With Facebook</button>
                        </div>
                    </div>
                    <div className="col">
                        <img src={ sideBannerLogin } className='banner-login' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
