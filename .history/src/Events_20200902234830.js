import React, { Component } from 'react';
import './App.css';


  class Events extends Component {
    constructor(props) {
       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
       this.state = { //state is by default an object
          students: [
            {
              id: 1,
              name: "8.6 Demo",
              username: "Sasi",
              email: "Sincere@april.biz",
              document: "www.box.com",
              subsribe: true
            },
            {
              id: 2,
              name: "Sales automation demo",
              username: "Bharath",
              email: "Sincere@april.biz",
              document: "www.box.com",
              subsribe: false
        
            },  
            {
              id: 3,
              name: "Create stage demo",
              username: "Naresh",
              email: "Sincere@april.biz",
              document: "www.box.com",
              subsribe: false
            },
            {
                id: 4,
                name: "DX APIs",
                username: "Kishore",
                email: "Sincere@april.biz",
                document: "www.box.com",
                subsribe: true
            },
            {
                id: 5,
                name: "Process fabric demo",
                username: "Ujjwala",
                email: "Sincere@april.biz",
                document: "www.box.com",
                subsribe: false
            },
            {
                id: 6,
                name: "Remote case",
                username: "Sasi",
                email: "Sincere@april.biz",
                document: "www.box.com",
                subsribe: true
            },
          ]
       }
    }
 
    renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, username, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{name}</td>
               <td>{username}</td>
               <td>{email}</td>
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
         <div className="tableCenter">
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

