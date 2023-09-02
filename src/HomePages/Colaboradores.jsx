import React from 'react';
import { Link } from 'react-router-dom';
import { PiPuzzlePiece } from 'react-icons/pi';

function Colaboradores({ to, name }) {
  return (
    <div className="Colaborador">
      <Link to={to}>{name}</Link>
      <PiPuzzlePiece style={{ minWidth: '30px', minHeight: '30px' }} />
    </div>
  );
}

export default Colaboradores;
