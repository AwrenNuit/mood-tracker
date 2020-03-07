import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './NewEntry.css';

export default function NewEntry() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const [food, setFood] = useState('');
  const [mood, setMood] = useState('');
  const [movement, setMovement] = useState('');
  const [sleep, setSleep] = useState('');
  const [therapy, setTherapy] = useState('');

  const handleSubmit = () => {
    dispatch({type: `POST_ENTRY`, payload: {id: 1, mood, food, movement, sleep, therapy}});
    history.push('/home');
  }

  return(
    <center>
      <h1>New Entry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>How are you feeling today?</h3>
          <input 
            type="radio" 
            className="mood-radio"
            name="mood" 
            value="Great" 
            onChange={(e)=>setMood(e.target.value)} 
          />Great
          <input 
            type="radio" 
            className="mood-radio"
            name="mood" 
            value="Meh" 
            onChange={(e)=>setMood(e.target.value)} 
          />Meh
          <input 
            type="radio" 
            className="mood-radio"
            name="mood" 
            value="Bad" 
            onChange={(e)=>setMood(e.target.value)} 
          />Bad
        </div>
        <div>
          <h3>Did you meet your food goals?</h3>
          <input 
            type="radio" 
            className="mood-radio"
            name="food" 
            value="Yes" 
            onChange={(e)=>setFood(e.target.value)} 
          />Yes
          <input 
            type="radio" 
            className="mood-radio"
            name="food" 
            value="No" 
            onChange={(e)=>setFood(e.target.value)} 
          />No
        </div>
        <div>
          <h3>Did you meet your movement goals?</h3>
          <input 
            type="radio"
            className="mood-radio" 
            name="movement" 
            value="Yes" 
            onChange={(e)=>setMovement(e.target.value)} 
          />Yes
          <input 
            type="radio" 
            className="mood-radio"
            name="movement" 
            value="No" 
            onChange={(e)=>setMovement(e.target.value)} 
          />No
        </div>
        <div>
          <h3>How well did you sleep last night?</h3>
          <input 
            type="radio" 
            className="mood-radio"
            name="sleep" 
            value="Great" 
            onChange={(e)=>setSleep(e.target.value)} 
          />Great
          <input 
            type="radio" 
            className="mood-radio"
            name="sleep" 
            value="Meh" 
            onChange={(e)=>setSleep(e.target.value)} 
          />Meh
          <input 
            type="radio" 
            className="mood-radio"
            name="sleep" 
            value="Bad" 
            onChange={(e)=>setSleep(e.target.value)} 
          />Bad
        </div>
        <div>
          <h3>Did you have therapy today?</h3>
          <input 
            type="radio" 
            className="mood-radio"
            name="therapy" 
            value="Yes" 
            onChange={(e)=>setTherapy(e.target.value)} 
          />Yes
          <input 
            type="radio" 
            className="mood-radio"
            name="therapy" 
            value="No" 
            onChange={(e)=>setTherapy(e.target.value)} 
          />No
        </div>
        <div>
          <h3>Any additional thoughts?</h3>
          <textarea cols="30" rows="6" maxLength="300"></textarea>
        </div>
        <button type="submit">Log</button>
      </form>
    </center>
  );
}