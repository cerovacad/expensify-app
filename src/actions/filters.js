//SET_TEXT_FILTER
export const setTxtFilter = (str = '') => ({
    type: 'SET_TEXT_FILTER',
    str
});
//SORT_BY_DATE
export const sortDate = () => ({
    type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
export const sortAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
//SET_START_DATE
export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});
//SET_END_DATE
export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});