import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  isAuth,
  component: Component,
  //renaming destructured component from the props for rendering to uppercase C //convention
  ...rest
}) => (
  <Route {...rest} component={(props) => ( //component as a required prop for Route component
    !isAuth ? (
        <Component {...props}/>  
    ) : (
      <Redirect to="/dashboard"/>
    )
  )}
  />
);

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute);