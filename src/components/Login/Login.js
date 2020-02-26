import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Login() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => dispatch({type: `LOGIN`, payload: password, username});

  const pushToRegistrationPage = () => history.push('/signup');

  return(
    <div className="login-register-main-container">
      <h1>Mood Tracker</h1>
      <div className="login-register-content-container">
        <form onSubmit={handleLogin}>
          <input type="text" onChange={setUsername(e.target.value)} />
          <input type="password" onChange={setPassword(e.target.value)} />
          <button type="submit">Log In</button>
        </form>
        <hr />
        <button onClick={pushToRegistrationPage}>sign up</button>
      </div>
    </div>
  );
}