import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Manage = () => {
    return (
        <div>
            <Header />
            <main className='contact'>
                <div className='contact__container'>
                <h1 className='manage__title'>Vous ne passerez pas !</h1>
                <p className='warning'>Vous êtes sur une partie privée !</p>
                <div>
                <form className="login contact__form">
                    <label htmlFor="mail-log">identifiant</label>
                    <input type="text" className="mail-log" id="mail-log" />
                    <label htmlFor="pass-log">mot de passe</label>
                    <input type="text" className="pass-log" id="pass-log" />
                    <input type="submit" className="contact__submit submit-log" value="Krzonect" onClick={(element) => {
                        element.preventDefault()
                    }}/>
                </form>
                </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Manage;