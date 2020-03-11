import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

  const history = useHistory();

  return(
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
        <button className="navbar-btn" onClick={()=>{history.push('/login')}}>Logout</button>
      </div>
    </div>
  );
}