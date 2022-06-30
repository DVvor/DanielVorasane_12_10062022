import {React} from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './ScoreChart.css'


/**
 * Create score chart - show user score 
 * @param { Object }  data - user infos 
 * @returns { JSX }
*/

export default function ScoreChart({data}) {
    // console.log(data)
      const Kpi = data.todayScore * 100  || data.score * 100 // score in pourcent

      const dataChart = [
        {
          "name": "Score",
          "value":Kpi,
          "fill": "red"
        }]

      return (
        <div className='scorechart'>
          <ResponsiveContainer width="100%" height={300} background="grey">
          <RadialBarChart 
            innerRadius="70%" 
            outerRadius="80%" 
            data={dataChart} 
            startAngle={-180} 
            endAngle={-540}
            style={{ backgroundColor: "#fbfbfb", borderRadius: 5 }}
          
          >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false}/>
          
          <RadialBar cornerRadius={15} clockWise={false} dataKey="value" background={false} />
          </RadialBarChart>
          </ResponsiveContainer>
         <div className='scorechart-title'> {dataChart[0].name} </div>
          <div className='score'>
            <p className='score-pourcent'>{Kpi}%</p>
            <p className='score-content'>de votre <br></br> objectif</p>
          </div>
        </div>
      )
}