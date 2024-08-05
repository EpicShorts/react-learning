import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">React Start Menu</Link>
      <Link to="/TicTacToe">Tic Tac Toe</Link>
      <Link to="/ReactLearn">ReactLearn</Link>
    </div>
  );
};

export default Menu;

// put the link in here for more pages