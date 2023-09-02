import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Sobre';
import Home from './Home';

function RouterApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default RouterApp;