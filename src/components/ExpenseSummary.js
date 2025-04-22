// src/components/ExpenseSummary.js

import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <h2>Expense Summary</h2>
      <p>Total Expenses: ${totalExpenses}</p>
    </div>
  );
};

export default ExpenseSummary;
