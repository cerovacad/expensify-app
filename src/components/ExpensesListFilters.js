import React from 'react';
import { connect } from 'react-redux';
import { setTxtFilter, sortAmount, sortDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
 

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };

    render() {
        return (
            <div>
                <span>Search:</span>

                <input type="text" value={this.props.filters.text}
                onChange={ (e) => {
                    this.props.dispatch(setTxtFilter(e.target.value));
                }}/>

                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if(e.target.value === "date"){
                            this.props.dispatch(sortDate());
                        }else if(e.target.value === "amount"){
                            this.props.dispatch(sortAmount());
                        }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
               
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);