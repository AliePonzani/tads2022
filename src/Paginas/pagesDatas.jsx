// Siga os exemplos abaixo comentados para criar o Link de acesso para sua página 

import CaminhoDaPagina from "./PaginaExemplo";
import rafael from "./rafael";
import kayky from "./kayky";
import AlinePonzani from "./AlinePonzani";
import Exemplo from "./Exemplo";

const pagesData = [
    { name: 'Rafael Ribeiro', path: '/RafaelRibeiro', component: rafael},
    {name: 'Kayky Yan', path: '/KaykyYan', component: kayky},
    { name: 'Aline Ponzani', path: '/AlinePonzani', component: AlinePonzani},
    { name: 'Página de Exemplo', path: '/Exemplo', component: Exemplo},
    // { name: 'Nome da Página', path: '/RotaDaPagina', component: CaminhoDaPagina},
    // Insira aqui sua página usando a que esta acima como exemplo
];

export default pagesData;