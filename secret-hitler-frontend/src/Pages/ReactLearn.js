//import React from 'react';
// remember to make the export default function ReactLearn()

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './ReactLearn.css';

const ReactLearn = () => {
  return (
    <div className="App">
      <Square1 />
    </div>
  );
};

export default ReactLearn;


const Square1 = () => {
  const [move, setMove] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setMove(true);
  };

  // Only show the square on the home page
  if (location.pathname !== '/ReactLearn') {
    return null;
  }

  return (
    <div>
      <button onClick={handleClick}>Move Square</button>
      <div className={`square1 ${move ? 'move' : ''}`} />
    </div>
  );
};

