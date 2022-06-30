import {React, useEffect, useState} from 'react'

import './Card.css'

import CalorieIcon from '../../Assets/calories-icon.svg'
import ProteinIcon from '../../Assets/protein-icon.svg'
import CarbsIcon from '../../Assets/carbs-icon.svg'
import FatIcon from '../../Assets/fat-icon.svg'

// import data from "../../datas/data"


function Card({type, data}) {

  const [datasIsCompleted, setDatasIsCompleted] = useState(false)

    function checkData() {
        // console.log(data)
        if (data !== undefined) {
            setDatasIsCompleted(true)
        } else {
            setDatasIsCompleted(false)
        }
    }
    
    useEffect(() => {
        checkData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })
    
    let unit = "";
    let count = "";
    let icon = "";

    // console.log(data.calorieCount)

    if(datasIsCompleted){
      if(type === "Calories") {
        unit = 'Kcal';
        count = data.calorieCount;
        icon = CalorieIcon ;
      } 
      else if (type === "Proteines") {
        unit = 'g';
        count = data.proteinCount;
        icon = ProteinIcon ;
      } 
      else if (type === "Glucides") {
        unit = 'g';
        count = data.carbohydrateCount;
        icon = CarbsIcon ;
      } 
      else if (type === "Lipides") {
        unit = 'g';
        count = data.lipidCount;
        icon = FatIcon ;
      } 
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