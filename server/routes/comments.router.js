const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res) => {

    const sqlQuery = `SELECT * from "comments"`

    pool.query(sqlQuery).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in get', error);
        res.sendStatus(500);
    })
});


module.exports = router;