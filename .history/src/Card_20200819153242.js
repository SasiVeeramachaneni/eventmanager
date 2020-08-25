import React from 'react';
import './Card.css';

function Card() {
    return (
    <div className="card">
        <div className="inlineCard">
        <div className="topline">
          <div className="time">20th Aug 2020 2.50 PM</div>
          <a href="url">+Join event</a>
        </div>
        <h2>8.6 Demo</h2> 
        <p>Architect & Engineer</p>
        <a href="url">Reference documents</a>
        <div className="solid" />
        <div className="bottom">
        <button className="subscribe">+   Subscribe</button><br /> 
        <button className="unsubscribe">Subscribed</button><br /> 
        </div>
        </div>
    </div>
    );
}

export default Card;
