import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./imagensc.css";

function ImagensC() {
    const [data, setData] = useState({
        ImagemId: 0,
        NomeImagem: 'string',
        CategoriaId: '',
        arquivo: null,
    });
    const [todasImagens, setTodasImagens] = useState([]);
    const [todasCategorias, setTodasCategorias] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [modoFiltro, setModoFiltro] = useState(false);
    const token = localStorage.getItem('token');
    const urlHospedagem = "https://apioriginalpaineis.shop";

    useEffect(() => {
        getImagemInfo();
    }, []);

    async function getImagemInfo() {
        const endpoint = '/api/v1/Imagens';
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        try {
            const resposta = await axios.get(urlCompleta);
            setTodasImagens(resposta.data);
            setModoFiltro(false);
        } catch (error) {
            console.error('Erro ao fazer a requisição GET:', error);
        }
    };

    useEffect(() => {
        async function getCategoriaData() {
            const endpoint = '/api/v1/Categorias';
            const urlCompleta = `${urlHospedagem}${endpoint}`;

            try {
                const resposta = await axios.get(urlCompleta);
                setTodasCategorias(resposta.data);
            } catch (error) {
                console.error('Erro ao fazer a requisição GET:', error);
            }
        };
        getCategoriaData();
    }, []);

    function obterNomePorCategoriaId(id) {
        // Busca a categoria com o ID correspondente
        const categoria = todasCategorias.find(categoria => categoria.categoriaId === id);

        // Verifica se a categoria foi encontrada
        if (categoria) {
            return categoria.nome; // Retorna o nome da categoria
        } else {
            return null; // Retorna null se o ID não corresponder a nenhuma categoria
        }
    }

    function filtrarPorCategoriaId(id) {
        setModoFiltro(true);
        const endpoint = "/api/v1/Imagens/BuscarPorCategoriaId/";
        axios.get(`${urlHospedagem}${endpoint}${id}`)
            .then(response => {
                // Manipula os dados da resposta
                setTodasImagens(response.data);
            })
            .catch(error => {
                // Manipula erros
                console.error('Erro ao realizar a requisição:', error);
            });
    }

    const handleInputChange = (campo, valor) => {
        setData((prevState) => ({
            ...prevState,
            [campo]: valor
        }));
    };

    const enviarDadosImagem = () => {
        const camposEmBranco = Object.values(data).some(valor => valor === '');

        if (camposEmBranco) {
            console.error('Não é possível enviar dados do produto com campos em branco.');
            return;
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        };

        const dadosProduto = {
            ImagemId: 0,
            NomeImagem: data.NomeImagem,
            CategoriaId: data.CategoriaId,
            arquivo: data.arquivo
        };
        const endpoint = '/api/v1/Imagens';
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        axios.post(urlCompleta, dadosProduto, config)
            .then(response => {
                console.log('Dados do produto enviados com sucesso:', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao enviar dados do produto:', error);
            });
    };

    const alterarDadosImagem = () => {
        const camposEmBranco = Object.values(data).some(valor => valor === '');

        if (camposEmBranco) {
            console.error('Não é possível enviar dados do produto com campos em branco.');
            return;
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        };

        const dadosProduto = {
            ImagemId: data.ImagemId,
            NomeImagem: data.NomeImagem,
            CategoriaId: data.CategoriaId,
            arquivo: data.arquivo
        };
        const endpoint = `/api/v1/Imagens/${data.ImagemId}`;
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        axios.put(urlCompleta, dadosProduto, config)
            .then(response => {
                console.log('Dados do produto alterados com sucesso:', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao alterar dados do produto:', error);
            });
    };

    const handleImagemChange = (e) => {
        const imagemSelecionada = e.target.files[0];
        setData({ ...data, arquivo: imagemSelecionada });
    };

    async function getImagemById(id) {
        const endpoint = `/api/v1/Imagens/${id}`;
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        try {
            const resposta = await axios.get(urlCompleta);
            setModoFiltro(true);
            setData(resposta.data);
        } catch (error) {
            console.error('Erro ao fazer a requisição GET:', error);
        }
    };

    function deletarImagem(id) {
        const endpoint = `/api/v1/Imagens/${id}`;
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.delete(urlCompleta, config)
            .then(() => {
                console.log("Produto deletado com sucesso.");
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao fazer a requisição DELETE:', error);
            });
    }

    const handleCategoriaChange = (e) => {
        const categoriaIdSelecionada = e.target.value;
        setData({
            ...data,
            CategoriaId: categoriaIdSelecionada,
        });
    };

    // function scrollToeditarProdutos() {
    //     const produto = document.getElementById('imagem');
    //     if (produto) {
    //         produto.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }

    return (
        <div className="produto" id='imagem' >
            <h1>Cadastrar Imagem</h1>
            <div>
                {modoEdicao && (
                    <button onClick={() => setModoEdicao(false)}>Cancelar Edição</button>
                )}
            </div>
            <div className='inputProduto1'>
                {/* <h3>Nome da Imagem</h3>
                <input type="text" value={data.NomeImagem} onChange={(e) => handleInputChange('NomeImagem', e.target.value)} /> */}
            </div>
            {/* {modoEdicao && (
                <div className='inputProduto1'>
                    <h3>Imagem ID</h3>
                    <input type="int" value={data.ImagemId} onChange={(e) => handleInputChange('ImagemId', e.target.value)} />
                </div>
            )} */}
            <div className='inputProduto3'>
                <h3>Arquivo</h3>
                <input type="file" onChange={handleImagemChange} />
            </div>
            <div className='inputProduto1'>
                <h3>Categoria</h3>
                <select value={data.CategoriaId} onChange={handleCategoriaChange}>
                    <option value="">Selecione uma Categoria</option>
                    {todasCategorias.map((categoria) => (
                        <option key={categoria.categoriaId} value={categoria.categoriaId}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>

            </div>
            <div className='buttonCadastrarProduto'>
                {!modoEdicao ? (
                    <button onClick={enviarDadosImagem}><h3>Cadastrar Imagem</h3></button>
                ) : (
                    <button onClick={alterarDadosImagem}>Atualizar Imagem</button>
                )}
            </div>


            <div className='listaprodutos' >
                <h1>Lista de Imagens</h1>
                <h3>Filtrar por Categorias</h3>

                {modoFiltro ? (
                    <button onClick={() => getImagemInfo()}><h3> Mostrar todas as imagens</h3> </button>
                ) : (null)}


                {todasCategorias.map((categoria) => (
                    <div key={categoria.categoriaId}>
                        <button onClick={() => filtrarPorCategoriaId(categoria.categoriaId)}> <h3>{categoria.nome}</h3> </button>
                    </div>
                ))}
                            </div>

                <div className='conteudoImagesC'>
                    {todasImagens.map((produto) => (
                        <div key={produto.imagemId}>
                            <div className='conteudoImagesCC'>
                            <p><strong>ID:</strong> {produto.imagemId}</p>
                            <p><strong>Nome:</strong>{produto.nomeImagem}</p>
                            <p><strong>Categoria:</strong> {obterNomePorCategoriaId(produto.categoriaId)}</p>
                            <img src={`${urlHospedagem}/imagens/${produto.nomeImagem}`} alt={produto.imagemId} />
                            {/* <button onClick={() => {
                                scrollToeditarProdutos();
                                getImagemById(produto.imagemId);
                            }}>Editar Imagem</button> */}
                            <button onClick={() => deletarImagem(produto.imagemId)}>Excluir Imagem</button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );

}
export default ImagensC;
