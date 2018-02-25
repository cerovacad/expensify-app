import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpensesListFilters';

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpenseListFilters />
    This is from my dashboard component!
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;
