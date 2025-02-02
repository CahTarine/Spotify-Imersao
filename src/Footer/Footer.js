import React from "react";
import './Footer.css';

const Footer = () => {
    return (   
    <footer className="premium">
        <div className="text">
            <p className="premium-text__title">EXPERIMENTE O PREMIUM DE GRAÇA</p>
            <p className="premium-text__subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
        </div>
        <div className="button">
            <button type="button">Inscreva-se grátis</button>
        </div>
    </footer>
    )
}

export default Footer;