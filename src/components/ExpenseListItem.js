import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <span>{numeral(amount / 100).format('$0,00.00')}</span><br/>
        <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
);

export default ExpenseListItem;