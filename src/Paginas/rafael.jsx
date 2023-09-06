import React from 'react';
import { Link } from 'react-router-dom';
import '../css/rafael.css'
//faça os imports necessários

class rafael extends React.Component {
    render() {
        return (
            <div>
                <h2 className="titulo">Olá mundo</h2> 
                <div>
                    {/* Sempre deixe este link em algum lugar da sua página para servir 
                    de rota para voltar a página com todos os Colaboradores do projeto. */}
                    <Link to="/Colaboradores">Ver todos os Colaboradores</Link>
                </div>
            </div>
            
        );
    }

}

export default rafael;