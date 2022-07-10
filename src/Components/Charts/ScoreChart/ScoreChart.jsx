import {React} from 'react'
// import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Pie, PieChart,Cell, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'; 
import './ScoreChart.css'


/**
 * Create score chart - show user score 
 * @param { Object }  data - user infos 
 * @returns { JSX }
*/

export default function ScoreChart({data}) {
  const Kpi = data.todayScore * 100  || data.score * 100 // score in pourcent

  const dataChart = [
    { name: 'Score', value: Kpi },
    { value: 100 - Kpi },
  ];
  const center = [
    { name: 'center', value: 100 },
  ];

  return (
    <div className='scorechart'>
      <ResponsiveContainer width="100%" height="100%" background="grey" className="radialChart">
      <PieChart>
      <Pie data={dataChart} dataKey="value" innerRadius={90} outerRadius={105} startAngle={70} endAngle={430}>
            {dataChart.map((entry, index) => (
                index === 0 
                  ?  <Cell key={`cell-${index}`} cornerRadius={15} fill="red"/>
                  :  <Cell key={`cell-${index}`} fill="transparent"/>
            ))}
      </Pie>
      <Pie data={center} fill="white" dataKey="value" innerRadius={0} outerRadius={90} animationDuration={0}></Pie>

  </PieChart>
      </ResponsiveContainer>
      <div className='scorechart-title'> {dataChart[0].name} </div>
      <div className='score'>
        <p className='score-pourcent'>{Kpi}%</p>
        <p className='score-content'>de votre <br></br> objectif</p>
      </div>
    </div>
  )
}


ScoreChart.propTypes = {
  data: PropTypes.object
}