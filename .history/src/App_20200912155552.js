import React from 'react';
import './App.css';
import Events from './Events';

function App() {
  return (
      <div className="body">
        <div id="menu-outer">
          <div className="table10">
            <ul id="horizontal-list">
              <li>Sasi 1</li>
              <li>Sasi 2</li>
              <li>Sasi 3</li>
              <li>Sasi 4</li>
            </ul>
          </div>
        </div>
        <Events />
      </div>
  );
}

export default App;
