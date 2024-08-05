
//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicTacToe from './Pages/TicTacToe';
import Menu from './Menu/Menu';
import './App.css';
import ReactLearn from './Pages/ReactLearn';
import ReactStart from './Pages/ReactStart';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

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

//<Route path="/" element={<Home />} />