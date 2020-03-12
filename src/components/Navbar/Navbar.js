import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Navbar.css';

export default function Navbar() {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch({type: `LOGOUT`});
    dispatch({type: `CLEAR_ALL`});
    history.push(`/login`);
  }

  return(
    <>
      <div className="whitespace"></div>
      <div className="navbar-container">
        <div className="navbar-tab navbar-entries">
          <button className="navbar-btn" onClick={()=>{history.push('/home')}}>Entries</button>
        </div>
        <div className="navbar-tab navbar-new">
          <button className="navbar-btn" onClick={()=>{history.push('/new-entry')}}>New Entry</button>
        </div>
        <div className="navbar-tab navbar-settings">
          <button className="navbar-btn" onClick={()=>{history.push('/settings')}}>Settings</button>
        </div>
        <div className="navbar-tab navbar-logout">
          <button className="navbar-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}