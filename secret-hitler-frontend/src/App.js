// Preloaded App.js
/*
import logo from './logo.svg';
import './App.css';

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

// https://react.dev/learn/tutorial-tic-tac-toe

// 'export' means function 'Square()' can be used outside of this file
// 'Square()' is a function
// default means other files will see square() as the main function in the file

// return allows the value after to be returned to the caller of the function
// <button> is a JSX element
// JSX just means it combines HTML and JAVASCRIPT
// className="square" is a button property or prop that tells CSS how to style the button
// 'x' is the text displayed inside of the button

// imports
//import { userState, useState } from 'react';


// making a new custom function
// code below for if each square has a value, done in board instead now
/*
function Square() { 
  const [value, setValue] = useState(null);

  // adding function to handle clicks
  function handleClick(){
    setValue('X');
  }
  // new return function
  return (
    <button
    className="square"
    onClick={handleClick}
    >
      {value}
    </button>
  )
}
  */
 /*
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// export default function Square() { // we changed the name to reflect its a board rather than a square
export default function Board() {
  // return <button className="square">X</button>;
  // shows one button with x in the middle

  //return (
  //  <>
  //    <button className="square">X</button>
  //    <button className="square">X</button>
  //  </>
  //);
  // this is two buttons side by side

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  // this is for all the squares having the values attached to Board()
  // rather than attached to each square

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
  // now we made all the buttons and named them
  // also made them 3x3
  // it was <button className="square">1</button>
  // but now its <Square /> to make it easier to understand
}



// just a boring helper function to calculator the winner blah blah blah
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
*/
// https://react.dev/learn/tutorial-tic-tac-toe
// Cleaned up
import { useState } from 'react';
import './App.css'; //import .css file to use

// for each square on grid, has value and what to do if clicked
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
    // onClick is inbuilt 
    // click handlar is in Board()
  );
}

// the board is an array of length 9
// grid is 3x3
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // handle click
  // || is logical OR
  function handleClick(i) {
    // if square already has value or game end, then skip
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice(); // makes a copy of squares
    // square that is clicked on will become x or y
    // depending if xIsNext being true or not
    if (xIsNext) {
      nextSquares[i] = 'X'; 
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares); // sets squares to nextsquares
    setXIsNext(!xIsNext); // flips boolean
  }

  const winner = calculateWinner(squares); //calculateWinner returns X or O or null
  let status; // a string varible with no value
  if (winner) { // if not null, change text to winner
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    // if xIsNext = true then X
    // else then O
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
  // top div shows next player or winner
  // board rows is a row of three buttons
}

// simple calculator for winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}