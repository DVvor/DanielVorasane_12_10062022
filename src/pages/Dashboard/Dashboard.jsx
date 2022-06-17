import React from 'react'
import './Dashboard.css'

//assets
// import CalorieIcon from '../../assets/calories-icon.svg'
// import ProteinIcon from '../../assets/protein-icon.svg'
// import CalorieIcon from '../../assets/calories-icon.svg'
// import CalorieIcon from '../../assets/calories-icon.svg'

//Components
import Card from '../../components/Card-info/Card'
import data from '../../datas/data'
import WeightChart from '../../components/WeightChart/WeightChart.jsx'

function Dashboard() {
  const userName = data.USER_MAIN_DATA[0].userInfos.firstName
  return (
  <>
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h1 className='title'>Bonjour <span className='name'>{userName}</span></h1>
        <p className='message'>Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="congratulation">👏</span></p>
      </div>
      
      <div className='dashboard-content'>
        <div className='section-chart' >
          <div>
            <WeightChart />
          </div>

        </div>
        <div className='section-card'>
          <Card type="Calories"/>
          <Card type="Proteines"/>
          <Card type="Glucides"/>
          <Card type="Lipides"/>
        </div>
      </div>
    </div>
  </>
  )

}

export default Dashboard

