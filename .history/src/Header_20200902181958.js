import React from 'react';
import './App.css';
import logo from './logo.svg';

function Header() {
  return (
      <div className="header">
        <div className="logo"><img src={logo} alt=""/></div>
        <div className="heading">PEGA EVENT MANAGER</div>
        <div className="logo"><button type="button" className="createbutton">Create event</button></div>
      </div>
  );
}

export default Header;
