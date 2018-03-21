const expensesDefState = [];

export default (state = expensesDefState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((obj) => {
                return obj.id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map( (obj) => {//map over arr of objects
                if(obj.id === action.id) { //if object.id === id provided as 1st arg in action creator
                    return { //return same object with overwritten props
                        ...obj,
                        ...action.editedProps
                    }
                }else{
                    return obj;
                }
            }); 
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};
