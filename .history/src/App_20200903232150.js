import React from 'react';
import './App.css';
import Events from './Events';

function App() {
  return (
      <div className="body">
        <div id="menu-outer">
          <div class="table10">
            <ul id="horizontal-list">
              <li><a href="#"><img src="images/list-item-1.gif" alt="list item 1" /></a></li>
              <li><a href="#"><img src="images/list-item-2.gif" alt="list item 2" /></a></li>
              <li><a href="#"><img src="images/list-item-3.gif" alt="list item 3" /></a></li>
              <li><a href="#"><img src="images/list-item-4.gif" alt="list item 4" /></a></li>
            </ul>
          </div>
        </div>
        <Events />
      </div>
  );
}

export default App;
