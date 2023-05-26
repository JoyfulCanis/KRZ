import React from 'react';
import PlanetAudio from './PlanetAudio';
import TitleAndTextBox from './TitleAndTextBox';

const HomeMain = () => {
    return (
        <main className='home-main'>
            <TitleAndTextBox />
            <section>
                <PlanetAudio />
            </section>
        </main>
    );
};

export default HomeMain;