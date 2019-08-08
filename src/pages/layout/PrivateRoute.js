import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = rest;
  return (
    <Route
      {...rest}
      render={props =>
        user.email ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  user: state.profile.user,
});

export default connect(mapStateToProps)(PrivateRoute);
