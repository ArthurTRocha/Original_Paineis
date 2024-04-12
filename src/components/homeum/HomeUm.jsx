import React from "react";
import "./homeum.css"

function HomeUm () {
    function scrollTohomeQuatroo() {
        const homeQuatroo = document.getElementById('homeQuatroo');
        if (homeQuatroo) {
          homeQuatroo.scrollIntoView({ behavior: 'smooth' });
        }
      }

      function scrollTohomeCincoo() {
        const homeCincoo = document.getElementById('homeCincoo');
        if (homeCincoo) {
            homeCincoo.scrollIntoView({ behavior: 'smooth' });
        }
      }

      function scrollTohomeTres() {
        const homeTress = document.getElementById('homeTress');
        if (homeTress) {
            homeTress.scrollIntoView({ behavior: 'smooth' });
        }
      }
    return (
        <div className="homeUm">
            <div className="conteudoHomeUm">
                <div className="textosHomeUm">
                <h1>Transforme Sua Visão em Realidade</h1>
                <p>Com a Original Painéis, sua visão ganha vida! 
                    Somos especialistas em transformar ideias em realidade visual, 
                    proporcionando uma experiência única e personalizada. 
                    Deixe-nos dar vida à sua imaginação!</p>
                </div>
                <div className="buttonsHomeUm">
                    <button onClick={scrollTohomeTres} className="button1HomeUm"><h1>Trabalhos</h1></button>
                    <button onClick={scrollTohomeQuatroo} className="button2HomeUm"><h1>Serviços</h1></button>
                </div>
                <div className="finalHomeUm">
                <h3>Contrate nossos serviços e destaque-se visualmente com a Original Painéis.</h3>
                <button onClick={scrollTohomeCincoo}><h1>Contato</h1></button>
            </div>
            </div>
           
        </div>
    )
}
export default HomeUm;