import {React, useEffect, useState} from 'react'
import { RadarChart, PolarGrid , PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import './PerformanceChart.css'

// const USER_PERFORMANCE = [
//   {
//       userId: 12,
//       kind: {
//           1: 'cardio',
//           2: 'energy',
//           3: 'endurance',
//           4: 'strength',
//           5: 'speed',
//           6: 'intensity'
//       },
//       data: [
//           {
//               value: 80,
//               kind: 1
//           },
//           {
//               value: 120,
//               kind: 2
//           },
//           {
//               value: 140,
//               kind: 3
//           },
//           {
//               value: 50,
//               kind: 4
//           },
//           {
//               value: 200,
//               kind: 5
//           },
//           {
//               value: 90,
//               kind: 6
//           }
//       ]
//   },
//   {
//       userId: 18,
//       kind: {
//           1: 'cardio',
//           2: 'energy',
//           3: 'endurance',
//           4: 'strength',
//           5: 'speed',
//           6: 'intensity'
//       },
//       data: [
//           {
//               value: 200,
//               kind: 1
//           },
//           {
//               value: 240,
//               kind: 2
//           },
//           {
//               value: 80,
//               kind: 3
//           },
//           {
//               value: 80,
//               kind: 4
//           },
//           {
//               value: 220,
//               kind: 5
//           },
//           {
//               value: 110,
//               kind: 6
//           }
//       ]
//   }
// ]

export default function PerformanceRadarChart({datas}) {

    const [datasIsCompleted, setDatasIsCompleted] = useState(false)

    function checkData() {
        // console.log(datas.length)
        if (datas.data?.length > 0) {
            setDatasIsCompleted(true)
        } else {
            setDatasIsCompleted(false)
        }
    }
    
    useEffect(() => {
        checkData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })
    


    if(datasIsCompleted){
        
        const nameTick = datas.kind
        
        function changeTickName(tickIndex) {
            return nameTick[tickIndex]
        }
    
        return (
          <div className='radar'>
            <ResponsiveContainer width="100%" height={350}>
            <RadarChart
              style={{ backgroundColor: "#282D30", borderRadius: 5 }}
              outerRadius={'70%'}
              margin= {{ top: 5, right: 5, bottom: 5, left: 5 }}
              data={datas.data}
              // data={ USER_PERFORMANCE[0].data}
      
              >
              <PolarGrid stroke="white" strokeLinejoin='inner' radialLines={false} />
              <PolarAngleAxis style={{ fontSize: '0.833vw' }} stroke="white" dataKey="kind" tickLine={false} tickFormatter={changeTickName} dy={5} />
              <Radar name="user" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
            </ResponsiveContainer>  
          </div>
        )
    }
}


