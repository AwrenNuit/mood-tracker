import React, { useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import NewEntry from '../NewEntry/NewEntry';
import NewUser from '../NewUser/NewUser';
import Settings from '../Settings/Settings';
import Signup from '../Signup/Signup';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  
  const history = useHistory();
  const dispatch = useCallback(useDispatch());
  const location = useLocation();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch({type: 'FETCH_USER'});
  }, [dispatch]);

  useEffect(() => {
    if(!user) {
      history.push('/login');
    }
  }, [user && user.id]);

  return (
    <Router>
      {user && user.id ?
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
      :
        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>
      }
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