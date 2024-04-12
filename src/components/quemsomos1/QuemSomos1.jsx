import React from "react";
import "./quemsomos1.css"
import Logo from "../../assets/images/original_logo1.png"

function QuemSomos1 () {
    return (
        <div className="quemSomos1">
            <div className="quemSomoss1">
            <h1>Quem Somos?</h1>
            <p>Original Painéis é uma líder confiável em Comunicação Visual, 
                com 15 anos de experiência e soluções criativas. 
                Valorizamos cada imagem como uma história, transformando ideias em designs envolventes e 
                impactantes. 
               </p>
            </div>
            <div className="conteudo2QuemSomos1">
                <img src={Logo} alt="Logo Original Paineis" />
                <p>Nosso compromisso com qualidade, inovação e atendimento ao cliente nos diferencia, 
                    construindo parcerias duradouras. Investimos em tecnologia e tendências, 
                    capacitando nossa equipe para oferecer as melhores soluções. 
                    Escolha a Original Painéis para uma equipe comprometida com excelência e criatividade. 
                    Junte-se a nós e transforme sua visão em realidade!</p>
            </div>

        </div>
    )
}

export default QuemSomos1;