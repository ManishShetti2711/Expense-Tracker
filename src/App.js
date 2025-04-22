import React from 'react';
import './App.css'; 
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <ExpenseTracker />
      </main>
    </div>
  );
}

export default App;
