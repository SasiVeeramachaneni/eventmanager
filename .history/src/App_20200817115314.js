import React from 'react';
import './App.css';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo"><img src={logo}/></div>
        <div className="heading">Pega event manager</div>
        <div className="logo"><button type="button" className="createbutton">Create event</button></div>
      </div>
      <div className="body"></div>
    </div>
  );
}

export default App;
