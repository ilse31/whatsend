import React from 'react'
import { NavLink } from 'react-router-dom'
import notFound from '../../assets/img/Saly-24.png'
import './notfoud.css'
import useDocumentTitle from '../../store/useDocumentTitle'
const NotFoundPage = () =>
{
    useDocumentTitle( 'Page Not Found' )
    return (
        <div className='container'>
            <h1 className='notfound-title '>404 NOT FOUND</h1>
            <img src={ notFound } className='position-relative img' alt="" />
            <NavLink to='/' className='btn btn-success not-found-button'>Go To Home Page</NavLink>
        </div >
    )
}

export default NotFoundPage
