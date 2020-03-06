import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Settings() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const user = useSelector(state => state.login);
  const tracker = useSelector(state => state.tracker);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [food, setFood] = useState(false); // SET VIA REDUCER
  const [movement, setMovement] = useState(false); // SET VIA REDUCER
  const [sleep, setSleep] = useState(false); // SET VIA REDUCER
  const [therapy, setTherapy] = useState(false); // SET VIA REDUCER

  useEffect(()=>{
    dispatch({type: `GET_TRACKER`, payload: 1});
  }, []);

  useEffect(()=>{
    setEmail(user.email);
    setPassword(user.password);
    if(tracker.food){
      setFood(tracker.food);
    }
    if(tracker.movement){
      setMovement(tracker.movement);
    }
    if(tracker.sleep) {
      setSleep(tracker.sleep);
    }
    if(tracker.therapy) {
      setTherapy(tracker.therapy);
    }
  }, [user, tracker]);

  const deactivateAccount = () => {
    let popup = window.confirm(`Are you absolutely sure you want to close your account?`);
    if(popup){
      dispatch({type: `DELETE_ACCOUNT`, payload: user.id});
      // HANDLE LOGOUT AFTER DELETING ACCOUNT
      history.push('/login');
    }
  }

  const updatePersonalDetails = e => {
    e.preventDefault();
    if(password){
      if(password === confirmPassword && email){
        dispatch({type: `PUT_USER_PASSWORD`, payload: user.id, email, password});
        // ON-SCREEN MESSAGE THAT DETAILS WERE SAVED
      }
      else {
        // ON-SCREEN ERROR FOR MIS-MATCHED PASSWORDS
      }
    }
    else if(email){
      dispatch({type: `PUT_USER_DETAILS`, payload: user.id, email});
      // ON-SCREEN MESSAGE THAT DETAILS WERE SAVED
    }
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
        <div className="checkbox-container">
          <input 
            className="checkbox-input"
            type="checkbox" 
            checked={food}
            onChange={()=>setFood(!food)} 
          /> Food
        </div>
        <div className="checkbox-container">
          <input 
            className="checkbox-input"
            type="checkbox" 
            checked={movement}
            onChange={()=>setMovement(!movement)} 
          /> Movement
        </div>
        <div className="checkbox-container">
          <input 
            className="checkbox-input"
            type="checkbox" 
            checked={sleep}
            onChange={()=>setSleep(!sleep)} 
          /> Sleep
        </div>
        <div className="checkbox-container">
          <input 
            className="checkbox-input"
            type="checkbox" 
            checked={therapy} 
            onChange={()=>setTherapy(!therapy)} 
          /> Therapy
        </div>
      <h3>Close Account</h3>
        <button onClick={deactivateAccount}>Close Account</button>
    </center>
  );
}