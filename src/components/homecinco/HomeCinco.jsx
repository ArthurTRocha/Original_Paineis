import React from "react";
import "./homecinco.css"
import Email from "../../assets/images/email.png"

function HomeCinco () {
    return (
        <div className="homeCinco">
            <div className="homeCincoo"  id="homeCincoo">

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

                <form action="https://formsubmit.co/comercial@originalpainies.com.br" method="POST">
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="https://originalpaineis.com.br/obrigado"/>


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
                        <option value="opcao1">Personalização de frotas</option>
                        <option value="opcao2">Fachadas</option>
                        <option value="opcao3">Projetos especiais</option>
                        <option value="opcao3">Impressos de grande e pequenos formatos</option>
                        <option value="opcao3">Coberturas e toldos</option>
                        <option value="opcao3">Adesivo de parede</option>
                        <option value="opcao3">Totens</option>
                        <option value="opcao3">Luminosos</option>
                        <option value="opcao3">Outddores e placas</option>
                        <option value="opcao3">Letras caixas</option>
                        <option value="opcao3">Led neon</option>
                        <option value="opcao3">Outros</option>
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