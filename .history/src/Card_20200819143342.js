import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className="card">
        <div className="topline">
          <div className="time">20th Aug 2020 2.50 PM</div>
          <a href="url">+Join event</a>
        </div>
        <h2><b>8.6 Demo</b></h2> 
        <p>Architect & Engineer</p>
        Documents: Link
        <button className="subscribe">+   Subscribe</button> 
        <button className="subscribe">Subscribed</button>
      </div>
    );
}

export default Card;
