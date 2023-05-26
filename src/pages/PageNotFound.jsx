import React from 'react';
import Header from '../components/Header';
import lostKrz from "../assets/images/lost-krz.png"
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div>
            <Header />
            <main className='not-found'>
                <div className='not-found__title-container'>
                <p className='not-found__pretitle'>PLANET</p>
                <h1 className='not-found__title'>404</h1>
                </div>
                <div className='not-found__img-container'>
                    
                    <img className='not-found__img' src={lostKrz} alt='Astronaute perdu' />
                </div>
                <NavLink className='not-found__homelink' to="/">
                    <p >I want to go home, please...</p>
                </NavLink>
            </main>

            <Footer />
        </div>
    );
};

export default PageNotFound;