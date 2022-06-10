import './Card.css'

import React from 'react'
import CalorieIcon from '../../assets/calories-icon.svg'


function Card() {
  return (
    <> 
      <div className="card-info">
        <div className="icon">
          <img src="CalorieIcon" alt="" />
          <img alt='icon' src={CalorieIcon} />
        </div>
        <div className="informations">
            <p className="count">1,930kCal</p>
            <p className="type">Calories</p>
        </div>
      
      </div> 
    </>
  );
}

export default Card;