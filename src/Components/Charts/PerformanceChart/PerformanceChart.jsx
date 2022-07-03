import {React, useEffect, useState} from 'react'
import { RadarChart, PolarGrid , PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import './PerformanceChart.css'
import PropTypes from 'prop-types';


/**
 * Create radar chart - show user performance 
 * @param { object }  datas - user activities data
 * @returns { JSX }
*/
export default function PerformanceRadarChart({datas}) {
console.log(typeof datas)
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
        
        function changeTickName(tickIndex) { // change tick name by data kind
            return nameTick[tickIndex]
        }
    
        return (
          <div className='radar'>
            <ResponsiveContainer width="100%" height={300}>
            <RadarChart
              style={{ backgroundColor: "#282D30", borderRadius: 5 }}
              outerRadius={'70%'}
              margin= {{ top: 5, right: 5, bottom: 5, left: 5 }}
              data={datas.data}      
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

PerformanceRadarChart.propTypes = {
    datas: PropTypes.object
}
