import React, { useCallback, useEffect, useState } from 'react'
import './login.css'
import sideBannerLogin from '../../assets/img/amico.png'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import { CheckAuth } from '../../store/users'


const Login = () =>
{
    const [ auth, setAuth ] = useRecoilState( CheckAuth )
    const history = useHistory()
    const [ token, setToken ] = useState( '' )
    const [ data, setData ] = useState( '' )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const responseGoogle = ( useCallback( ( res ) =>
    {
        console.log( res );
        setData( res.profileObj )
        setToken( res.tokenId )
        setTimeout( () =>
        {
            history.push( '/' )
        }, 55 );
    } ) )
    useEffect( () =>
    {
        if ( data )
        {
            setAuth( {
                check: true,
                user: data.name,
                imgUrl: data.imageUrl,
                tokenId: token,
            } )
        }
    }, [ auth, data, setAuth, token ] )
    const failResponse = () =>
    {
        console.log( 'error' );
    }
    return (
        <div className='login-page'>
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col">
                        <h2 className='title-apps'>Whats'Send</h2>
                        <div className="d-grid gap-2">
                            <div className="login-button text-success">
                                <GoogleLogin
                                    clientId='180360695-uptib69ch610ar2k5u50uasdbmocdbhc.apps.googleusercontent.com'
                                    onSuccess={ responseGoogle }
                                    onFailure={ failResponse }
                                    cookiePolicy={ 'single_host_origin' }
                                />
                            </div>
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
