import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from '../Login/Login';

export default function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={} />
      </Router>
    </>
  );
}