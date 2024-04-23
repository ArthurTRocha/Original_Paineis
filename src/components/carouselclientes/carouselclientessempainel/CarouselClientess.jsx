import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carouselclientes.css";

// Importe suas imagens aqui
import imagem1 from "./imagens/imagem1.jpg";
import imagem2 from "./imagens/imagem2.jpg";
import imagem3 from "./imagens/imagem3.jpg";

function CarouselClientes() {
  // Defina suas imagens em um array
  const images = [imagem1, imagem2, imagem3];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    arrows: false, // Esta linha remove as setas de navegação
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carouselClientes">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="imagensCarouselClientes">
              <img src={image} alt={`Imagem ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselClientes;
