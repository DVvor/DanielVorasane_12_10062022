import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import './Dashboard.css'

//Components
import Card from '../../Components/Card-info/Card'
import DailyActivityChart from '../../Components/Charts/DailyActivityChart/DailyActivityChart.jsx'
import AverageSessionTimeChart from '../../Components/Charts/AverageSessionTimeChart/AverageSessionTimeChart'
import PerformanceRadarChart from '../../Components/Charts/PerformanceChart/PerformanceChart'
import ScoreChart from '../../Components/Charts/ScoreChart/ScoreChart'

// Datas
import { getUserInfos, getUserActivities, getUserAverageSessions, getUserPerformance } from "../../Datas/getUserDatas"


function Dashboard() {
  const { id } = useParams(); // get current page ID

  const [userInfosDatas, setUserInfosDatas] = useState([])
  const [userActivitiesDatas, setUserActivitiesDatas] = useState({});
  const [userSessionsDatas, setUserSessionsDatas] = useState();
  const [userPerformanceDatas, setUserPerformanceDatas] = useState([]);
    
  async function fetchData(userId) {
    const userInfosResult = await getUserInfos(userId)
    setUserInfosDatas(userInfosResult)

    const userActivitiesResult = await getUserActivities(userId)
    setUserActivitiesDatas(userActivitiesResult)

    const userSessionsResult = await getUserAverageSessions(userId)
    setUserSessionsDatas(userSessionsResult)

    const userPerformanceResult = await getUserPerformance(userId)
    setUserPerformanceDatas(userPerformanceResult)
  }

  useEffect(() => {
    fetchData(id)
  }, [id])
  

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
          <Card type="Calories"  data={userInfosDatas.keyData}/>
          <Card type="Proteines" data={userInfosDatas.keyData}/>
          <Card type="Glucides" data={userInfosDatas.keyData}/>
          <Card type="Lipides" data={userInfosDatas.keyData}/>
        </div>
      </div>
    </div>
  </>
  )

}

export default Dashboard

