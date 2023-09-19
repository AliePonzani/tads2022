//Use esta estrutura como exemplo de como estruturar sua página
//Navegue tbm pelas páginas Home e PaginaColaboradores para ver outros exemplos

import React from 'react';
import { Link } from 'react-router-dom';
//faça os imports necessários

class Exemplo extends React.Component {
    render() {
        return (
            <div>
                <h1>Esta é uma pagina de criação Exemplo!! </h1>
                <div>
                    {/* Sempre deixe este link em algum lugar da sua página para servir 
                    de rota para voltar a página com todos os Colaboradores do projeto. */}
                    <Link to="/Colaboradores">Ver todos os Colaboradores</Link>
                </div>
            </div>
            
        );
    }

}

export default Exemplo;