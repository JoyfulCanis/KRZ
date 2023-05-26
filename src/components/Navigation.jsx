import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation().pathname;
    const navText1 = "Mission"
    const navText2 = "Contact"

    return (
        <nav className="header__navigation">
            <ul className="header__navigation-container">

                <li className={location ==="/About"?'':'header__navigation__element'}>
                    <NavLink to="/About"
                     title="A propos de l'artiste"
                     className={(nav) => nav.isActive? "nav--active": ""}
                     >
                        {navText1}
                    </NavLink>
                </li>
                <li className={location ==="/Contact"?'':'header__navigation__element'}>
                    <NavLink to="/Contact"
                    className={(nav) => nav.isActive? ("nav--active"): ""}
                    title="Contacter l'artiste">
                        {navText2}
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default Navigation;