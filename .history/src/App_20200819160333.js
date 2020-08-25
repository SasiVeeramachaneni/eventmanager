import React from 'react';
import './App.css';
import logo from './logo.svg';
import Card from './Card';

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },  {
    id: 3,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
]

const CardList = ({ robots }) => {
  const cardsArray = robots.map(robot => (
    <Card
      name={robot.name}
      email={robot.email}
      id={robot.id} />
  ));

  return (
    <div>
      {cardsArray}
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo"><img src={logo} alt=""/></div>
        <div className="heading">PEGA EVENT MANAGER</div>
        <div className="logo"><button type="button" className="createbutton">Create event</button></div>
      </div>
      <div className="body">
        <CardList robots={robots} />

      </div>

    </div>
  );
}

export default App;
