import React from 'react'
import './home.css'
import bannerHome from '../../assets/img/chat-animate.svg'
const Home = () =>
{
    return (
        <div className='container home p-3'>
            <div className="row vh-100 align-items-center">
                <div className="col-12 col-md-4">
                    <div className='banner'>
                        <h3 className='home-banner-title'>Mudah dengan Chat dan Broadcast</h3>
                        <h5 className='subtitle-banner'>
                            Cocok untuk Event Organizer
                            Sangat cepat untuk mengingatkan Peserta
                        </h5>
                        <button className='btn btn-outline-success learn-button'>Learn More</button>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="right-banner">
                        <img src={ bannerHome } alt="" className='banner-home' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
