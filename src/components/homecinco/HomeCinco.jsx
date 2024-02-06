import React from "react";
import "./homecinco.css"
import Email from "../../assets/images/email.png"

function HomeCinco () {
    return (
        <div className="homeCinco">
            <div className="homeCincoo">

                <div className="unirTextosImagemHomeCinco">
                <div className="textoHomeCinco">
                    <h1>Contato</h1>
                    <p>Transforme sua visão em realidade. 
                        Entre em contato e faça seu orçamento com a 
                        Original Painéis</p>
                </div>
                <div className="imagemHomeCinco">
                    <img src={Email} alt="Imagem do simbolo do E-mail" />
                </div>
                </div>

                <div className="contatoHomeCinco">

                <form action="https://formsubmit.co/arthuteixeira30@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="http://localhost:5173/obrigado"/>


                    <label>
                        <input type="text" name="name" required 
                        placeholder="Nome"
                        />
                    </label>

                    <label>
                        <input type="email" name="email" required 
                        placeholder="E-mail"
                        />
                    </label>

                    <div className="telefoneSelecioneHomeCinco">
                    <label>
                        <input type="tel" name="phone" 
                        placeholder="Telefone"
                        />
                    </label>

                    <label>
                        <select name="selection">
                        <option value="" disabled hidden>Selecione o tipo de serviço</option>
                        <option value="opcao1">Opção 1</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                        </select>
                    </label>
                    </div>

                    <button type="submit"><h1>Enviar</h1></button>
                    </form>
   

                </div>
            </div>
        </div>
    )
}
export default HomeCinco;