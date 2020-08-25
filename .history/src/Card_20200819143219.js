import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className="card">
        <div className="topline">
          <div className="time">time</div>
          <a href="url">+Join event</a>
        </div>
        <h4><b>John Doe</b></h4> 
        <p>Architect & Engineer</p>
        Documents: Link
        <button className="subscribe">+   Subscribe</button> 
        <button className="subscribe">Subscribed</button>
      </div>
    );
}

export default Card;
