import React from "react";
import "./hometres.css"
import CarouselHomeTres from "../carouselhometres/CarouselHomeTres"
import CarouselClientes from "../carouselclientes/CarouselClientes";

function HomeTres () {
    return (
        <div className="homeTres">
            <div className="homeTress">

            <h1>Nossos trabalhos</h1>
            <div className="carouselHomeTres">
                <CarouselHomeTres/>
            </div>
            <div className="finalHomeTres">
                <h2>Explore a galeria da Original Painéis.
                    Conheça nossos trabalhos e inspire-se na arte da comunicação visual
                    </h2>
                    <button><h1>Contato</h1></button>
            </div>
            <div className="carouselClientesHomeTres">
                <CarouselClientes/>
            </div>
            </div>
        </div>
    )
}
export default HomeTres;