import React, { Component, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function Events() {
   const [events, setEvents] = useState([]);
   
   useEffect(() => {
      axios.get('http://localhost:8080/events')
      .then(res => {
         console.log(res)
      })
   })

   return (
      <div>
         test
      </div>
   )
   
}

export default Events;

