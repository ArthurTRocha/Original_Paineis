import React from "react";
import "./trabalheconosco2.css"
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

function TrabalheConosco2 () {
    return (
        <div className="trabalheconosco2">


            <div className="tc2">
            <form action="https://formsubmit.co/financeiro@originalpainies.com.br" method="POST">
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="https://originalpaineis.com.br/obrigado"/>

                <div className="dadosPessoaisTC2">
                    <div className="texto1IconeTC2">
                    <h2>Dados Pessoais</h2>
                    <IoMdPerson className="IoMdPersonTC2"/>
                    </div>
           
                <label>
                        <input type="text" name="name" required 
                        placeholder="Nome"/>
                    </label>

                    <div className="nascimentoEstaMTC2">
                    <label>
                        <input type="text" name="text" 
                        placeholder="Data de nascimento"/>
                    </label>

                    <label>
                        <input type="text" name="text" 
                        placeholder="Estado/Municipio"/>
                    </label>
                    </div>
                </div>




                    <div className="contatoTC2">
                    <div className="texto2IconeTC2">
                        <h2>Contato</h2>
                        <MdEmail className="MdEmailTC2"/>
                        </div>
                    <label>
                        <input type="email" name="email" required 
                        placeholder="E-mail"
                        />
                    </label>

                    <div className="tellikenCurriculoTC2">
                    <label>
                        <input type="tel" name="phone" 
                        placeholder="Telefone"
                        />
                    </label>

                    <label>
                   <input type="text" name="text" 
                   placeholder="Perfil LinkedIn"/>
                    </label>

                    <label className="fileTC2">
                    <input type="file" name="attachment" accept="image/png, image/jpeg"/>
                    Selecione um arquivo
                    </label>
                    </div>
                    </div>

                    <button className="buttonTC2" type="submit"><h1>Enviar</h1></button>
                    </form>
                    </div>
        </div>
    )
}
export default TrabalheConosco2;