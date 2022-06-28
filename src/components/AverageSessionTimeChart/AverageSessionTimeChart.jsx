import React from 'react'
import { LineChart,Line , XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './AverageSessionTimeChart.css'


  export default function SessionChart({data}) {
  return (
    <div className='sessionchart'>
      <p className='sessionchart-title' >Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height={340}>
      <LineChart width="100%" height={250} data={data}
        margin={{ top: 5, right: 30, left: 15, bottom: 5 }}>
      <CartesianGrid horizontalPoints={[0, 0]} verticalPoints={[0, 0]} />
      <XAxis dataKey="day" tickCount= "7" stroke='#FE7F7F' tickLine={false} axisLine={false} tickFormatter={changeTickDay} />
      <YAxis dataKey="sessionLength" type="number" domain={['dataMin - 40', 'dataMax + 100']}  axisLine={true} hide="true"/>
      <Tooltip />
      <Line type="monotone" name="minutes" dataKey="sessionLength" 
      strokeWidth={2} //thickness of curve
      activeDot={{ r: 8 }} // point cursor
      dot={{ r: 0 }} // intersection in line
      stroke= {"#FE7F7F"}
      />  
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function changeTickDay(tickIndex) {
 const dayLetter = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D"
 }
 return dayLetter[tickIndex]
}
