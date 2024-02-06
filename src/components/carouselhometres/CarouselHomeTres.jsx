import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";

const CarouselHomeTres = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  });

  const slides = [
    "https://picsum.photos/800/801/?random",
    "https://picsum.photos/800/802/?random",
    "https://picsum.photos/600/803/?random",
    "https://picsum.photos/800/500/?random",
    "https://picsum.photos/800/804/?random",
    "https://picsum.photos/500/800/?random",
    "https://picsum.photos/800/600/?random",
    "https://picsum.photos/805/800/?random"
  ].map((imgSrc, index) => ({
    key: uuidv4(),
    content: <img src={imgSrc} alt={`Slide ${index + 1}`} />,
    onClick: () => setState({ goToSlide: index })
  }));

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  const handleTransitionButtonClick = (newConfig) => {
    setState({ ...state, config: newConfig });
  };

  return (
    <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
      <div style={{ margin: "0 auto", marginTop: "2rem", width: "50%" }}>
        {/* <label>Go to slide: </label>
        <input name="goToSlide" onChange={onChangeInput} />

        <label>Offset Radius: </label>
        <input name="offsetRadius" onChange={onChangeInput} />

        <label>Show navigation: </label> */}
        {/* <input
          type="checkbox"
          checked={state.showNavigation}
          name="showNavigation"
          onChange={(e) => {
            setState({ ...state, showNavigation: e.target.checked });
          }}
        /> */}

        <div>
          {/* <button onClick={() => handleTransitionButtonClick(config.gentle)} disabled={state.config === config.gentle}>
            Gentle Transition
          </button>
          <button onClick={() => handleTransitionButtonClick(config.slow)} disabled={state.config === config.slow}>
            Slow Transition
          </button>
          <button onClick={() => handleTransitionButtonClick(config.wobbly)} disabled={state.config === config.wobbly}>
            Wobbly Transition
          </button>
          <button onClick={() => handleTransitionButtonClick(config.stiff)} disabled={state.config === config.stiff}>
            Stiff Transition
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CarouselHomeTres;
