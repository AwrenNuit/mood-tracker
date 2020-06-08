import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './NewEntry.css';
import RadioBtn from '../RadioBtn/RadioBtn';

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

  const handleSubmit = async e => {
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
    await dispatch({type: `POST_ENTRY`, payload: dataToSend});
    await dispatch({type: `GET_CALENDAR`, payload: user.id})
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
            <RadioBtn
              name="mood"
              text="Great"
              setValue={setMood}
            />
            <RadioBtn
              name="mood"
              text="Meh"
              setValue={setMood}
            />
            <RadioBtn
              name="mood"
              text="Bad"
              setValue={setMood}
            />
          </div>
        </div>
        <div>
          <h3>How challenging was today?</h3>
          <div className="entry-radio-container">
            <RadioBtn
              name="challenge"
              text="Harder"
              setValue={setChallenge}
            />
            <RadioBtn
              name="challenge"
              text="Average"
              setValue={setChallenge}
            />
            <RadioBtn
              name="challenge"
              text="Easier"
              setValue={setChallenge}
            />
          </div>
        </div>
        {tracker.food ?
          <div>
            <h3>Did you meet your food goals?</h3>
            <div className="entry-radio-container">
              <RadioBtn
                name="food"
                text="Yes"
                setValue={setFood}
              />
              <RadioBtn
                name="food"
                text="No"
                setValue={setFood}
              />
            </div>
          </div>
        :
          ''
        }
        {tracker.meds ?
          <div>
            <h3>Did you take your meds?</h3>
            <div className="entry-radio-container">
              <RadioBtn
                name="meds"
                text="Yes"
                setValue={setMeds}
              />
              <RadioBtn
                name="meds"
                text="No"
                setValue={setMeds}
              />
            </div>
          </div>
        :
          ''
        }
        {tracker.movement ?
          <div>
            <h3>Did you meet your movement goals?</h3>
            <div className="entry-radio-container">
            <RadioBtn
              name="movement"
              text="Yes"
              setValue={setMovement}
            />
            <RadioBtn
              name="movement"
              text="No"
              setValue={setMovement}
            />
            </div>
          </div>
        :
          ''
        }
        {tracker.pain ?
          <div>
            <h3>How much chronic pain did you have?</h3>
            <div className="entry-radio-container">
            <RadioBtn
              name="pain"
              text="More"
              setValue={setPain}
            />
            <RadioBtn
              name="pain"
              text="Average"
              setValue={setPain}
            />
            <RadioBtn
              name="pain"
              text="Less"
              setValue={setPain}
            />
            </div>
          </div>
        :
          ''
        }
        {tracker.period ?
          <div>
            <h3>Are you on your period?</h3>
            <div className="entry-radio-container">
              <RadioBtn
                name="period"
                text="Yes"
                setValue={setPeriod}
              />
              <RadioBtn
                name="period"
                text="No"
                setValue={setPeriod}
              />
            </div>
          </div>
        :
          ''
        }
        {tracker.sleep ?
          <div>
            <h3>How well did you sleep last night?</h3>
            <div className="entry-radio-container">
              <RadioBtn
                name="sleep"
                text="Great"
                setValue={setSleep}
              />
              <RadioBtn
                name="sleep"
                text="Meh"
                setValue={setSleep}
              />
              <RadioBtn
                name="sleep"
                text="Bad"
                setValue={setSleep}
              />
            </div>
          </div>
        :
          ''
        }
        {tracker.therapy ?
          <div>
            <h3>Did you have therapy today?</h3>
            <div className="entry-radio-container">
              <RadioBtn
                name="therapy"
                text="Yes"
                setValue={setTherapy}
              />
              <RadioBtn
                name="therapy"
                text="No"
                setValue={setTherapy}
              />
            </div>
          </div>
        :
          ''
        }
        {tracker.water ?
          <div>
            <h3>Did you drink enough water?</h3>
            <div className="entry-radio-container">
              <RadioBtn
                name="water"
                text="Yes"
                setValue={setWater}
              />
              <RadioBtn
                name="water"
                text="No"
                setValue={setWater}
              />
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