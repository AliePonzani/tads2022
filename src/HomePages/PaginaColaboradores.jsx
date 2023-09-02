import '../App.css';
import './colaboradoresStyle.css';
import React from 'react';
import Imagem from '../Imagens/Imagem2.png';
import Colaboradores from './Colaboradores';
import pages from '../Paginas/pagesDatas';

class PaginaColaboradores extends React.Component {
    render() {
        return (
            <div>
                <div className="header-colaboradores">
                    <div className="container">
                        <div className="logo" style={{ justifyContent: 'flex-start' }}>
                            <div><h2>TADS 2022<br />Senac</h2></div>
                            <img src={Imagem} alt='quebra-cabeça'></img>
                        </div>
                        <div className="grupo_colaboradores">
                            {pages.map((page, index) => (
                                <Colaboradores key={index} to={page.path} name={page.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PaginaColaboradores;