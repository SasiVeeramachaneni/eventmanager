import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function renderTableData(myEvents) {
   return myEvents.map((event, index) => {
      const { id, title } = event //destructuring
      return (
         <tr key={id}>
            <td>{title}</td>
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
            {renderTableData(events)}
         </tbody>
      </table>
      </div>
   )
   
}

export default Events;

