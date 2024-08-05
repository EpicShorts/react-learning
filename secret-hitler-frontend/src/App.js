import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicTacToe from './Pages/TicTacToe';
import Menu from './Menu/Menu';
import './App.css';
import ReactLearn from './Pages/ReactLearn';
import ReactStart from './Pages/ReactStart';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/ReactLearn" element={<ReactLearn />} />
          <Route path="/" element={<ReactStart />} />
        </Routes>
        <Menu />
      </div>
    </Router>
  );
};

export default App;

// '/ReactLearn' is what shows in the browser
// add your new pages here
// remeber to add the link to the Menu