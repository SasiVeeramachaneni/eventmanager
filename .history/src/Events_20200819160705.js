import React from 'react';
import './App.css';
import Card from './Card'

const robots = [
    {
      id: 1,
      name: "8.6 Demo",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Sales automation demo",
      username: "Bret",
      email: "Sincere@april.biz"
    },  {
      id: 3,
      name: "Create stage demo",
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

  function Events() {
      return(
        <CardList robots={robots} />
      );
  }

  export default Events;

