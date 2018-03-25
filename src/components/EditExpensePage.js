import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRmvExpense} from '../actions/expenses';


const EditExpensePage = (props) => {
  return (
    <div className='content-container'>
      <h2 className='add-expense__title'>Edit expense</h2>
      <ExpenseForm
      edit={true}
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(startEditExpense(props.expense.id, expense));
        props.history.push('/dashboard');
      }}
      />
      <div className='btn-align content-container'>
      <button
        className='btn btn-delete' 
        onClick={() => {
        props.dispatch(startRmvExpense(props.expense.id));
        props.history.push('/dashboard');
      }}>Remove</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find( (expense) => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);
