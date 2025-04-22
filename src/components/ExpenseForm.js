import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      description,
      amount: parseFloat(amount),
      category,
    };
    // Send POST request to backend
    fetch('/api/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExpense),
    })
    .then(response => response.json())
    .then(data => {
      onAddExpense(data); // Update UI with new expense
      // Reset form fields
      setDescription('');
      setAmount('');
      setCategory('');
    })
    .catch(error => console.error('Error adding expense:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        {/* Add more categories as needed */}
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
