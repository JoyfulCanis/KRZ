import React from 'react';
import iconsData from "../assets/data/icons.json"


import Icon from './Icon';
import Credits from './Credits';
const Footer = () => {

    return (
        <footer className='footer'>
            <h2 className='footer__title'>Thomas Krzyzanski</h2>

            <div className='footer__icons-container'>
                {
                    iconsData.map((icon) => {
                        return (
                            <Icon key={icon.id} title={icon.name} link={icon.link} ></Icon>
                        )
                    })
                }
            </div>

            <Credits />
        </footer>
    );
};

export default Footer;