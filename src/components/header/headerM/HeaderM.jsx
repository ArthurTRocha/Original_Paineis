import React, { useState, useEffect, useRef } from "react";
import "./headerm.css";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import logoheaderm from "../../../assets/images/original_logo.png"

function HeaderM() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAberto(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

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
    <div className="headerM">
      <div className="headerrM" ref={menuRef}>
        <IoMdMenu className="redesocialheaderM" onClick={toggleMenu} />
        {menuAberto && (
          <div className="menuMobile">
            {/* Conteúdo do menu aqui */}
            <ul>
              <Link to='/home'><h3>Inicio</h3></Link>
              <Link to="/home?scrollToDiv=true">
              <a href="#" onClick={scrollTohomeQuatroo}><h3>Serviços</h3></a>
              </Link>
              <Link to='/quemsomos'><h3>Quem Somos</h3></Link>
              <Link to="/home?scrollToDivs=true">
              <a href="#" onClick={scrollTohomeCincoo}><h3>Contato</h3></a>
              </Link>
              <Link to='/trabalheconosco'><h3>Trabalhe Conosco</h3></Link>
            </ul>
            <div className="redesociaisHeaderMP">
            <div className="redesociaisHeaderM">
             <a href="http://www.tiktok.com/@originalpaineis" target="blank"><FaTiktok className="redesocialheaderM"/></a> 
             <a href="https://www.instagram.com/originalpaineis?igsh=czVuMTBvaHZhZXBk" target="blank"><FaInstagram className="redesocialheaderM"/></a>
            </div>
            </div>
            <div className="imagemLogoHeaderM">
              <img src={logoheaderm} alt="Imagem logo Original Paineis" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderM;
