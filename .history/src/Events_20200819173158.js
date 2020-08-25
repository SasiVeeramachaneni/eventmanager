import React from 'react';
import './App.css';
import Card from './Card'

const robots = [
    {
      id: 1,
      name: "8.6 Demo",
      username: "Sasi",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Sales automation demo",
      username: "Bharath",
      email: "Sincere@april.biz"
    },  {
      id: 3,
      name: "Create stage demo",
      username: "Naresh",
      email: "Sincere@april.biz"
    },
  ]

  const CardList = ({ robots }) => {
    const cardsArray = robots.map(robot => (
      <Card
        name={robot.name}
        email={robot.email}
        username={robot.username}
        id={robot.id} />
    ));
  
    return (
      <div className="cardList">
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

