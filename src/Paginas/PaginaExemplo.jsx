//Use esta estrutura como exemplo de como estruturar sua página
//Navegue tbm pelas páginas Home e PaginaColaboradores para ver outros exemplos

import React from 'react';
import { Link } from 'react-router-dom';
//faça os imports necessários

class Nome_da_Pagina extends React.Component {
    render() {
        return (
            <div>
                {/* Coloque seu conteudo aqui sem os {} */}
                <div>
                    {/* Sempre deixe este link em algum lugar da sua página para servir 
                    de rota para voltar a página com todos os Colaboradores do projeto. */}
                    <Link to="/Colaboradores">Ver todos os Colaboradores</Link>
                </div>
            </div>
            
        );
    }

}

export default Nome_da_Pagina;