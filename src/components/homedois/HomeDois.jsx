import React from "react";
import "./homedois.css"

function HomeDois () {
    return (
        <div className="homeDois">
            <div className="homeDoiss">
                <div className="textosHomeDois">
                    <h1>Serviços</h1>
                    <p>Transformamos conceitos em obras cativantes, 
                        criando identidades visuais memoráveis e impactantes. 
                        Descubra o poder da originalidade conosco</p>
                        <button><h2>Mais Serviços</h2></button>
                </div>
                <div className="cardsServicosHomeDois">
                    
                    <div className="cardUmHD">
                        <h1>Fachadas</h1>
                        <p>Destaque-se desde a entrada. 
                            Fachadas que contam sua história visualmente. 
                            Original Paineis, sua identidade em grande estilo.</p>
                    </div>
                    <div className="cardDoisHD">
                        <h1>Personalização De Frotas</h1>
                        <p>Marca que se move, impacto que permanece. 
                            Personalize sua frota com a Original Paineis.</p>
                        </div>
                        <div className="cardTresHD">
                        <h1>Letras Caixas</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. 
                            Dolor ac fermentum hac sed. 
                            Risus tellus a quis ut. Egestas </p>
                        </div>
                        <div className="cardQuatroHD">
                        <h1>Outddores</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. 
                            Dolor ac fermentum hac sed. 
                            Risus tellus a quis ut. Egestas </p>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default HomeDois;