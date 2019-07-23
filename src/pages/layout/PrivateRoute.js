import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../../app-store/app-store';

const isLogged = () => {
  const state = store.getState();
  if (state.user.user.email) {
    return true;
  } else {
    return false;
  }
};

store.subscribe(isLogged);

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogged() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
