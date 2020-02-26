import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Login.css';

export default function Login() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => dispatch({type: `LOGIN`, payload: password, username});

  const pushToRegistrationPage = () => history.push('/signup');

  return(
    <center>
      <div className="login-register-main-container">
        <h1 className="login-register-heading">Mood Tracker</h1>
        <div className="login-register-content-container">
          <form onSubmit={handleLogin}>
            <input className="login-register-input" type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="username" />
            <input className="login-register-input" type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
            <button className="login-register-btn" type="submit">Log In</button>
          </form>
          <hr className="login-register-hr" />
          <button className="login-register-btn" onClick={pushToRegistrationPage}>sign up</button>
        </div>
      </div>
    </center>
  );
}