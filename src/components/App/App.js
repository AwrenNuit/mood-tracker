import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NewEntry from '../NewEntry/NewEntry';
import NewUser from '../NewUser/NewUser';
import Settings from '../Settings/Settings';
import Signup from '../Signup/Signup';

export default function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/new-entry' component={NewEntry} />
      <Route path='/settings' component={Settings} />
      <Route path='/signup' component={Signup} />
      <Route path='/welcome' component={NewUser} />
    </Router>
  );
}