import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../Login/Login.css';

export default function Signup() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = () => password === confirmPassword ? dispatch({type: `REGISTER`, payload: email, password, username}) : '';

  const pushToLoginPage = () => history.push('/');

  return(
    <center>
      <div className="login-register-main-container">
        <h1 className="login-register-heading">Sign Up</h1>
        <div className="login-register-content-container">
          <form onSubmit={handleSignup}>
            <input className="login-register-input" type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="username" />
            <input className="login-register-input" type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
            <input className="login-register-input" type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
            <input className="login-register-input" type="text" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="confirm password" />
            <button className="login-register-btn" type="submit">Sign Up</button>
          </form>
          <hr className="login-register-hr" />
          <button className="login-register-btn" onClick={pushToLoginPage}>cancel</button>
        </div>
      </div>
    </center>
  );
}