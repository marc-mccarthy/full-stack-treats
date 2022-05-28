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


// DELETE /treats (req.query)

module.exports = router;
