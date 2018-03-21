import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
}); 

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '', 
            amount = 0,
            createdAt = 0 
        } = expenseData;

        const expense = { description, note, amount, createdAt};

        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key, 
                ...expense
            }));
        });
    };
};

//REMOVE_EXPENSE
export const rmvExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRmvExpense = (id) => {
    return (dispatch) => {
        return database.ref('expenses').child(id).remove().then(() => {
            dispatch(rmvExpense(id));
        });
    };
};

//EDIT EXPENSE
export const editExpense = (id, editedProps) => ({
    type: 'EDIT_EXPENSE',
    id,
    editedProps
});

export const startEditExpense = (id, editedProps) => {
    return (dispatch) => {
        return database.ref('expenses').child(id).update({...editedProps}).then(() => {
            dispatch(editExpense(id, editedProps));
        });
    };
};
//SET EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {

            const expenses = [];

            snapshot.forEach((childrenSnapshot) => {
                expenses.push({
                    id: childrenSnapshot.key,
                    ...childrenSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        
        });
    };
};