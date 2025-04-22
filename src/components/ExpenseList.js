// src/components/ExpenseList.js
/*
import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description} - ${expense.amount} ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
*/
import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm'; // Import the ExpenseForm component

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    fetchExpenses();
  }, []); // Fetch expenses when component mounts

  const fetchExpenses = () => {
    fetch('/api/expenses')
      .then(response => response.json())
      .then(data => {
        setExpenses(data);
        calculateTotalExpense(data);
      })
      .catch(error => console.error('Error fetching expenses:', error));
  };

  const calculateTotalExpense = (expenses) => {
    const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
    setTotalExpense(parseFloat(total.toFixed(2))); // Ensure totalExpense is a number
  };

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]); // Add the new expense to the list
    calculateTotalExpense([...expenses, newExpense]); // Recalculate total expense with the updated list
  };

  return (
    <div>
      {/* Render ExpenseForm component to add new expense */}
      <ExpenseForm onAddExpense={handleAddExpense} />
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description} - ${expense.amount} ({expense.category})
          </li>
        ))}
      </ul>
      <h2>Expense Summary</h2>
      <p>Total Expense: ${totalExpense.toFixed(2)}</p>
      
    </div>
  );
};

export default ExpenseList;
