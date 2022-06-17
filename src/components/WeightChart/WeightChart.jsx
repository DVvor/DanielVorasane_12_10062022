import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ResponsiveContainer, Label, Area, } from 'recharts';

import './WeightChart.css'


const USER_ACTIVITY = [
  {
      userId: 12,
      sessions: [
          {
              day: '2020-07-01',
              kilogram: 80,
              calories: 240
          },
          {
              day: '2020-07-02',
              kilogram: 80,
              calories: 220
          },
          {
              day: '2020-07-03',
              kilogram: 81,
              calories: 280
          },
          {
              day: '2020-07-04',
              kilogram: 81,
              calories: 290
          },
          {
              day: '2020-07-05',
              kilogram: 80,
              calories: 160
          },
          {
              day: '2020-07-06',
              kilogram: 78,
              calories: 162
          },
          {
              day: '2020-07-07',
              kilogram: 76,
              calories: 390
          }
      ]
  }
]
console.log(USER_ACTIVITY[0].sessions)

const styleTooltip = {
    backgroundColor: "#E60000",
    width: 39,
}
const labelStyle = {
  display: "none"
}
export default function WeightChart() {
  return (
    <div className='barchart'>
    <p className='barchart-title' >Activité quotidienne</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={USER_ACTIVITY[0].sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={10}
        >
          <CartesianGrid strokeDasharray="3 3" vertical= {false}/>
          <Area fill="#8884d8"/>
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation='left' axisLine={false} tickLine={false} hide="false"  tickCount="3"/>
          <YAxis yAxisId="right" orientation='right' axisLine={false} tickLine={false} tickCount="3" domain={['auto', 'auto']}/>
          <Tooltip contentStyle={styleTooltip} labelStyle={labelStyle} content={[{ name: 'none', value: 12, unit: 'kg' }]} />
          <Legend verticalAlign="top" align="right" height={36} iconType="circle" iconSize="10"/>
          <Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" radius={[4, 4, 0, 0]}/>
          <Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" radius={[4, 4, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
// export default class WeightChart extends PureComponent
