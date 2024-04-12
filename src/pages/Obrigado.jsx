import React from "react";
import "../styles/obrigado.css"
import Header from "../components/header/Header"
import HeaderM from "../components/header/headerM/HeaderM";
import obrigado from "../assets/images/obrigado.png"
import logoObrigado from "../assets/images/original_logo1.png"
import Footer from "../components/footer/Footer"

function Obrigado () {
    return (
        <div className="obrigado">
            <div className="headerHome">
                <Header/>
            </div>
            <div className="headerMobile">
                <HeaderM/>
            </div>

            <div className="obrigadoC">
                <img src={obrigado} alt="Imagem batendo palmas" />
                <h1>Obrigado !</h1>
                <h2>A mensagem foi enviada com sucesso.</h2>
                <img src={logoObrigado} alt="Imagem logo Original Painéis" />
            </div>

            <Footer/>
        </div>
    )
}
export default Obrigado;