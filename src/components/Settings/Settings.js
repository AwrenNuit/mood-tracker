import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Settings() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const user = useSelector(state => state.login); // DISPATCH
  const tracker = useSelector(state => state.tracker);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [food, setFood] = useState(false);
  const [meds, setMeds] = useState(false);
  const [movement, setMovement] = useState(false);
  const [pain, setPain] = useState(false);
  const [period, setPeriod] = useState(false);
  const [sleep, setSleep] = useState(false);
  const [therapy, setTherapy] = useState(false);
  const [water, setWater] = useState(false);

  useEffect(()=>{
    dispatch({type: `GET_TRACKER`, payload: user.id});
    // DISPATCH FOR USER INFO
  }, []);

  useEffect(()=>{
    setEmail(user.email); // SET
    setPassword(user.password); // SET
    if(tracker.food){
      setFood(tracker.food);
    }
    if(tracker.meds){
      setMeds(tracker.meds);
    }
    if(tracker.movement){
      setMovement(tracker.movement);
    }
    if(tracker.pain){
      setPain(tracker.pain);
    }
    if(tracker.period){
      setPeriod(tracker.period);
    }
    if(tracker.sleep) {
      setSleep(tracker.sleep);
    }
    if(tracker.therapy) {
      setTherapy(tracker.therapy);
    }
    if(tracker.water){
      setWater(tracker.water);
    }
  }, [user, tracker]);

  const closeAccount = () => {
    let popup = window.confirm(`Are you absolutely sure you want to close your account?`);
    if(popup){
      dispatch({type: `CLOSE_ACCOUNT`, payload: {id: user.id}});
      // HANDLE LOGOUT AFTER DELETING ACCOUNT
      history.push('/login');
    }
  }

  const updatePersonalDetails = e => {
    e.preventDefault();
    if(password){
      if(password === confirmPassword && email){
        dispatch({type: `PUT_USER_PASSWORD`, payload: {id: user.id, email, password}});
        // ON-SCREEN MESSAGE THAT DETAILS WERE SAVED
      }
      else {
        // ON-SCREEN ERROR FOR MIS-MATCHED PASSWORDS
      }
    }
    else if(email){
      dispatch({type: `PUT_USER_DETAILS`, payload: {id: user.id, email}});
      // ON-SCREEN MESSAGE THAT DETAILS WERE SAVED
    }
  }

  const updateTracker = e => {
    e.preventDefault();
    const dataToSend = {
      id: user.id,
      food,
      meds,
      movement,
      pain,
      period,
      sleep,
      therapy,
      water
    };
    dispatch({type: `PUT_TRACKER`, payload: dataToSend});
    // ON-SCREEN MESSAGE THAT TRACKERS SAVED
  }

  return(
    <center>
      <h1>Settings</h1>
      <h3>Personal</h3>
        <form onSubmit={updatePersonalDetails}>
          <input 
            className="text-input" 
            type="text" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            placeholder="email" 
          />
          <input 
            className="text-input" 
            type="password" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            placeholder="password" 
          />
          <input 
            className="text-input" 
            type="password" 
            value={confirmPassword} 
            onChange={(e)=>setConfirmPassword(e.target.value)} 
            placeholder="confirm password" 
          />
          <button type="submit">Save</button>
        </form>
      <h3>Trackers</h3>
        <form onSubmit={updateTracker}>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input 
                className="checkbox-input"
                type="checkbox" 
                checked={food}
                onChange={()=>setFood(!food)} 
              /> 
              Food
            </label>
          </div>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input 
                className="checkbox-input"
                type="checkbox" 
                checked={meds}
                onChange={()=>setMeds(!meds)} 
              /> 
              Meds
            </label>
          </div>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input 
                className="checkbox-input"
                type="checkbox" 
                checked={movement}
                onChange={()=>setMovement(!movement)} 
              /> 
              Movement
            </label>
          </div>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input 
                className="checkbox-input"
                type="checkbox" 
                checked={pain}
                onChange={()=>setPain(!pain)} 
              /> 
              Chronic Pain
            </label>
          </div>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input 
                className="checkbox-input"
                type="checkbox" 
                checked={period}
                onChange={()=>setPeriod(!period)} 
              /> 
              Periods
            </label>
          </div>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input 
                className="checkbox-input"
                type="checkbox" 
                checked={sleep}
                onChange={()=>setSleep(!sleep)} 
              /> 
              Sleep
            </label>
          </div>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input 
                className="checkbox-input"
                type="checkbox" 
                checked={therapy} 
                onChange={()=>setTherapy(!therapy)} 
              /> 
              Therapy
            </label>
            <div className="checkbox-container">
              <label className="checkbox-label">
                <input 
                  className="checkbox-input"
                  type="checkbox" 
                  checked={water}
                  onChange={()=>setWater(!water)} 
                /> 
                Water Intake
              </label>
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      <h3>Close Account</h3>
        <button onClick={closeAccount}>Close Account</button>
    </center>
  );
}