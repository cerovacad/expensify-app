export default (arr) => {
  return arr.map((expense) => {
    return expense.amount;
  }).reduce((sum, value) => {
    return sum + value;
  }, 0)
};