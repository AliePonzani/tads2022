import '../App.css';
import './homeStyle.css';
import React from 'react';
import Imagem from '../Imagens/Imagem2.png';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="home-backgroung"></div>
                <header>
                    <div className="container">
                        <div className="logo">
                            <div><h2>TADS 2022<br />Senac</h2></div>
                            <img src={Imagem} alt='quebra-cabeça'></img>
                        </div>
                        <div className="Texto">
                            ESTE É O LUGAR ONDE A CRIATIVIDADE E A INDIVIDUALIDADE
                            SE ENCONTRAM.<br /><br />
                            EM NOSSO SITE, CADA MEMBRO DA SALA DE AULA NO CURSO DE ANÁLISE E
                            DESENVOLVIMENTO DE SISTEMAS QUE INICIARAM EM AGOSTO/2022 TEM SUA PÁGINA
                            EXCLUSIVA PARA COMPARTILHAR SUAS PAIXÕES, CONQUISTAS E PENSAMENTOS.<br /><br />
                            EXPLORE AS HISTÓRIAS, PROJETOS E OS INTERESES DE CADA UM <Link to="/Colaboradores">CLICANDO AQUI</Link> E CONHEÇA UM POUCO MAIS SOBRE NÓS!
                        </div>
                        <div className="Rodape">
                            <span>UM LUGAR PARA COLOCAR SUAS IDEIAS E HABILIDADES EM PRATICA</span>
                        </div>
                    </div>
                </header>
            </div>
        );
    }

}

export default Home;