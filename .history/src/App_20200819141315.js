import React from 'react';
import './App.css';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo"><img src={logo} alt=""/></div>
        <div className="heading">PEGA EVENT MANAGER</div>
        <div className="logo"><button type="button" className="createbutton">Create event</button></div>
      </div>
      <div className="body">
        Card
        <div className="card">
          Text 1
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
        </div>
      </div>

    </div>
  );
}

export default App;
