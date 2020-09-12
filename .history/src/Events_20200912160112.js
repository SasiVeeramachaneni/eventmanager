import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


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
         <ul>
            {events.map(event => (
               <li key={event.id}>{event.title}</li>
            ))}
         </ul>
      </div>
   )
   
}

export default Events;

