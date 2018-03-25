import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
// import { Link } from 'react-router-dom';
// import 'react-dates/initialize';

class ExpenseForm extends Component {
    constructor(props){
        super(props);

        this.state = { 
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focusedCalendar: false,
            erorr: undefined
         };

    }

     onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
     };
     onNoteChange = (e) => {
         const note = e.target.value;
         this.setState(() => ({ note }));
     };
     onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));
        }   
    };
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({ erorr: true }));
        }else{
            this.setState(() => ({ erorr: false }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div className='content-container'>
                <div>  
                    <form className='form' onSubmit={this.onSubmit}>
                        {this.state.erorr && <p>Please provide description and amount</p>}
                        <input type="text" 
                            autoFocus 
                            placeholder="Description" 
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />

                        <input type="text" 
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />

                        <div className='w10'>
                            <SingleDatePicker 
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>

                        <textarea placeholder="Add note"
                                value={this.state.note}
                                onChange={this.onNoteChange}
                        ></textarea>

                        <button className='btn'>{this.props.edit == true ? 'Save changes' : 'Add'}</button>
                    </form>
                </div>        
            </div>
        );
    }
}

export default ExpenseForm;