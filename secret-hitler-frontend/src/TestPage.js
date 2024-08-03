// TestPage.js
/*
import React from 'react';

function TestPage() {
  return (
    <div>
      <h2>Test Page</h2>
      <p>This is the test page where you can write and test your code.</p>
    </div>
  );
}

export default TestPage;
*/
/*
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
        
      </>
      <img className="avatar" />
    </div>

  );
}
*/
/*
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
  */
 /*
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
  */
 /*
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
*/
/*
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
  */
 // App.js
// App.js
// App.js
/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TestPage from './TestPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route }
        <Route path="/" element={<Home />} />
        {/* Define the route for the test page }
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/test">
        <button>Go to Test Page</button>
      </Link>
    </div>
  );
}

export default App;
*/