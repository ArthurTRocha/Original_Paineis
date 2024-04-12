import React from "react";
import "./footer.css"
import Logo from "../../assets/images/logo_branca.png"
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer () {
    return (
        <footer className="footer">
             <footer className="footerr">

                <div className="unirFooter">
            <div className="logoFooter">
                <img src={Logo} alt="Imagem da logo da Original Paineis" />
            </div>

            <div className="redesSociaisFooter">
                <a href="http://www.tiktok.com/@originalpaineis" target="blank">
                <FaTiktok/>
                </a>

                <a href="https://www.instagram.com/originalpaineis?igsh=czVuMTBvaHZhZXBk" target="blank">
                <FaInstagram/>
                </a>
            </div>

            <div className="informacoesFooter">
                <h1>Entre em contato</h1>

                <div className="emailInfoFooter">
                <MdOutlineEmail className="iconeFooter"/>
                <p>comercial@originalpaineis.com</p>
                </div>
                
                <div className="telefoneInfoFooter">
                <FaPhoneAlt className="iconeFooter"/>
                <p>(48) 99673-4066</p>
                </div>

                <div className="enderecoInfoFooter">
                <FaMapMarkerAlt className="iconeFooter"/>
                <p>R. Tangará, 33 – Forquilhas
                São José SC / 88107-626</p>
                </div>
                
            </div>
            </div>
            <div className="footerFinal">
            <p className="pFinalFooter">Todos direitos autorais reservados - Original Painéis 2024</p>
            </div>
           </footer>
        </footer>
    )
}
export default Footer;