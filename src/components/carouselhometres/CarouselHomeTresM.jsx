import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carouselhometresm.css";
import axios from 'axios';

function CarouselHomeTresM() {
  const [images, setImages] = useState([]);

useEffect(() => {
  const fetchImages = async () => {
    try {
      const response = await axios.get("https://apioriginalpaineis.shop/api/v1/Imagens/BuscarPorCategoriaId/1");
      setImages(response.data); // Define o estado das imagens com os dados obtidos da API
      // console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar imagens da API:", error);
    }
  };

  fetchImages();
}, []);
 // Executa apenas uma vez ao montar o componente

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: false, // Esta linha remove as setas de navegação
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carouselHomeTresM">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="imagensCarouselHomeTresM">
            <img src={`https://apioriginalpaineis.shop/imagens/${image.nomeImagem}`} alt={`Imagem ${index + 1}`} />
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
}

export default CarouselHomeTresM;
