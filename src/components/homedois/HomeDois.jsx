import React from "react";
import "./homedois.css"

function HomeDois () {

        function scrollTohomeQuatroo() {
            const homeQuatroo = document.getElementById('homeQuatroo');
            if (homeQuatroo) {
              homeQuatroo.scrollIntoView({ behavior: 'smooth' });
            }
          }

    return (
        <div className="homeDois">
            <div className="homeDoiss">
                <div className="textosHomeDois">
                    <h1>Serviços</h1>
                    <p>Transformamos conceitos em obras cativantes, 
                        criando identidades visuais memoráveis e impactantes. 
                        Descubra o poder da originalidade conosco.</p>
                        <button onClick={scrollTohomeQuatroo}><h2>Mais Serviços</h2></button>
                </div>
                <div className="cardsServicosHomeDois">
                    
                    <div className="cardUmHD">
                        <h1>Fachadas</h1>
                        <p>Destaque-se desde a entrada. 
                            Fachadas que contam sua história visualmente. 
                            Original Painéis, sua identidade em grande estilo.</p>
                    </div>
                    <div className="cardDoisHD">
                        <h1>Personalização De Frotas</h1>
                        <p>Marca que se move, impacto que permanece. 
                            Personalize sua frota com a Original Painéis.</p>
                        </div>
                        <div className="cardTresHD">
                        <h1>Letras Caixas</h1>
                        <p>Elas são geralmente feitas de materiais como acrílico, metal, 
                            PVC ou alumínio e podem ser iluminadas ou não. 
                            As letras caixa proporcionam uma aparência sofisticada e profissional à 
                            fachada.</p>
                        </div>
                        <div className="cardQuatroHD">
                        <h1>Outdoors</h1>
                        <p>Os outdoors são projetados com gráficos coloridos e texto para 
                            transmitir mensagens publicitárias impactantes ao público. 
                            Feitos de materiais resistentes, promovem produtos, 
                            serviços ou eventos.</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default HomeDois;