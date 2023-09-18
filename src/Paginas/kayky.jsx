//Use esta estrutura como exemplo de como estruturar sua página
//Navegue tbm pelas páginas Home e PaginaColaboradores para ver outros exemplos

import '../css/kayky.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Kayky extends React.Component {
    render() {
        return (
            <div className="Container"> {/* Adicionei uma classe para fins de estilização */}
                <h2 className='titulo-centralizado'>UltimateSoccerStars</h2>
                <div className='texto-centralizado'>
                    <p>
                        Bem-vindo à página. Aqui você encontrará informações sobre o esporte de futebol.
                    </p>
                </div>
                <div>

                    <div className='lista-esportes'>
                        <li>
                            <ul>Futebol</ul>
                            <ul>Volei</ul>
                            <ul>Basquete</ul>
                            <ul>Natação</ul>
                        </li>
                    </div>
                    {/* Sempre deixe este link em algum lugar da sua página para servir 
                    de rota para voltar à página com todos os Colaboradores do projeto. */}
                    <Link to="/Colaboradores">Ver todos os Colaboradores</Link>
                </div>
            </div>
        );
    }
}

export default Kayky;