import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'; ///to give multiple styles

const Cards = ({data:{active,confirmed,recovered,deaths,lastupdatedtime}}) => {
    
    //var day = new Date(lastupdatedtime).getMonth();
    //var month = new Date(lastupdatedtime).getDay();
    //var year = new Date(lastupdatedtime).getFullYear();
    //var time = new Date(lastupdatedtime).getHours() + ":" + new Date(lastupdatedtime).getMinutes() + ":" + new Date(lastupdatedtime).getSeconds();
    var date = lastupdatedtime;//(day+1)+"/"+(month+1)+"/"+year+" at "+time;
    if(!confirmed){
        return 'Loading...';
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end = {parseInt(confirmed)} duration={2.5} separator = "," />
                        </Typography>
                        <Typography color="textSecondary">Last Update:{date}</Typography>
                        <Typography variant="body2">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end = {parseInt(recovered)} duration={2.5} separator = ","/>
                        </Typography>
                        <Typography color="textSecondary">Last Update:{date}</Typography>
                        <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end = {parseInt(deaths)} duration={2.5} separator = "," />
                        </Typography>
                        <Typography color="textSecondary">Last Update:{date}</Typography>
                        <Typography variant="body2">Number of Deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;