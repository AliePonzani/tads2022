import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PaginaColaboradores from './HomePages/PaginaColaboradores';
import Home from './HomePages/Home';
import pages from './Paginas/pagesDatas';

function RouterApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Colaboradores" element={<PaginaColaboradores />} />
            {pages.map((page, index) => (
                <Route key={index} path={page.path} element={<page.component />} />
            ))}
        </Routes>
    );
}

export default RouterApp;