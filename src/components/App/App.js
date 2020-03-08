import React from 'react';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import NewEntry from '../NewEntry/NewEntry';
import NewUser from '../NewUser/NewUser';
import Settings from '../Settings/Settings';
import Signup from '../Signup/Signup';

export default function App() {
  
  const location = useLocation();

  return (
    <Router>
      <Route exact path='/login' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/new-entry' component={NewEntry} />
      <Route path='/settings' component={Settings} />
      <Route path='/signup' component={Signup} />
      <Route path='/welcome' component={NewUser} />
      {location.pathname === '/login' || location.pathname === '/signup' ? '' : <Navbar />}
    </Router>
  );
}