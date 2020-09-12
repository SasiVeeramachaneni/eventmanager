import React, { Component, useState, useEffect } from 'react';
import './App.css';

function Events() {
   return
}


  class Events extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          students: [
            {
              id: 1,
              name: "8.6 Demo",
              username: "Sasi",
              time: "4th Sep 9.30 AM",
              document: "www.box.com",
              subsribe: true
            },
            {
              id: 2,
              name: "Sales automation demo",
              username: "Bharath",
              time: "4th Sep 9.30 AM",
              document: "www.box.com",
              subsribe: false
        
            },  
            {
              id: 3,
              name: "Create stage demo",
              username: "Naresh",
              time: "4th Sep 9.30 AM",
              document: "www.box.com",
              subsribe: false
            },
            {
                id: 4,
                name: "DX APIs",
                username: "Kishore",
                time: "4th Sep 9.30 AM",
                document: "www.box.com",
                subsribe: true
            },
            {
                id: 5,
                name: "Process fabric demo",
                username: "Ujjwala",
                time: "4th Sep 9.30 AM",
                document: "www.box.com",
                subsribe: false
            },
            {
                id: 6,
                name: "Remote case",
                username: "Sasi",
                time: "4th Sep 9.30 AM",
                document: "www.box.com",
                subsribe: true
            },
          ]
       }
    }
 
    renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, username, time } = student //destructuring
         return (
            <tr key={id}>
               <td>{name}</td>
               <td>{username}</td>
               <td>{time}</td>
               <td>
                  <a href="www.box.com" target="_blank" rel="nofollow">
                  Reference documents
                  </a>
                </td>
               <td>✓</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
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

