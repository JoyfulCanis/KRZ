import React from 'react';
import credits from "../assets/data/credits.json"
const Credits = () => {
    return (
        <ul className='footer__credits'>
            {
                credits.map(
                    (credit) => {
                        return (
                            <li key={credit.id}>
                                <a href={credit.link} title={`${credit.author} Flaticon page`}>{credit.type} created by {credit.author} - Flaticon</a>
                            </li>

                        )
                    }
                )
            }

        </ul>
    );
};

export default Credits;