function validateIndex(req, res, next) {
    const { index } = req.params;
    
    if (isNaN(index) || index < 0) {
        res.status(400).json({error: 'Invalid Array Index'});
    }

    next();
}

function validateBody(req, res, next) {
    if (!('item_name' in req.body)) {
        res.status(400).json({error: '"item_name" key must be in the transactions data'});
    } else if (typeof req.body.item_name !== 'string') {
        res.status(400).json({error: 'data type of "item_menu" value must be a string.'});
    }

    if (!('amount' in req.body)) {
        res.status(400).json({error: '"amount" key must be in the transactions data'});
    } else if (typeof req.body.amount !== 'number') {
        res.status(400).json({error: 'data type of "amount" value must be a number.'});
    } else if (!req.body.amount.toFixed(2)) {  // THIS CONDITION IS FLAWED. MUST OPTIMIZE LATER.
        res.status(400).json({error: '"amount" value must have two decimal places.'});
    }

    const dateRegex = /(?:\d{2})[\/\-](?:\d{2})[\/\-](?:\d{4})/;

    if (!('date' in req.body)) {
        res.status(400).json({error: '"date" key must be in the transactions data'});
    } else if (typeof req.body.date !== 'string') {
        res.status(400).json({error: '"date" value must be a string.'});
    } else if (!(dateRegex.test(req.body.date))) {
        res.status(400).json({error: 'value of "date" must be in the format example of: "03/05/2000" or "03-05-2000".'});
    }

    if (!('from' in req.body)) {
        res.status(400).json({error: '"from" key must be in the transactions data'});
    } else if (typeof req.body.from !== 'string') {
        res.status(400).json({error: '"From" value must be a string'});
    }

    if (!('category' in req.body)) {
        res.status(400).json({error: '"category" key must be in the transactions data'});
    } else if (typeof req.body.category !== 'string') {
        res.status(400).json({error: '"category" value must be a string'});
    }

    next();
}

module.exports = { validateIndex, validateBody };