import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Settings() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const deactivateAccount = id => {
    let popup = window.confirm(`Are you absolutely sure you want to close your account?`);
    if(popup){
      dispatch({type: `DELETE_ACCOUNT`, payload: id});
    }
  }

  const updatePersonalDetails = id => {
    if(password){
      if(password === confirmPassword){
        dispatch({type: `PUT_USER_PASSWORD`, payload: id, email, password, username});
      }
    }
    else {
      dispatch({type: `PUT_USER_DETAILS`, payload: id, email, username});
    }
  }

  return(
    <center>
      <h1>Settings</h1>
      <h3>Personal</h3>
      <form onSubmit={updatePersonalDetails}>
        <input className="text-input" type="text" value={username} onChange={setUsername} placeholder="username" />
        <input className="text-input" type="text" value={email} onChange={setEmail} placeholder="email" />
        <input className="text-input" type="password" value={password} onChange={setPassword} placeholder="password" />
        <input className="text-input" type="password" value={confirmPassword} onChange={setConfirmPassword} placeholder="confirm password" />
        <button type="submit">Save</button>
      </form>
      <h3>Trackers</h3>
        <input type="checkbox" /> Food
        <input type="checkbox" /> Movement
        <input type="checkbox" /> Sleep
        <input type="checkbox" /> Therapy
      <h3>Deactivate Account</h3>
        <button onClick={deactivateAccount}>Deactivate</button>
    </center>
  );
}