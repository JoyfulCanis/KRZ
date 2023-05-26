import React from 'react';

const Icon = ({title, link}) => {
    return (
        <a href={link} title={title}>
            <img className='footer__icons-container__icon'
            src={`./icons/${title}.png`} alt={title + " icon"}/>
        </a>
    );
};

export default Icon;