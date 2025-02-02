import React, {useState} from "react";
import {requestApi} from '../api';
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

const Header = ({onSearchResults}) => {
    const [searchValue, setSearchValue] = useState("");

        const handleChange = async (event) => {
            const value = event.target.value;
            setSearchValue(value);
    
            if (value) {
                const results = await requestApi(value);
                onSearchResults(results); // Enviando resultados para o componente pai
            } else {
                onSearchResults([]); // Limpa os resultados quando input está vazio
            }
    };

    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta para esquerda"/>
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta para direita"/>
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt=""/>
                <input
                    id="search-input" 
                    maxLength="800"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                    value={searchValue} // Usando o estado aqui
                    onChange={handleChange} // Adicionando o onChange
                />
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;