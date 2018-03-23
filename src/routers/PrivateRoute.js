import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = ({
  isAuth,
  component: Component,
  //renaming destructured component from the props for rendering to uppercase C //convention
  ...rest
}) => (
  <Route {...rest} component={(props) => ( //component as a required prop for Route component
    isAuth ? (
      <div>
        <Header />
        <Component {...props}/>
      </div>
    ) : (
      <Redirect to="/"/>
    )
  
  )}
  />
);

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);