import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpensesListFilters';
import ExpensesSummaryComponent from './ExpensesSumaryComponent';

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpenseListFilters />
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;
