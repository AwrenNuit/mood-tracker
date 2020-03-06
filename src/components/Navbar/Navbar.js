import React from 'react';

export default function Navbar() {

  return(
    <div className="navbar-container">
      <div className="tab">
        <button onclick={history.push()}>Entries</button>
      </div>
      <div className="tab">
        <button onclick={history.push('/new-entry')}>New Entry</button>
      </div>
      <div className="tab">
        <button onclick={history.push('/settings')}>Settings</button>
      </div>
      <div className="tab">
        <button onclick={history.push('/login')}>Logout</button>
      </div>
    </div>
  );
}