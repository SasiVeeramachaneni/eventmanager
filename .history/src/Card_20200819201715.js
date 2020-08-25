import React from 'react';
import './Card.css';

function Card(props) {
    return (
    <div className="card">
        <div className="inlineCard">
        <div className="topline">
          <div className="time">20th Aug 2020 2.50 PM</div>
          <a href="url">+Join event</a>
        </div>
        <h2>{props.name}</h2> 
        <div style={{fontFamily: "SourceSansPro"}}>
        <p>{props.username}</p>
        </div>
        <a href="url">Reference documents</a>
        <div className="bottom">
        <button className="subscribe">+   Subscribe</button><br /> 
        
        </div>
        </div>
    </div>
    );
}

export default Card;
