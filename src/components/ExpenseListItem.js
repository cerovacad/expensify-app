import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => (
    <Link className='link' to={`/edit/${id}`}>
        <div className='expense-item'>
            <div>
            <h3 className='expense-item__title'>{description}</h3>
            <p className='expense-item__date'>{moment(createdAt).format('MMMM Do, YYYY')}</p>
            </div>
            <p className='expense-item__amount'>{numeral(amount / 100).format('$0,00.00')}</p>
        </div>
     </Link>    
);

export default ExpenseListItem;