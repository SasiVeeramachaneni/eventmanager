import React, { Component } from 'react'
import './App.css';
import Card from './Card'

const robots = [
    {
      id: 1,
      name: "8.6 Demo",
      username: "Sasi",
      email: "Sincere@april.biz",
      subsribe: true
    },
    {
      id: 2,
      name: "Sales automation demo",
      username: "Bharath",
      email: "Sincere@april.biz",
      subsribe: false

    },  
    {
      id: 3,
      name: "Create stage demo",
      username: "Naresh",
      email: "Sincere@april.biz",
      subsribe: false
    },
    {
        id: 4,
        name: "DX APIs",
        username: "Kishore",
        email: "Sincere@april.biz",
        subsribe: true
    },
    {
        id: 5,
        name: "Process fabric demo",
        username: "Ujjwala",
        email: "Sincere@april.biz",
        subsribe: false
    },
    {
        id: 6,
        name: "Remote case",
        username: "Sasi",
        email: "Sincere@april.biz",
        subsribe: true
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

  function Events2() {
      return(
        <CardList robots={robots} />
      );
  }


  class Events extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          students: [
             { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
             { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
             { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
             { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
          ]
       }
    }
 
    renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, age, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='events'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
 }

  export default Events;

