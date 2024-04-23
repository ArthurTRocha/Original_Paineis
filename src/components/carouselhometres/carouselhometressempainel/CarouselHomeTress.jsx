import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import "./carouselhometres.css"

// Importe suas imagens aqui
import imagem1 from "./imagens/imagem1.jpg";
import imagem2 from "./imagens/imagem2.jpg";
import imagem3 from "./imagens/imagem3.jpg";

const CarouselHomeTres = () => {
  const [state] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
    // Defina suas imagens em um array
    slides: [
      {
        key: uuidv4(),
        content: (
          <div className="imagemCarouselHomeTresimg">
            <img src={imagem1} alt="Slide 1" />
          </div>
        )
      },
      {
        key: uuidv4(),
        content: (
          <div className="imagemCarouselHomeTresimg">
            <img src={imagem2} alt="Slide 2" />
          </div>
        )
      },
      {
        key: uuidv4(),
        content: (
          <div className="imagemCarouselHomeTresimg">
            <img src={imagem3} alt="Slide 3" />
          </div>
        )
      }
    ]
  });

  return (
    <div style={{ width: "90%", height: "500px", margin: "0 auto" }}>
      <Carousel
        slides={state.slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
        loop={true} // Definindo o loop como true para um loop infinito
        autoplay={true} // Deixando o autoplay ativado para um carrossel automático
      />
    </div>
  );
};

export default CarouselHomeTres;
