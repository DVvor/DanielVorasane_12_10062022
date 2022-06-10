import React from 'react'
import './Dashboard.css'

//Components
import Card from '../../components/Card-info/Card'

function Dashboard() {
  
  return (
  <>
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h1 className='title'>Bonjour "name"</h1>
        <p className='message'>Félicitation ! Vous avez explosé vos objectifs hier</p>
      </div>
      
      <div className='dashboard-content'>
        <div className='section-chart' >
          <div>chart</div>
        </div>
        <div className='section-card'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  </>
  )

}

export default Dashboard

