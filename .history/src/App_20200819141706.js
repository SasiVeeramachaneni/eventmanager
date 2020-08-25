import React from 'react';
import './App.css';
import logo from './logo.svg';
import Card from './Card';


function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo"><img src={logo} alt=""/></div>
        <div className="heading">PEGA EVENT MANAGER</div>
        <div className="logo"><button type="button" className="createbutton">Create event</button></div>
      </div>
      <div className="body">
        <Card />

      </div>

    </div>
  );
}

export default App;
