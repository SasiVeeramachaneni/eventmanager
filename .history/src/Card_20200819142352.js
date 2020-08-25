import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className="card">
        <div className="topline">
          <div className="time">time</div>
          <button className="joinB">+Join</button>
        </div>
        <h4><b>John Doe</b></h4> 
        <p>Architect & Engineer</p>
        Documents: Link
        <button>+Subscribe</button> 
        <button>Subscribed</button>
      </div>
    );
}

export default Card;
