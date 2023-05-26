import React from 'react';

const HomeMain = () => {
    return (
        <main className='home-main'>
            <div className='home-main__title-container'>
                <h1 className="home-main__main-title">KRZ: Constellation de Compositions Musicales</h1>
                <p className='home-main__main-text'>Embarquez pour une odyssée sonore où chaque note scintille telle une étoile dans l'immensité nocturne. Enfilez votre combinaison d'explorateur, car dans cet univers, chaque genre musical forme sa propre galaxie, alors soyez prêts à traverser d'incroyables variations atmosphériques au moindre tournant. </p>
            </div>
            <section>
                <div className='home-main__planet'></div>
            </section>
        </main>
    );
};

export default HomeMain;