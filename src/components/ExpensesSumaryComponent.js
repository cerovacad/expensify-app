import React from 'react';
import { connect } from 'react-redux';
import getVisible from '../selectors/getVisible'
import expensesTotal from '../selectors/expensesTotal'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

const ExpensesSummaryComponent = (props) => (
  <div className='summary-component'>
    <div className='content-container'>
      <p>Viewing <strong>{props.total.length}</strong> expenses totaling <strong>{numeral(expensesTotal(props.total) / 100).format('$0,00.00')}</strong></p>
      <Link className='btn' to='/create'>Add expense</Link>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
      total: getVisible(state.expenses, state.filters)
  };
}; 

export default connect(mapStateToProps)(ExpensesSummaryComponent);