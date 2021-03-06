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
        <div className="documents"><p>Documents:</p> <a href="url">Link</a></div>
        <button className="subscribe">+   Subscribe</button> 
        <a href="url">Subscribed</a>
    </div>
    );
}

export default Card;
