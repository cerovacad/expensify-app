import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <h1>Expensify</h1>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/create" component={AddExpensePage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true}/>
        <Route component={NotFoundPage} exact={true}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
