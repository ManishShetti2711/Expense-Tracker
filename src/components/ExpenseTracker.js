import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import SmartSuggestions from './SmartSuggestions';
import CollaborativeBudgeting from './CollaborativeBudgeting';
//import ExpenseForm from './ExpenseForm';<ExpenseForm onAddExpense={addExpense} />
import ExpenseList from './ExpenseList';
//import ExpenseSummary from './ExpenseSummary';<ExpenseSummary expenses={expenses} />

const ExpenseTracker = () => {
  const [theme, setTheme] = useState('light');
  const [expenses, setExpenses] = useState([]);
  const [suggestions] = useState([
    "Try cooking at home to save on dining expenses.",
    "Consider using public transport for commuting.",
    "Check out these budget-friendly shopping tips."
  ]);

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className={`App-${theme}`}>
      <ThemeSwitcher onChangeTheme={changeTheme} />
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <main>
        <div className="dashboard">
          <SmartSuggestions suggestions={suggestions} />
          <CollaborativeBudgeting onInviteUser={() => console.log('Inviting user...')} />
        </div>
        <div className="expense-form">
          
          <ExpenseList expenses={expenses} />
          
        </div>
      </main>
    </div>
  );
};

export default ExpenseTracker;
