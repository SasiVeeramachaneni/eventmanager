import React from 'react';
import './App.css';
import Events from './Events';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Events />
      </div>

    </div>
  );
}

export default App;
