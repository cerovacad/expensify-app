import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/store';
import { addExpense } from './actions/expenses';
import { setTxtFilter, sortAmount } from './actions/filters';
import getVisible from './selectors/getVisible';

/////////////////////////////////////
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Nikola', amount: 100, createdAt: 12345656}));
store.dispatch(addExpense({description: 'Natasa', amount: 100, createdAt: 12345656}));
store.dispatch(addExpense({description: 'Gordana', amount: 100, createdAt: 12345656}));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
