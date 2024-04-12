import React, { useState } from "react";
import "./loginc.css";
import Logo from "../../assets/images/logo_branca.png";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

function LoginC() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        senha: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const urlHospedagem = "https://apioriginalpaineis.shop/api/v1/Usuarios/Login";
    const headers = {
        'Content-Type': 'application/json'
      };

      const handleSubmit = () => {
        if (!data.email || !data.senha) {
            alert("Por favor, preencha todos os campos");
            return;
        } else {
            axios.post(urlHospedagem, data, { headers: headers })
                .then(response => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('dataExpiracao', response.data.expiration);
                    navigate('/painel');
                })
                .catch(error => {
                    console.error('Erro ao fazer requisição:', error);
                    
                });
        }
    };

    return (
        <div className="loginC">
            <h2>Bem vindo ao painel administrativo</h2>
            <h1>Login</h1>
            <div className="loginCC">
                <label>Usuário:</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Digite seu usuário"
                    value={data.email}
                    onChange={handleInputChange}
                />

                <label>Senha:</label>
                <input
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={data.senha}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}><h2>Entrar</h2></button>
                <img src={Logo} alt="" />
            </div>

        </div>
    )
}
export default LoginC;