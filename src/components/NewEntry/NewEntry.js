import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './NewEntry.css';

export default function NewEntry() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const user = useSelector(state => state.user);
  const tracker = useSelector(state => state.tracker);
  const [challenge, setChallenge] = useState('');
  const [date, setDate] = useState('');
  const [food, setFood] = useState('');
  const [meds, setMeds] = useState('');
  const [mood, setMood] = useState('');
  const [movement, setMovement] = useState('');
  const [pain, setPain] = useState('');
  const [period, setPeriod] = useState('');
  const [sleep, setSleep] = useState('');
  const [therapy, setTherapy] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [water, setWater] = useState('');

  useEffect(()=>{
    dispatch({type: `GET_TRACKER`, payload: user.id});
  }, [dispatch, user]);

  useEffect(()=>{
    const year = new Date().getFullYear();
    let month, day;
    if(new Date().getMonth()+1 < 10){
      month = `0${new Date().getMonth()+1}`;
    }
    else {
      month = new Date().getMonth()+1;
    }
    if(new Date().getDate() < 10){
      day = `0${new Date().getDate()}`;
    }
    else {
      day = new Date().getDate();
    }
    setDate(`${year}-${month}-${day}`);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    let dataToSend = {id: user.id};
    const variableList = [
      challenge, date, food, meds, mood, movement, 
      pain, period, sleep, therapy, thoughts, water
    ];
    const variableString = [
      'challenge', 'date', 'food', 'meds', 'mood', 'movement', 
      'pain', 'period', 'sleep', 'therapy', 'thoughts', 'water'
    ]; 
    for(let i=0; i< variableList.length; i++) {
      if(variableList[i]) {
        dataToSend = {...dataToSend, [variableString[i]]: variableList[i]};
      }
      else {
        dataToSend = {...dataToSend, [variableString[i]]: null};
      }
    }
    dispatch({type: `POST_ENTRY`, payload: dataToSend});
    history.push('/home');
  };

  return(
    <center>
      {/* overlay "before you begin...take a few full breaths, exhaling slowly" click to fade out */}
      {/* could also lay out like storybook/diary pages, one fading into the next */}
      <h1>New Entry</h1>
      <form className="entry-form" onSubmit={handleSubmit}>
        <div>
          <h3>Which date is this entry for?</h3>
          <div className="entry-date-container">
            <input 
              className="entry-date" 
              type="date" 
              value={date} 
              onChange={(e)=>setDate(e.target.value)} 
            />
          </div>
        </div>
        <div> 
          <h3>How are you feeling today?</h3>
          <div className="entry-radio-container">
            <label className="entry-radio-label">
              <input 
                type="radio" 
                className="mood-radio"
                name="mood" 
                value="Great" 
                onChange={(e)=>setMood(e.target.value)} 
              />
              Great
            </label>
            <label className="entry-radio-label">
              <input 
                type="radio" 
                className="mood-radio"
                name="mood" 
                value="Meh" 
                onChange={(e)=>setMood(e.target.value)} 
              />
              Meh
            </label>
            <label className="entry-radio-label">
              <input 
                type="radio" 
                className="mood-radio"
                name="mood" 
                value="Bad" 
                onChange={(e)=>setMood(e.target.value)} 
              />
              Bad
            </label>
          </div>
        </div>
        <div>
          <h3>How challenging was today?</h3>
          <div className="entry-radio-container">
            <label className="entry-radio-label">
              <input 
                type="radio" 
                className="mood-radio"
                name="challenge" 
                value="Harder" 
                onChange={(e)=>setChallenge(e.target.value)} 
              />
              Harder
            </label>
            <label className="entry-radio-label">
              <input 
                type="radio" 
                className="mood-radio"
                name="challenge" 
                value="Average"
                onChange={(e)=>setChallenge(e.target.value)} 
              />
              Average
            </label>
            <label className="entry-radio-label">
              <input 
                type="radio" 
                className="mood-radio"
                name="challenge" 
                value="Easier" 
                onChange={(e)=>setChallenge(e.target.value)} 
              />
              Easier
            </label>
          </div>
        </div>
        {tracker.food ?
          <div>
            <h3>Did you meet your food goals?</h3>
            <div className="entry-radio-container">
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="food" 
                  value="Yes" 
                  onChange={(e)=>setFood(e.target.value)} 
                />
                Yes
              </label>
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="food" 
                  value="No" 
                  onChange={(e)=>setFood(e.target.value)} 
                />
                No
              </label>
            </div>
          </div>
        :
          ''
        }
        {tracker.meds ?
          <div>
            <h3>Did you take your meds?</h3>
            <div className="entry-radio-container">
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="meds" 
                  value="Yes" 
                  onChange={(e)=>setMeds(e.target.value)} 
                />
                Yes
              </label>
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="meds" 
                  value="No" 
                  onChange={(e)=>setMeds(e.target.value)} 
                />
                No
              </label>
            </div>
          </div>
        :
          ''
        }
        {tracker.movement ?
          <div>
            <h3>Did you meet your movement goals?</h3>
            <div className="entry-radio-container">
              <label className="entry-radio-label">
                <input 
                  type="radio"
                  className="mood-radio" 
                  name="movement" 
                  value="Yes" 
                  onChange={(e)=>setMovement(e.target.value)} 
                />
                Yes
              </label>
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="movement" 
                  value="No" 
                  onChange={(e)=>setMovement(e.target.value)} 
                />
                No
              </label>
            </div>
          </div>
        :
          ''
        }
        {tracker.pain ?
          <div>
            <h3>How much chronic pain did you have?</h3>
            <div className="entry-radio-container">
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="pain" 
                  value="More"
                  onChange={(e)=>setPain(e.target.value)} 
                />
                More
              </label>
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="pain" 
                  value="Average"
                  onChange={(e)=>setPain(e.target.value)} 
                />
                Average
              </label>
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="pain" 
                  value="Less" 
                  onChange={(e)=>setPain(e.target.value)} 
                />
                Less
              </label>
            </div>
          </div>
        :
          ''
        }
        {tracker.period ?
          <div>
            <h3>Are you on your period?</h3>
            <div className="entry-radio-container">
              <label className="entry-radio-label">
                <input 
                  type="radio"
                  className="mood-radio" 
                  name="period" 
                  value="Yes" 
                  onChange={(e)=>setPeriod(e.target.value)} 
                />
                Yes
              </label>
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="period" 
                  value="No" 
                  onChange={(e)=>setPeriod(e.target.value)} 
                />
                No
              </label>
            </div>
          </div>
        :
          ''
        }
        {tracker.sleep ?
          <div>
            <h3>How well did you sleep last night?</h3>
            <div className="entry-radio-container">
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="sleep" 
                  value="Great" 
                  onChange={(e)=>setSleep(e.target.value)} 
                />
                Great
              </label>
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="sleep" 
                  value="Meh" 
                  onChange={(e)=>setSleep(e.target.value)} 
                />
                Meh
              </label>
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="sleep" 
                  value="Bad" 
                  onChange={(e)=>setSleep(e.target.value)} 
                />
                Bad
              </label>
            </div>
          </div>
        :
          ''
        }
        {tracker.therapy ?
          <div>
            <h3>Did you have therapy today?</h3>
            <div className="entry-radio-container">
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="therapy" 
                  value="Yes" 
                  onChange={(e)=>setTherapy(e.target.value)} 
                />
                Yes
              </label>
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="therapy" 
                  value="No" 
                  onChange={(e)=>setTherapy(e.target.value)} 
                />
                No
              </label>
            </div>
          </div>
        :
          ''
        }
        {tracker.water ?
          <div>
            <h3>Did you drink enough water?</h3>
            <div className="entry-radio-container">
              <label className="entry-radio-label">
                <input 
                  type="radio"
                  className="mood-radio" 
                  name="water" 
                  value="Yes" 
                  onChange={(e)=>setWater(e.target.value)} 
                />
                Yes
              </label>
              <label className="entry-radio-label">
                <input 
                  type="radio" 
                  className="mood-radio"
                  name="water" 
                  value="No" 
                  onChange={(e)=>setWater(e.target.value)} 
                />
                No
              </label>
            </div>
          </div>
        :
          ''
        }
        <div>
          <h3>Any additional thoughts?</h3>
          <textarea 
            className="entry-textarea"
            cols="20" 
            rows="6" 
            maxLength="300"
            value={thoughts}
            onChange={(e)=>setThoughts(e.target.value)}
          />
        </div>
        <button className="btn-primary" type="submit">Log</button>
      </form>
    </center>
  );
}