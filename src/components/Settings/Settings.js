import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Settings() {

  const dispatch = useCallback(useDispatch());
  const history = useHistory();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return(
    <>
      <h1>Settings</h1>
      <h3>Personal</h3>
        <input type="text" value={username} onChange={setUsername} placeholder="username" />
        <input type="text" value={email} onChange={setEmail} placeholder="email" />
        <input type="password" value={password} onChange={setPassword} placeholder="password" />
        <input type="password" value={confirmPassword} onChange={setConfirmPassword} placeholder="confirm password" />
      <h3>Trackers</h3>
        <input type="checkbox" /> Food
        <input type="checkbox" /> Movement
        <input type="checkbox" /> Sleep
        <input type="checkbox" /> Therapy
    </>
  );
}