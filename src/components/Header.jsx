import React from 'react';
import mainLogo from '../assets/images/logo/krz-main-logo.png'
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from './Navigation';


const Header = () => {
    const location = useLocation().pathname;

    return (
        <header className='header'>
            <div className={location === "/" ?'header__logo-container':'header__logo-container header__logo-container--pulsing'}>
                <NavLink to="/"
                className={(nav) => nav.isActive? "home-nav--active": "home-nav"}>
                <img className='header__logo-img' src={mainLogo} alt="logo de KRZ" />
                </NavLink>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;