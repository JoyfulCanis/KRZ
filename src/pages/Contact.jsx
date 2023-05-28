import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
const Contact = () => {
    return (
        <div>
            <Header />
            <main className='contact'>
                <div className='contact__container'>
                    <h1 className='contact__title'>Mettez-vous en orbite et contactez-moi</h1>
                    <form className='contact__form'>
                        <div className='contact__id-box'>
                            <label htmlFor="" className="contact__label">Nom</label>
                            <input type="text" className="contact__name" />
                        </div>
                        <div className='contact__id-box'>
                            <label htmlFor="" className="contact__label">Adresse Mail</label>
                            <input type="text" className="contact__mail" />
                        </div>
                        <div className='contact__msg-box'>
                            <label htmlFor="" className="contact__label">Message</label>
                            <textarea className="contact__message" placeholder="Je suis votre plus grand fan, et j'ai beaucoup d'argent..." />
                        </div>
                        <input type="submit" className="contact__submit" value="Mettre en orbite" onClick={(e)=>{
                            e.preventDefault()
                        }}/>

                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;