const express = require('express');
const router = express.Router();
const db = require('../db');

// Create
router.post('/', (req, res) => {
    const { first_name, last_name, identification_number, phone } = req.body;
    db.query(
        'INSERT INTO Client (first_name, last_name, identification_number, phone) VALUES (?, ?, ?, ?)',
        [first_name, last_name, identification_number, phone],
        (err, result) => {
            if (err) throw err;
            res.json({ message: 'Customer added', id: result.insertId });
        }
    );
});

// Read
router.get('/', (req, res) => {
    db.query('SELECT * FROM Client', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Update
router.put('/:id', (req, res) => {
    const { first_name, last_name, identification_number, phone } = req.body;
    db.query(
        'UPDATE Client SET first_name=?, last_name=?, identification_number=?, phone=? WHERE client_id=?',
        [first_name, last_name, identification_number, phone, req.params.id],
        (err) => {
            if (err) throw err;
            res.json({ message: 'Customer update' });
        }
    );
});

// Delete
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM Client WHERE client_id=?', [req.params.id], (err) => {
        if (err) throw err;
        res.json({ message: 'Customer delete' });
    });
});

module.exports = router;