import React from 'react'
import { LineChart,Line , XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './AverageSessionTimeChart.css'

const styleTooltip = {
  borderRadius: 0,
  backgroundColor: "#FFFFFF",
  height: 25,
  width: 39,
  color: "black",
  fontSize: 10,
  fontWeight: 500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}

const CustomTooltip = ({ active, payload }) => {
  // console.log(payload)
if (active) {
  return (
    <div className="session-tooltip-container">
              <p className="session-tooltip">{`${payload[0].value} min`}</p>
        </div>
  );
}

return null;
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
 

  export default function SessionChart({data}) {
  return (
    <div className='sessionchart'>
      <p className='sessionchart-title' >Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height={300}>
      <LineChart width="100%" height={250} data={data}
        margin={{ top: 5, right: 30, left: 15, bottom: 5 }}>
      <CartesianGrid horizontalPoints={[0, 0]} verticalPoints={[0, 0]} />
      <XAxis dataKey="day" tickCount= "7" stroke='#FE7F7F' tickLine={false} axisLine={false} tickFormatter={changeTickDay} />
      <YAxis dataKey="sessionLength" type="number" domain={['dataMin - 40', 'dataMax + 100']}  axisLine={true} hide="true"/>
      <Tooltip wrapperStyle={styleTooltip} content={<CustomTooltip />} />
      <Line type="natural" name="minutes" dataKey="sessionLength" 
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