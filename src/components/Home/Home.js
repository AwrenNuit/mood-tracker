import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HomeCalendar from '../HomeCalendar/HomeCalendar';

export default function Home() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const quote = useSelector(state => state.quote);
  const [date, setDate] = useState('');

  useEffect(()=>{
    dispatch({type: `GET_QUOTE`});
  }, [dispatch]);

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
        <HomeCalendar month={new Date().getMonth()} />
      </div>
      <div>
        {quote.quote} {quote.source}
      </div>
    </center>
  );
}