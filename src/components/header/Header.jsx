import React from "react";
import "./header.css"
import Logo from "../../assets/images/original_p.png"
import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className="header">
            <header className="headerP">
                <div className="logoHeader">
                    <img src={Logo} alt="Imagem da logo da Original Painéis" />
                </div>
                <div className="opcoesHeader">
                    <Link to='/home'><h3>Inicio</h3></Link>
                    <Link><h3>Serviços</h3></Link>
                    <Link to='/quemsomos'><h3>Quem Somos</h3></Link>
                    <Link><h3>Contato</h3></Link>
                </div>
            </header>
        </div>
    )
}

export default Header;