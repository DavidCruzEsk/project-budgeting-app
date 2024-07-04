const express = require('express');
const cors = require('cors');
const transaction = require('./src/Controllers/Controllers');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Budget App!');
});

app.use('/budget-data', transaction);

app.use('/budget-data/:index', transaction);

app.get('*', (req, res) => {
    res.status(404).send('Route does not exist');
});

module.exports = app;