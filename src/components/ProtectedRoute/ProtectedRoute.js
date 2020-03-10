import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';

export const ProtectedRoute = props => {

  const user = useSelector(state => state.user);
  const loginMode = useSelector(state => state.loginMode);

  const {
    component: ComponentToProtect,
    user,
    loginMode,
    ...otherProps
  } = props;

  let ComponentToShow;

  if(user && user.id){
    ComponentToShow = ComponentToProtect;
  } 
  else if(loginMode === 'login'){
    ComponentToShow = Login;
  } 
  else {
    ComponentToShow = Login;
  }
  
  return (
      <Route {...otherProps} component={ComponentToShow} />
  );
}