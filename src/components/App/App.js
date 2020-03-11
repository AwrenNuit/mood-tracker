import React from 'react';
import { BrowserRouter as Router, Route, useLocation, Redirect } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import NewEntry from '../NewEntry/NewEntry';
import NewUser from '../NewUser/NewUser';
import Settings from '../Settings/Settings';
import Signup from '../Signup/Signup';

export default function App() {
  
  const dispatch = useCallback(useDispatch());
  const location = useLocation();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch({type: 'FETCH_USER'});
  }, [dispatch]);

  useEffect(() => {
    if(user && user.id){
      dispatch({ type: 'GET_USER_DETAILS', payload: userID.id });
    }
  },[dispatch, user]);

  return (
    <Router>
      {user ?
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