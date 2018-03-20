import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisible from '../selectors/getVisible'

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
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

