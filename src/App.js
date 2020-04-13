import React from 'react';

import {Cards,Chart,StatePicker} from './components';
import styles from './App.module.css';
import {fetchData,fetchDailyData,fetchStateData} from './api';
//import Request from 'request';
//import logo from './logo.svg';
import image from './images/img2.png';
import './App.css';


class App extends React.Component{
  state = {
    data: {},
    //data1: [[]],
    state: "",
  }
  
  async componentDidMount(){
    const fetchedData = await fetchData();
    const fetchedDailyData = await fetchDailyData();
    this.setState({data:fetchedData,});
    //console.log("datanew"+data);
  }

  handleStateChange = async(state) => {
    const fetchedData = await fetchStateData(state);
    this.setState({data:fetchedData, state:state});
    //console.log("hello"+state);
  }

  render()
  {
    const {data,state} = this.state;
    //console.log("hello1234"+data1);
    return(
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data}/>
        <StatePicker handleStateChange={this.handleStateChange} />
        <Chart data = {data} state={state}/>
      </div>
    )
  }
}
export default App;
