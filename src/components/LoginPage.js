import React from 'react';
import { startLogin } from '../actions/auth';
import { connect } from 'react-redux'

const LoginPage = (props) => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>Expensify</h1>
      <button className='btn' onClick={props.startLogin}>Login</button>
    </div>
  </div>
);


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);