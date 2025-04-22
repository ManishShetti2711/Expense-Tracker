const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Manish@2711',
    database: 'expense_tracker',
    port: 3307 // Default MySQL port number
});

app.use(cors());
app.use(bodyParser.json());

// Route to get all expenses
app.get('/api/expenses', (req, res) => {
    connection.query('SELECT * FROM expenses', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Route to add a new expense
app.post('/api/expenses', (req, res) => {
    const { description, amount, category } = req.body;
    connection.query('INSERT INTO expenses (description, amount, category) VALUES (?, ?, ?)', [description, amount, category], (error, results) => {
        if (error) throw error;
        const addedExpense = { id: results.insertId, description, amount, category };
        res.json(addedExpense); // Return the added expense
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
