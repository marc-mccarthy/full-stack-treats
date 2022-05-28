const router = require('express').Router();
const { query_timeout } = require('pg/lib/defaults');
const pool = require('../modules/pool');

// GET /treats
router.get('/', (req, res) => {
    console.log(`GET Request`);
    let queryString = `SELECT * FROM treats`;
    pool.query(queryString)
    .then(result => {
        res.send(result.rows);
    }).catch(result => {
    res.sendStatus(500);
    })
})

// POST /treats (req.body)
router.post('/', (req, res) => {
    console.log(`POST Request: ${JSON.stringify(req.body)}`);
    let queryString = `INSERT INTO treats (name, description, pic) VALUES ($1, $2, $3)`;
    let values = [req.body.name, req.body.description, req.body.pic];
    pool.query(queryString, values)
    .then(result => {
        res.sendStatus(200);
    }).catch(result => {
        res.sendStatus(500);
    })
})

// PUT /treats (req.query)
router.put('/', (req, res) => {
    console.log(`PUT Request: ${req.body} & ${req.query.id}`);
    let queryString = `UPDATE treats SET description = $1 WHERE id = $2`;
    let values = [req.body.description, req.query.id];
    pool.query(queryString, values)
    .then(result => {
        res.sendStatus(200);
    }).catch(result => {
        res.sendStatus(500);
    })
})

// DELETE /treats (req.query)
router.delete('/', (req, res) => {
    console.log(`DELETE Request: ${req.body} & ${req.query.id}`);
    let queryString = `DELETE FROM treats WHERE id = $1`;
    let values = [req.query.id];
    pool.query(queryString, values)
    .then(result => {
        res.sendStatus(200);
    }).catch(result => {
        res.sendStatus(500);
    })
})

module.exports = router;
