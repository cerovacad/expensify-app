import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense = ( {description = '', note = '', amount = 0, createdAt = 0} = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
}); 
//REMOVE_EXPENSE
export const rmvExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//EDIT EXPENSE
export const editExpense = (id, editedProps) => ({
    type: 'EDIT_EXPENSE',
    id,
    editedProps
});
