import React from 'react';
import { connect } from 'react-redux';
import getVisible from '../selectors/getVisible'
import expensesTotal from '../selectors/expensesTotal'
import numeral from 'numeral'

const ExpensesSummaryComponent = (props) => (
    <div>
      <p>Total number of expenses: {props.total.length}</p>
      <p>Total amount: {numeral(expensesTotal(props.total) / 100).format('$0,00.00')}</p>
    </div>
);

const mapStateToProps = (state) => {
  return {
      total: state.expenses
  };
}; 

export default connect(mapStateToProps)(ExpensesSummaryComponent);