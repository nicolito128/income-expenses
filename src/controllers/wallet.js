const controller = {};

controller.wallet = function(req, res) {

    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        }

        conn.query('SELECT * FROM transactions', (err, rows) => {
            if (err) {
                res.json(err);
            }

            let totalAmount = 0;
            rows.forEach(transaction => {
                totalAmount += transaction.amount
            });
            
            res.render('wallet', {
                data: {
                    amount: totalAmount,
                    transactions: rows
                }
            })
        })
    })
}

module.exports = controller;