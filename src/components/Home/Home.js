import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import HomeCalendar from '../HomeCalendar/HomeCalendar';

export default function Home() {

  const dispatch = useCallback(useDispatch());
  const quote = useSelector(state => state.quote);

  useEffect(()=>{
    dispatch({type: `GET_QUOTE`});
  }, [dispatch]);

  return(
    <center>
      <h1>Mood Tracker</h1>
      <div>
        <HomeCalendar month={new Date().getMonth()} />
      </div>
      <div className="home-quote">
        {quote.quote} {quote.source}
      </div>
    </center>
  );
}