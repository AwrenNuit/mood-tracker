import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../Login/Login.css';

export default function Signup() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordView, setConfirmPasswordView] = useState('password');
  const [email, setEmail] = useState('');
  const [mailingList, setMailingList] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordView, setPasswordView] = useState('password');

  const handleSignup = e => {
    e.preventDefault();
    if(password === confirmPassword && email){
      dispatch({type: `REGISTER`, payload: {email, password, mailingList}});
      history.push('/welcome');
    }
    else {
      alert(`Please check your passwords`);
    }
  }

  const pushToLoginPage = () => history.push('/');

  const toggleConfirmPasswordView = () => confirmPasswordView === 'password' ? setConfirmPasswordView('text') : setConfirmPasswordView('password');

  const togglePasswordView = () => passwordView === 'password' ? setPasswordView('text') : setPasswordView('password');

  return(
    <center>
      <div className="login-register-main-container">
        <h1 className="login-register-heading">Sign Up</h1>
        <div className="login-register-content-container">
          <form onSubmit={handleSignup}>
            <input 
              className="text-input" 
              type="text" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              placeholder="email" 
            />
            <input 
              className="text-input" 
              type={passwordView} 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} 
              placeholder="password" 
            />
            <input 
              type="checkbox" 
              onChange={togglePasswordView} 
            /> Show Password
            <input 
              className="text-input" 
              type={confirmPasswordView} 
              value={confirmPassword} 
              onChange={(e)=>setConfirmPassword(e.target.value)} 
              placeholder="confirm password" 
            />
            <input 
              type="checkbox" 
              onChange={toggleConfirmPasswordView} 
            /> Show Password
            <div className="login-register-mailing-list">
              <label>
                <input 
                  type="checkbox" 
                  value={mailingList} 
                  onChange={()=>setMailingList(!mailingList)} 
                />
                Join mailing list?
              </label>
            </div>
            <button className="login-register-btn" type="submit">Sign Up</button>
          </form>
          <hr className="login-register-hr" />
          <button className="login-register-btn" onClick={pushToLoginPage}>cancel</button>
        </div>
      </div>
    </center>
  );
}