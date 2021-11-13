import React from 'react'
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
                        <a href="/" className="nav-link">
                            <i className="bi bi-chat-left-text-fill"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="bi bi-broadcast"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="bi bi-clock-history"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="bi bi-person-circle"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="bi bi-info-circle-fill"></i>
                        </a>
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
                                <a className="nav-link item-navbar" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link item-navbar" href="/">MESSAGE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link item-navbar" href="/">HISTORY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link item-navbar" href="/">PROFILE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
