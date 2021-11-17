import React from 'react'
import { NavLink } from 'react-router-dom'
import iconApps from '../assets/img/Group 2.png'
import './module.css'
const Navbar = () =>
{
    if ( window.screen.width <= 844 )
    {
        return (
            <nav className="navbar navbar-light bg-light border-top navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom">
                <ul className="navbar-nav nav-justified w-100">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="bi bi-house"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/personal-message" className="nav-link">
                            <i className="bi bi-chat-left-text-fill"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/broadcast" className="nav-link">
                            <i className="bi bi-broadcast"></i>
                        </a>
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
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">WhatsSend<img src={ iconApps } className='nav-icon' alt="" /></a>
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
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to='/account'>Ilham Prasetya</NavLink></li>
                                    <li><a className="dropdown-item" href="?">Log Out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
