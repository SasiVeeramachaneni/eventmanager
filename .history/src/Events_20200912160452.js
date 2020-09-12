import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function renderTableData() {
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

function Events() {
   const [events, setEvents] = useState([]);
   
   useEffect(() => {
      axios.get('http://localhost:8080/events')
      .then(res => {
         console.log(res)
         setEvents(res.data.results)
      })
   }, [])

   

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

export default Events;

