import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisible from '../selectors/getVisible'

const ExpenseList = (props) => (
    <div className='content-container expenses-list'>
        <div className='expense-list__header'>
            <p>Expenses</p>
            <p className='visible'>Amount</p>
        </div>
        {props.expenses.map( (item) => {
            return <ExpenseListItem {...item} key={item.id}/>
        })}
    </div>

);



const mapStateToProps = (state) => {
    return {
        expenses: getVisible(state.expenses, state.filters)
    };
}; 

export default connect(mapStateToProps)(ExpenseList);

