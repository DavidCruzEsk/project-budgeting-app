const express = require('express');
const budgetData = require('../Models/Data/budgetTable_index-data.json');
const { validateIndex, validateBody } = require('../Helpers/Controller.helpers');

const transaction = express.Router();

transaction.get('/', (req, res) => {
    res.json(budgetData);
});

transaction.get('/:index', validateIndex, (req, res) => {
    const { index } = req.params;
    res.json(budgetData[index]);
});

transaction.post('/', validateBody, (req, res) => {
    budgetData.push(req.body);
    res.status(200).json(budgetData[budgetData.length - 1]);
});

transaction.put('/:index', validateIndex, validateBody, (req, res) => {
    const { index } = req.params;
    budgetData[index] = req.body;
    res.status(200).json(budgetData[index]);
});

transaction.delete('/:index', validateIndex, (req, res) => {
    const { index } = req.params;
    const deletedIndex = budgetData.splice(index, 1);
    res.status(200).json(deletedIndex);
});

module.exports = transaction;