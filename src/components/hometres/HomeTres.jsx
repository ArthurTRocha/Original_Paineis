import React from "react";
import "./hometres.css"
import CarouselHomeTres from "../carouselhometres/CarouselHomeTres"
import CarouselClientes from "../carouselclientes/CarouselClientes";
import CarouselHomeTresM from "../carouselhometres/CarouselHomeTresM";

function HomeTres () {

    function scrollTohomeCincoo() {
        const homeCincoo = document.getElementById('homeCincoo');
        if (homeCincoo) {
            homeCincoo.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return (
        <div className="homeTres">
            <div className="homeTress" id="homeTress">

            <h1>Nossos trabalhos</h1>

            <div className="carouselHomeTresP">
            <div className="carouselHomeTres">
                <CarouselHomeTres/>
            </div>
            </div>
            <div className="carouselHomeTressM">
                <CarouselHomeTresM/>
            </div>

            <div className="finalHomeTres">
                <h2>Explore a galeria da Original Painéis.
                    Conheça nossos trabalhos e inspire-se na arte da comunicação visual
                    </h2>
                    <button onClick={scrollTohomeCincoo}><h1>Contato</h1></button>
            </div>

            <div className="carouselClientesHomeTres">
                <CarouselClientes/>
            </div>
            

            </div>
        </div>
    )
}
export default HomeTres;