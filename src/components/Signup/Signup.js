import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../Login/Login.css';

export default function Signup() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mailingList, setMailingList] = useState(false);
  const [password, setPassword] = useState('');

  const handleSignup = e => {
    e.preventDefault();
    if(password === confirmPassword){
      dispatch({type: `REGISTER`, payload: email, password, mailingList});
    }
  }

  const pushToLoginPage = () => history.push('/');

  return(
    <center>
      <div className="login-register-main-container">
        <h1 className="login-register-heading">Sign Up</h1>
        <div className="login-register-content-container">
          <form onSubmit={handleSignup}>
            <input className="text-input" type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
            <input className="text-input" type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
            <input className="text-input" type="password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="confirm password" />
            {/* for newsletter & insights? */}
            <input className="text-input" type="checkbox" onChange={(e)=>setMailingList(e.target.value)} />
            <button className="login-register-btn" type="submit">Sign Up</button>
          </form>
          <hr className="login-register-hr" />
          <button className="login-register-btn" onClick={pushToLoginPage}>cancel</button>
        </div>
      </div>
    </center>
  );
}