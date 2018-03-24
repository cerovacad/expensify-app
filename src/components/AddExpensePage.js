import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {startAddExpense} from '../actions/expenses';
import { Link } from 'react-router-dom';

export class AddExpensePage extends React.Component {
  
  onSubmit=(expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  };

  render(){
    return (
      <div>
        <ExpenseForm
          {...this.props} 
          onSubmit={this.onSubmit}
        />
        <div className='btn-align content-container'>
        <Link className='btn btn-danger' to='/dashboard'>Cancel</Link>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
