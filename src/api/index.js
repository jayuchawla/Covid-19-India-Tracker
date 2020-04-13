import axios from 'axios';

const url = 'https://api.covid19india.org/data.json';
export const fetchData = async() => {
    try{
        const { data } = await axios.get(url);
        
        //console.log(data.statewise[0].active);
        var active = data.statewise[0].active;
        var confirmed = data.statewise[0].confirmed;
        var recovered = data.statewise[0].recovered;
        var deaths = data.statewise[0].deaths;
        var lastupdatedtime = data.statewise[0].lastupdatedtime;
        //console.log(lastupdatedtime);
        return {active,confirmed,recovered,deaths,lastupdatedtime};


    } catch(error){
        console.log(error);
    }
}

export const fetchStateData = async(state) => {
    try{
        const { data } = await axios.get(url);
        var ind = parseInt(state);
        var active = data.statewise[ind].active;
        var confirmed = data.statewise[ind].confirmed;
        var recovered = data.statewise[ind].recovered;
        var deaths = data.statewise[ind].deaths;
        var state_name = data.statewise[ind].state;
        var lastupdatedtime = data.statewise[ind].lastupdatedtime;
        console.log(confirmed,recovered,deaths,lastupdatedtime);
        return {active,confirmed,recovered,deaths,lastupdatedtime,state_name};
    } catch(error){
        console.log(error);
    }
}


export const fetchDailyData = async () => {    
    try{

        const { data } = await axios.get(url);
        const ts = data.cases_time_series;
        const modifiedData = ts.map((dailyData) => ({
            confirmed: dailyData.totalconfirmed,
            deaths: dailyData.totaldeceased,
            recovered: dailyData.totalrecovered,
            date: dailyData.date,
        }));
        //console.log("helloworld"+modifiedData[0].totalconfirmed);
        return modifiedData;
    } catch(error) {
        console.log(error);
    }
}

export const fetchStates = async () => {
    try{
        const { data: { statewise } } = await axios.get(url);
        //console.log(statewise);
        //const ap =  statewise.map((st)=>st.state);
        return statewise.map((state)=>state.state);
        //const { data } = await axios.get(url);
        //var res = data.statewise;
        //console.log(res);
    } catch(error){
        console.log(error);
    }
}

export const fetchStatesCodes = async () => {
    try{
        const { data: { statewise } } = await axios.get(url);
        //console.log(statewise);
        //const ap =  statewise.map((st)=>st.state);
        return statewise.map((state)=>state.statecode);
        //const { data } = await axios.get(url);
        //var res = data.statewise;
        //console.log(res);
    } catch(error){
        console.log(error);
    }
}


/*module.exports = function() {
    return {
        myfunc: function() { 
        var Request = require("request");
        Request.get('https://api.covid19india.org/data.json', (error, response, body) => {
        if(error) {
            console.log(error);
        }
        var jso = JSON.parse(body);
        console.log("hellodude"+jso);
        }); }
     }
};
*/

