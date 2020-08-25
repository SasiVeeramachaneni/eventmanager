import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className="card">
        <div>
          time
          <button>+Join</button>
        </div>
        <h4><b>John Doe</b></h4> 
         <p>Architect & Engineer</p> 
      </div>
    );
}

export default Card;
