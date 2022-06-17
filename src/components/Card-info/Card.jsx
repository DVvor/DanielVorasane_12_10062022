import React from 'react'

import './Card.css'

import CalorieIcon from '../../assets/calories-icon.svg'
import ProteinIcon from '../../assets/protein-icon.svg'
import CarbsIcon from '../../assets/carbs-icon.svg'
import FatIcon from '../../assets/fat-icon.svg'

import data from "../../datas/data"


function Card({type}) {

  let unit = "";
  let count = "";
  let icon = "";

    if(type === "Calories") {
      unit = 'Kcal';
      count = data.USER_MAIN_DATA[0].keyData.calorieCount;
      icon = CalorieIcon ;
    } 
    else if (type === "Proteines") {
      unit = 'g';
      count = data.USER_MAIN_DATA[0].keyData.proteinCount;
      icon = ProteinIcon ;
    } 
    else if (type === "Glucides") {
      unit = 'g';
      count = data.USER_MAIN_DATA[0].keyData.carbohydrateCount;
      icon = CarbsIcon ;
    } 
    else if (type === "Lipides") {
      unit = 'g';
      count = data.USER_MAIN_DATA[0].keyData.lipidCount;
      icon = FatIcon ;
    } 
  
  return (
    <> 
      <div className="card-info">
        <div className="icon">
          <img alt='icon' src={icon} />
        </div>
        <div className="informations">
            <p className="count"> {count}{unit}</p>
            <p className="type"> {type}</p>
        </div>
      
      </div> 
    </>
  );
}

export default Card;