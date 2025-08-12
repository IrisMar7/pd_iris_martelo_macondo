const express = require('express');
const router = express.Router();
const db = require('../json/db');

//Total paid by each client
router.get('/total-paid', (req, res) => {
    const sql = `
        SELECT c.client_id, c.first_name, c.last_name, 
               SUM(i.paid_amount) AS total_paid
        FROM Client c
        JOIN Invoice i ON c.client_id = i.client_id
        GROUP BY c.client_id, c.first_name, c.last_name;
    `;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Outstanding invoices with client and transaction
router.get('/pending-invoices', (req, res) => {
    const sql = `
        SELECT i.invoice_id, c.first_name, c.last_name, 
               i.billed_amount, i.paid_amount, t.transaction_id
        FROM Invoice i
        JOIN Client c ON i.client_id = c.client_id
        LEFT JOIN Transaction t ON i.invoice_id = t.invoice_id
        WHERE i.paid_amount < i.billed_amount;
    `;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// List of transactions by platform
router.get('/transactions-by-platform/:platform', (req, res) => {
    const { platform } = req.params;
    const sql = `
        SELECT t.transaction_id, p.platform_name, c.first_name, c.last_name, i.invoice_id
        FROM Transaction t
        JOIN Platform p ON t.platform_id = p.platform_id
        JOIN Invoice i ON t.invoice_id = i.invoice_id
        JOIN Client c ON i.client_id = c.client_id
        WHERE p.platform_name = ?;
    `;
    db.query(sql, [platform], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// consults advance

app.get('/api/queries/total-paid', (req, res) => {
    const sql = `
        SELECT c.client_id, c.first_name, c.last_name, 
               SUM(i.paid_amount) AS total_paid
        FROM Client c
        JOIN Invoice i ON c.client_id = i.client_id
        GROUP BY c.client_id, c.first_name, c.last_name;
    `;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/api/queries/pending-invoices', (req, res) => {
    const sql = `
        SELECT i.invoice_id, c.first_name, c.last_name, 
               i.billed_amount, i.paid_amount, t.transaction_id
        FROM Invoice i
        JOIN Client c ON i.client_id = c.client_id
        LEFT JOIN Transaction t ON i.invoice_id = t.invoice_id
        WHERE i.paid_amount < i.billed_amount;
    `;
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/api/queries/transactions-by-platform/:platform', (req, res) => {
    const { platform } = req.params;
    const sql = `
        SELECT t.transaction_id, p.platform_name, c.first_name, c.last_name, i.invoice_id
        FROM Transaction t
        JOIN Platform p ON t.platform_id = p.platform_id
        JOIN Invoice i ON t.invoice_id = i.invoice_id
        JOIN Client c ON i.client_id = c.client_id
        WHERE p.platform_name = ?;
    `;
    db.query(sql, [platform], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


module.exports = router;