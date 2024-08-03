// All the preimported crap

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// https://react.dev/learn/tutorial-tic-tac-toe
// nothing works for below, i think it was just for tutorial crap etc etc
/*
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'; //was 'import './styles.css';' but the normal styles in app.css 

import App from './App';
*/