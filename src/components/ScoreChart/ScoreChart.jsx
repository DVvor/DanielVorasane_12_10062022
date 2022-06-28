import React from 'react'
import { RadialBarChart, RadialBar , Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './ScoreChart.css'

const USER_MAIN_DATA = [
  {
      id: 12,
      userInfos: {
          firstName: 'Karl',
          lastName: 'Dovineau',
          age: 31,
      },
      todayScore: 0.12,
      keyData: {
          calorieCount: 1930,
          proteinCount: 155,
          carbohydrateCount: 290,
          lipidCount: 50
      }
  },
  {
      id: 18,
      userInfos: {
          firstName: 'Cecilia',
          lastName: 'Ratorez',
          age: 34,
      },
      score: 0.3,
      keyData: {
          calorieCount: 2500,
          proteinCount: 90,
          carbohydrateCount: 150,
          lipidCount: 120
      }
  }
]


export default function ScoreChart() {
  return (
    <div className='scorechart'>
      <ResponsiveContainer width="100%" height={300}>
      <RadialBarChart 
        width={730} 
        height={250} 
        innerRadius="70%" 
        outerRadius="80%" 
        data={USER_MAIN_DATA[0].todayScore} 
        startAngle={360} 
        endAngle={180}
        style={{ backgroundColor: "#fbfbfb", borderRadius: 5 }}
      >
        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='value' />
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
        <Tooltip />
      </RadialBarChart>
        </ResponsiveContainer>
    </div>

  )
}