import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import axios from "axios";
import "./carouselhometres.css"

const CarouselHomeTres = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
    slides: [] // Armazena as imagens a serem exibidas no carousel
  });

  useEffect(() => {
    // Função para buscar imagens da API
    const fetchImages = async () => {
      try {
        // Substitua "url_da_sua_api" pela URL real da sua API que retorna as imagens
        const response = await axios.get("https://apioriginalpaineis.shop/api/v1/Imagens/BuscarPorCategoriaId/1");
        const data = response.data; // Extrai os dados da resposta
        console.log(data);
        // Mapeie os dados recebidos para formatá-los corretamente para o carousel
        const slides = data.map((imageSrc, index) => ({
          key: uuidv4(),
          content: (
            <div className="imagemCarouselHomeTresimg">
          <img src={`https://apioriginalpaineis.shop/imagens/${imageSrc.nomeImagem}`} 
          alt={`Slide ${index + 1}`}    
          />
          </div>
          )
        }));
        
        setState(prevState => ({ ...prevState, slides: slides })); // Atualiza o estado com as imagens formatadas
      } catch (error) {
        console.error("Erro ao buscar imagens da API:", error);
      }
    };

    fetchImages();

    // Configurar o autoplay para mudar automaticamente de slide
    const interval = setInterval(() => {
      setState(prevState => ({ ...prevState, goToSlide: (prevState.goToSlide + 1) % prevState.slides.length }));
    }, 3000); // Tempo em milissegundos entre cada slide

    // Limpar o intervalo quando o componente for desmontado para evitar vazamentos de memória
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "90%", height: "500px", margin: "0 auto" }}>
      <Carousel
        slides={state.slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
        loop={true} // Definindo o loop como true para um loop infinito
        autoplay={false} // Desativar o autoplay aqui, pois ele será controlado manualmente no useEffect
      />
    </div>
  );
};

export default CarouselHomeTres;
