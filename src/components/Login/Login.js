import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Login.css';

export default function Login() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const user = useSelector(state => state.login);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(()=>{
    if(user && user.id){
      history.push('/home');
    }
  }, [history, user]);

  const handleLogin = e => {
    e.preventDefault();
    dispatch({type: `LOGIN`, payload: {password, username}});
  }

  const pushToRegistrationPage = () => history.push('/signup');

  return(
    <center>
      <div className="login-register-main-container">
        <h1 className="login-register-heading">Mood Tracker</h1>
        <div className="login-register-content-container">
          <form onSubmit={handleLogin}>
            <input className="text-input" type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="username" />
            <input className="text-input" type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
            <button className="login-register-btn" type="submit">Log In</button>
          </form>
          <hr className="login-register-hr" />
          <button className="login-register-btn" onClick={pushToRegistrationPage}>sign up</button>
        </div>
      </div>
    </center>
  );
}