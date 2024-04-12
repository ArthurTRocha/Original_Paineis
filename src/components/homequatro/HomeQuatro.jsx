import React from "react";
import './homequatro.css'
import Decorativa from "../../assets/images/decorativa.png"
import Decorativa1 from "../../assets/images/decorativa1.png"

function HomeQuatro () {
    return (
        <div className="homeQuatro">
            <div className="homeQuatroo" id="homeQuatroo">
                <h1>Nossos Serviços</h1>
                <div className="conteudoHomeQuatro">
                    <img className="ImagemUmHomeQuatro" src={Decorativa} alt="Imagem de um traço decorativo" />
                    <p>Personalização de frotas   •Fachadas   •Projetos especiais </p>
                        <p>•Impressos de grande e pequenos formatos </p>
                        <p>•Coberturas e toldos   •Adesivo de parede  •Totens   •Luminosos</p>
                        <p>Outdoors e placas   •Letras caixas   •Led neon</p>
                          <img className="ImagemDoisHomeQuatro" src={Decorativa1} alt="Imagem de um traço decorativo" />
                        
                </div>
            </div>
        </div>
    )
}
export default HomeQuatro;