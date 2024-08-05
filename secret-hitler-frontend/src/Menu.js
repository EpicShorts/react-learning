import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/TicTacToe">TicTacToe</Link>
      <Link to="/ReactLearn">ReactLearn</Link>
    </div>
  );
};

export default Menu;