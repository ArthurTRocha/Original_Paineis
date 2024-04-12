import React from "react";
import "./header.css"
import Logo from "../../assets/images/original_p.png"
import { Link } from 'react-router-dom';

function Header () {
    

    function scrollTohomeQuatroo() {
        const homeQuatroo = document.getElementById('homeQuatroo');
        if (homeQuatroo) {
          homeQuatroo.scrollIntoView({ behavior: 'smooth' });
        }
      }


      function scrollTohomeCincoo() {
        const homeCincoo = document.getElementById('homeCincoo');
        if (homeCincoo) {
            homeCincoo.scrollIntoView({ behavior: 'smooth' });
        }
      }


    return (
        <div className="header">
            <header className="headerP">
                <div className="logoHeader">
                    <img src={Logo} alt="Imagem da logo da Original Painéis" />
                </div>
                <div className="opcoesHeader">
                    <Link to='/home'><h3>Inicio</h3></Link>

                    <Link to="/home?scrollToDiv=true">
                    <a href="#" onClick={scrollTohomeQuatroo}><h3>Serviços</h3></a>
                    </Link>

                    <Link to='/quemsomos'><h3>Quem Somos</h3></Link>

                    <Link to="/home?scrollToDivs=true">
                    <a href="#" onClick={scrollTohomeCincoo}><h3>Contato</h3></a>
                    </Link>

                    <Link to='/trabalheconosco'><h3>Trabalhe Conosco</h3></Link>
                </div>
            </header>
        </div>
    )
}

export default Header;