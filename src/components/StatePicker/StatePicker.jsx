import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './StatePicker.module.css';
import {fetchStates} from '../../api';

const StatePicker = ({handleStateChange}) => {

    const [fetchedStates, setFetchedStates] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () => {
            setFetchedStates(await fetchStates());
        }

        fetchAPI();
    }, [setFetchedStates]);
    // console.log(fetchedStates.);
     
    return(
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
                {fetchedStates.map((i, state) => <option key={i} value={state}> {i} </option>)/*important change*/ } 
            </NativeSelect>
        </FormControl>
    );
};

export default StatePicker;