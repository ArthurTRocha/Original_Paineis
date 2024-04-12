import React from "react";
import "../styles/pagina404.css"
import imagem404 from "../assets/images/404.png"
import logo404 from "../assets/images/original_logo1.png"
import Header from "../components/header/Header";
import HeaderM from "../components/header/headerM/HeaderM";
import Footer from "../components/footer/Footer";

function Pagina404 () {
    return (
        <div className="pagina404">
            <div className="headerHome">
                <Header/>
            </div>
            <div className="headerMobile">
                <HeaderM/>
            </div>

            <div className="pagina404C">

            <div className="imagem404">
                <img src={imagem404} alt="Imagem de um computador" />
            </div>
            <h1>Não encontramos essa página</h1>
            <div className="imagemLogo404">
                <img src={logo404} alt="Imagem logo Original Painéis" />
            </div>

            </div>

            <div className="footerP">
            <Footer/>
            </div>
        </div>
    )
}
export default Pagina404;