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

router.post('/', (req,res) => {
    
    const sqlQuery = `INSERT INTO "comments"
                        ("routeId", "userId", "comment")
                        VALUES ($1, $2, $3);`;
    const SqlParams = [
        req.body.routeId,
        req.user.id,
        req.body.newComment
    ];
    console.log('in comments router post', req.body)
    pool.query(sqlQuery,SqlParams)
        .then(dbRes => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
});


module.exports = router;