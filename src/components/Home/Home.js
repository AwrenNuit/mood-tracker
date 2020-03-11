import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Home() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const [date, setDate] = useState('');

  const pushToCharts = () => history.push('/charts');

  const pushToNewEntry = () => {
    if(date){
      dispatch({type: `SET_DATE`, payload: date});
      history.push('/new-entry');
    }
  }

  const pushToSettings = () => history.push('/settings');

  return(
    <center>
    <h1>Mood Tracker</h1>
      <div>
        <p>PUT A CALENDAR WITH WHAT DAYS HAVE ENTRIES HERE</p>
        <p>PUT A RANDOM MINDFULNESS QUOTATION HERE</p>
      </div>
      <button onClick={pushToSettings}>Settings</button>
      <button onClick={pushToCharts}>Charts</button>
      <form onSubmit={pushToNewEntry}>
        <input type="date" onChange={(e)=>setDate(e.target.value)} />
        <button type="submit">New Entry</button>
      </form>
    </center>
  );
}