import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
    <div className="login-register-main-container">
      <h1>Sign Up</h1>
      <div className="login-register-content-container">
        <form onSubmit={handleSignup}>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} />
          <input type="text" onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" onChange={(e)=>setPassword(e.target.value)} />
          <input type="text" onChange={(e)=>setConfirmPassword(e.target.value)} />
          <button type="submit">Sign Up</button>
        </form>
        <hr />
        <button onClick={pushToLoginPage}>cancel</button>
      </div>
    </div>
  );
}