import React from 'react'
import { useState, useEffect } from 'react'
import './Dashboard.css'

//assets
// import CalorieIcon from '../../assets/calories-icon.svg'
// import ProteinIcon from '../../assets/protein-icon.svg'
// import CalorieIcon from '../../assets/calories-icon.svg'
// import CalorieIcon from '../../assets/calories-icon.svg'

//Components
import Card from '../../components/Card-info/Card'
// import data from '../../datas/data'
import DailyActivityChart from '../../components/DailyActivityChart/DailyActivityChart.jsx'
import AverageSessionTimeChart from '../../components/AverageSessionTimeChart/AverageSessionTimeChart'
import PerformanceRadarChart from '../../components/PerformanceChart/PerformanceChart'
import ScoreChart from '../../components/ScoreChart/ScoreChart'


import { getUserInfos, getUserActivities, getUserAverageSessions, getUserPerformance } from "../../datas/getUserDatas"

function Dashboard() {
  const [userInfosDatas, setUserInfosDatas] = useState([])
  const [userActivitiesDatas, setUserActivitiesDatas] = useState({});
  const [userSessionsDatas, setUserSessionsDatas] = useState();
  const [userPerformanceDatas, setUserPerformanceDatas] = useState([]);
    
  async function fetchData() {
    const userInfosResult = await getUserInfos()
    setUserInfosDatas(userInfosResult)

    const userActivitiesResult = await getUserActivities()
    setUserActivitiesDatas(userActivitiesResult)

    const userSessionsResult = await getUserAverageSessions()
    setUserSessionsDatas(userSessionsResult)

    const userPerformanceResult = await getUserPerformance()
    setUserPerformanceDatas(userPerformanceResult)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(userInfosDatas)
  

    const username = userInfosDatas.userInfos?.firstName

    return (
  <>
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h1 className='title'>Bonjour <span className='name'>{username}</span></h1>
        <p className='message'>Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="congratulation">👏</span></p>
      </div>
      
      <div className='dashboard-content'>
        <div className='section-chart' >
            <DailyActivityChart data={userActivitiesDatas} />
            <AverageSessionTimeChart data={userSessionsDatas}/>
            <PerformanceRadarChart datas={userPerformanceDatas} />
            <ScoreChart data={userInfosDatas}/>
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

