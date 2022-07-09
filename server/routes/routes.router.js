const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', (req, res) => {

    const sqlQuery = `SELECT * from "routes"`

    pool.query(sqlQuery).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in get', error);
        res.sendStatus(500);
    })
});

router.get('/top', (req, res) => {
    
    const sqlQuery = `SELECT * from "routes" LIMIT 3;`

    pool.query(sqlQuery).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in getting top', error);
        res.sendStatus(500);
    })
})

router.get('/:id', (req, res) => {
    
    const sqlQuery = `SELECT * from "routes" 
                    WHERE "routes"."id" = $1;`
    const sqlParams = [req.params.id]
    console.log('params are', sqlParams)

    pool.query(sqlQuery, sqlParams).then((result) => {
        // console.log('in routes router get id', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in getting details', error);
        res.sendStatus(500);
    })
})


module.exports = router;