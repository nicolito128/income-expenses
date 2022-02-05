const controller = {};

controller.save = function(req, res){
    let transactionType = '';
    let amount = 0;
    if (req.body.income) {
        transactionType = 'income';
        amount = req.body.amount;
    } else {
        transactionType = 'expense';
        amount = -req.body.amount;
    }

    const data = {
        id: null,
        concept: req.body.concept,
        amount: amount,
        type: transactionType
    };

    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        }

        conn.query('INSERT INTO transactions set ? ', [data], (err, row) => {
            if (err) {
                res.json(err);
            }

            res.redirect('/');
        })
    })
}

module.exports = controller;