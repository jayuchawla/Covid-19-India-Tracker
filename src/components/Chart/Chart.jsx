import React, { useState, useEffect } from 'react';
import {fetchDailyData,fetchStateData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data:{confirmed,deaths,recovered,state_name},state}) => {

    const [dailyData,setDailyData] = useState([]); 

    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }
        //console.log("hihello"+dailyData.totalconfirmed);
        fetchAPI();
    },[setDailyData]);
    //working console.log("helloWWW"+dailyData.length);
    //const lbs = dailyData.map(ddate=>date);
    //console.log("vvvvvvv"+lbs);

    const lineChart = (

        dailyData[0]
            ? (
            <Line
                data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
            },{
                data: dailyData.map((data) => data.recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
            },
            ],
            }}
      />) : null
    );

    const barChart = (
        confirmed
            ? (
                <Bar 
                    data = {{
                        labels: ['Infected','Recovered','Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['rgba(0,0,255,0.8)','rgba(0,255,0,0.8)','rgba(255,0,0,0.8)'],
                            data: [confirmed,recovered,deaths]
                        }]
                    }}
                    options={{
                        legend: {display: false},
                        title: {display:true, text:`Current conditions in ${state_name}`}                        
                    }}
                />
            ) : null
    );
    return(
        <div className={styles.container}>
            {state?barChart:lineChart}
        </div>
    )
}

export default Chart;