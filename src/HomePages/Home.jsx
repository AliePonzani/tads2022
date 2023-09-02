import '../App.css';
import React from 'react';
import Imagem from '../Imagens/background.png';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={Imagem} alt='Imagem'></img>
                </header>
            </div>

        );
    }

}

export default Home;