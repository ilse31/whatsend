import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import iconApps from '../assets/img/Group 2.png'
import { CheckAuth } from '../store/users'
import './module.css'
const Navbar = ( { Theme, ThemeSwitch } ) =>
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

    if ( window.screen.width <= 844 )
    {
        return (
            <nav className="navbar navbar-light bg-light border-top navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom">
                <ul className="navbar-nav nav-justified w-100">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link">
                            <i className="bi bi-house"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/personal-message" className="nav-link">
                            <i className="bi bi-chat-left-text-fill"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/broadcast" className="nav-link">
                            <i className="bi bi-broadcast"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/history" className="nav-link">
                            <i className="bi bi-clock-history"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/account' className="nav-link">
                            <i className="bi bi-person-circle"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/account' className="nav-link">
                            <i className="bi bi-info-circle-fill"></i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
    else
    {
        return (
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand ijo" href="/">WhatShy<img src={ iconApps } className='nav-icon' alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link item-navbar" to='/' >HOME</NavLink>
                            </li>
                            <li className="nav-item dropdown item-navbar">
                                <a className="nav-link dropdown-toggle" href="?" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MESSAGE
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to='/personal-message' >Personal Message</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/broadcast' >Broadcast Message</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link item-navbar" to='/history'>HISTORY</NavLink>
                            </li>
                            <li className="nav-item dropdown item-navbar">
                                <a className="nav-link dropdown-toggle" href="?" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ACCOUNT
                                </a>
                                { auth.check ? (
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to='/account'>{ auth.user }</NavLink></li>
                                        <li><p className="dropdown-item" onClick={ handleClick }>Log Out</p></li>
                                    </ul> ) : (
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to='/login'>Login</NavLink></li>
                                    </ul> ) }
                            </li>
                        </ul>
                        <label id="switch" className="switch">
                            <input type="checkbox" defaultChecked={ Theme === 'dark' ? true : false } onChange={ () => ThemeSwitch() } id="slider" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
