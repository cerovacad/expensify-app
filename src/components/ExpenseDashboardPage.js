import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpensesListFilters';
import ExpensesSummaryComponent from './ExpensesSumaryComponent';

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpensesSummaryComponent/>
    <ExpenseListFilters />
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;
