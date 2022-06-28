import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, } from 'recharts';

import './DailyActivityChart.css'

const styleTooltip = {
    backgroundColor: "#E60000",
    height: 70,
    width: 50,
    color: "white",
    fontSize: 10,
    fontWeight: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
}
const labelStyle = {
  display: "none"
}

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="activities-tooltip-container">
            <p className="weight-tooltip">{`${payload[0].value} kg`}</p>
            <p className="calories-tooltip">{`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
};

function getNumberDay(dayValue) {
  return new Date(dayValue).getDate() //  - type date - To get day number
}

export default function dailyActivityChart({data}) {

  return (
    <div className='barchart'>
    <p className='barchart-title' >Activité quotidienne</p>
      <ResponsiveContainer height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={10}
        >
          <CartesianGrid strokeDasharray="3 3" vertical= {false}/>
          <Area fill="#8884d8"/>
          <XAxis dataKey="day" tickFormatter={getNumberDay} />
          <YAxis yAxisId="left" orientation='left' axisLine={false} tickLine={false} hide="false"  tickCount="3"/>
          <YAxis yAxisId="right" orientation='right' axisLine={false} tickLine={false} tickCount="3" domain={['auto', 'auto']}/>
          <Tooltip labelStyle={labelStyle} wrapperStyle={styleTooltip} content={<CustomTooltip />} />
          <Legend verticalAlign="top" align="right" height={36} iconType="circle" iconSize="10"/>
          <Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" radius={[4, 4, 0, 0]}/>
          <Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" radius={[4, 4, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
